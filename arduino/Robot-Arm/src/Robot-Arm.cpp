#include <Arduino.h>
#include <Servo.h>
#include <math.h>

class RobotArm {
    private:
        int basePin;
        int basePotPin;
        int baseAngle;

        int armPin;
        int armPotPin;
        int armAngle;

    public:
        double baseArmLength = 115.0;
        double armLength = 155.0;

        Servo BaseMotor;
        Servo ArmMotor;

        float targetX;
        float targetY;

        RobotArm() {
            this->basePin = 0;
            this->basePotPin = 0;
            this->armPin = 0;
            this->armPotPin = 0;

            this->baseAngle = 0;
            this->armAngle = 0;

            this->targetX = 0;
            this->targetY = 0;
        }

        void setup(int basePin, int basePotPin, int armPin, int armPotPin) {
            this->basePin = basePin;
            this->basePotPin = basePotPin;
            this->armPin = armPin;
            this->armPotPin = armPotPin;

            this->baseAngle = 0;
            this->armAngle = 0;

            BaseMotor.attach(basePin);
            ArmMotor.attach(armPin);
        }

        void move(int angleX, int angleY) {
            BaseMotor.write(angleX);
            ArmMotor.write(angleY);
        }

        // inverse kinematics to calculate angles from x and y coordinates (both motors can only move 180 degrees range)
        void ikMove(int x, int y) {
            // calculate distance from base to end effector
            double L3 = sqrt(pow(x, 2) + pow(y, 2));

            // calculate angle between base and end effector
            double V3 = acos((pow(x,2)+pow(L3,2)-pow(y,2))/(2*x*L3));

            // calculate angle between base and end effector
            double V4 = acos((pow(this->baseArmLength, 2) + pow(L3, 2) - pow(this->armLength, 2)) / (2 * this->baseArmLength * L3));

            // calculate angle between end effector and arm
            double V5 = acos((pow(this->baseArmLength, 2) + pow(this->armLength, 2) - pow(L3, 2)) / (2 * this->baseArmLength * this->armLength));

            // calculate base angle
            double V1 = V3 + V4;

            // convert to degrees
            V1 = V1 * 180 / PI;
            V5 = V5 * 180 / PI;

            // move motors
            BaseMotor.write(V5);
            ArmMotor.write(V1);
        }
};

class Controller {
    public:
        int VRyPin;
        int VRxPin;
        int SWPin;

        float speed;

        Controller() {
            this->VRxPin = 0;
            this->VRyPin = 0;
            this->SWPin = 0;

            this->speed = 1.0;
        }

        void setup(int VRxPin, int VRyPin, int SWPin, float speed) {
            this->VRxPin = VRxPin;
            this->VRyPin = VRyPin;
            this->SWPin = SWPin;

            pinMode(VRxPin, INPUT);
            pinMode(VRyPin, INPUT);
            pinMode(SWPin, INPUT);

            this->speed = speed;
        }
};


RobotArm robotArm = RobotArm();
Controller controller = Controller();

void setup() {
    robotArm.setup(9, A0, 10, A1);
    controller.setup(A2, A3, 2, 0.01);
    Serial.begin(115200);
}

void loop() {
   int VRx = analogRead(controller.VRxPin);
   int VRy = analogRead(controller.VRyPin);
   int SW = digitalRead(controller.SWPin);


   // 0-1023 to - max arm length to max arm length
    float x = map(VRx, 0, 1023, -(robotArm.baseArmLength + robotArm.armLength), robotArm.baseArmLength + robotArm.armLength);
    float y = map(VRy, 0, 1023, -(robotArm.baseArmLength + robotArm.armLength), robotArm.baseArmLength + robotArm.armLength);

    // add deadzone
    if (x < 10 && x > -10) x = 0;
    if (y < 10 && y > -10) y = 0;

    // add to target only if changed
    if (x != 0 || y != 0) {
        robotArm.targetX += x * controller.speed;
        robotArm.targetY += y * controller.speed;
    }

    // limit target to max arm length
    if (robotArm.targetX > robotArm.baseArmLength + robotArm.armLength) robotArm.targetX = robotArm.baseArmLength + robotArm.armLength;
    if (robotArm.targetX < -(robotArm.baseArmLength + robotArm.armLength)) robotArm.targetX = -(robotArm.baseArmLength + robotArm.armLength);
    if (robotArm.targetY > robotArm.baseArmLength + robotArm.armLength) robotArm.targetY = robotArm.baseArmLength + robotArm.armLength;
    if (robotArm.targetY < -(robotArm.baseArmLength + robotArm.armLength)) robotArm.targetY = -(robotArm.baseArmLength + robotArm.armLength);

    Serial.println("X: " + String(robotArm.targetX) + " Y: " + String(robotArm.targetY));


    
    // move arm
    robotArm.ikMove(robotArm.targetX, robotArm.targetY);
    delay(10);
}
