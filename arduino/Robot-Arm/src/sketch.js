class RobotArm {
    constructor(segmentLength1, segmentLength2, posX, posY) {
        this.segmentLength1 = segmentLength1;
        this.segmentLength2 = segmentLength2;
        this.jointAngle1 = 0;
        this.jointAngle2 = 0;
        this.posX = posX;
        this.posY = posY;
    }

    draw() {
        // Get the target position from the mouse cursor
        let targetX = mouseX;
        let targetY = mouseY;
    
        // Calculate angles using inverse kinematics
        let angles = this.calculateIK(targetX, targetY);
        this.jointAngle1 = angles[0];
        this.jointAngle2 = angles[1];
    
        // Draw the robot arm
        let endEffectorX = this.posX + cos(this.jointAngle1) * this.segmentLength1 + cos(this.jointAngle1 + this.jointAngle2) * this.segmentLength2;
        let endEffectorY = this.posY + sin(this.jointAngle1) * this.segmentLength1 + sin(this.jointAngle1 + this.jointAngle2) * this.segmentLength2;
    
        stroke(0);
        strokeWeight(2);
    
        // Draw first segment
        line(this.posX, this.posY, this.posX + cos(this.jointAngle1) * this.segmentLength1, this.posY + sin(this.jointAngle1) * this.segmentLength1);
    
        // Draw second segment
        line(this.posX + cos(this.jointAngle1) * this.segmentLength1, this.posY + sin(this.jointAngle1) * this.segmentLength1, endEffectorX, endEffectorY);

        // Draw end effector (tip of the robot arm)
        fill(0, 10); // Update opacity to 10%
        ellipse(endEffectorX, endEffectorY, 10, 10);
    
        // Draw reachable area
        noFill();
        stroke(255, 0, 0, 30); // Update color to red and opacity to 10%
        let reachableRadius = this.segmentLength1 + this.segmentLength2;
        ellipse(this.posX, this.posY, reachableRadius * 2, reachableRadius * 2);
        
        // Draw inner unreachable area
        let innerUnreachableRadius = abs(this.segmentLength1 - this.segmentLength2);
        ellipse(this.posX, this.posY, innerUnreachableRadius * 2, innerUnreachableRadius * 2);

        // Draw label with coordinates
        fill(0);
        text(`(${targetX - (width / 2)}, ${-targetY + (height / 2)})`, targetX + 10, targetY + 10);
    }
    

    calculateIK(targetX, targetY) {
        // Inverse kinematics calculations
        let d = dist(this.posX, this.posY, targetX, targetY);

        let a1 = atan2(targetY - this.posY, targetX - this.posX);
        let a2 = acos((this.segmentLength1 * this.segmentLength1 + d * d - this.segmentLength2 * this.segmentLength2) / (2 * this.segmentLength1 * d));

        let jointAngle1 = a1 + a2;

        // Limit jointAngle1 to 180 degrees
        jointAngle1 = min(jointAngle1, 180);

        let a3 = acos((this.segmentLength1 * this.segmentLength1 + this.segmentLength2 * this.segmentLength2 - d * d) / (2 * this.segmentLength1 * this.segmentLength2));
        let jointAngle2 = a3 + 180;

        // Check if the point can be reached with the current joint angles
        let endEffectorX = this.posX + cos(jointAngle1) * this.segmentLength1 + cos(jointAngle1 + jointAngle2) * this.segmentLength2;
        let endEffectorY = this.posY + sin(jointAngle1) * this.segmentLength1 + sin(jointAngle1 + jointAngle2) * this.segmentLength2;
        let distanceToTarget = dist(endEffectorX, endEffectorY, targetX, targetY);

        if (distanceToTarget > 0.1) {
            // Bend the other way and check again
            jointAngle1 = a1 - a2;
            jointAngle2 = -a3 + 180;

            // Recalculate the end effector position
            endEffectorX = this.posX + cos(jointAngle1) * this.segmentLength1 + cos(jointAngle1 + jointAngle2) * this.segmentLength2;
            endEffectorY = this.posY + sin(jointAngle1) * this.segmentLength1 + sin(jointAngle1 + jointAngle2) * this.segmentLength2;
            distanceToTarget = dist(endEffectorX, endEffectorY, targetX, targetY);

            if (distanceToTarget > 0.1) {
                // Point cannot be reached with the given joint angles
                console.log("Point cannot be reached.");
            }
        }

        return [jointAngle1, jointAngle2];
    }
    
}

// Usage:
let robotArms = [];

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    for (let i = 0; i < 1; i++) {
        let posX = width / 2
        let posY = height / 2
        let segmentLength1 = 115;
        let segmentLength2 = 155;
        robotArms.push(new RobotArm(segmentLength1, segmentLength2, posX, posY));
    }
}


function draw() {
    background(220);

    for (let i = 0; i < robotArms.length; i++) {
        robotArms[i].draw();
        console.log(robotArms[i].jointAngle1);
    }
}
