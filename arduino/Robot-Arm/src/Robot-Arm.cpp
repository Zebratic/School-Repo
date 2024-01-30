#include <Arduino.h>
#include <Servo.h>
#include <math.h>

class RobotArm {
    private:
        int basePin;
        int basePotPin;
        int baseAngle;
        double baseArmLength = 115.0;

        int armPin;
        int armPotPin;
        int armAngle;
        double armLength = 155.0;

    public:
        Servo BaseMotor;
        Servo ArmMotor;

        RobotArm() {
            this->basePin = 0;
            this->basePotPin = 0;
            this->armPin = 0;
            this->armPotPin = 0;

            this->baseAngle = 0;
            this->armAngle = 0;
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

        /*int* getAngles() {
            // read potentiometers
            int basePot = analogRead(this->basePotPin);
            int armPot = analogRead(this->armPotPin);

            // calculate angles
            this->baseAngle = map(basePot, 0, 1023, 0, 177);
            this->armAngle = map(armPot, 0, 1023, 0, 177);

            int angles[2] = {this->baseAngle, this->armAngle};
            return angles;
        }*/

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
            //print all values'
            Serial.println("V1: " + String(V1) + " V5: " + String(V5));
            Serial.println("V3: " + String(V3) + " V4: " + String(V4));
            Serial.println("L3: " + String(L3));
            Serial.println("x: " + String(x) + " y: " + String(y));
            Serial.println("baseArmLength: " + String(this->baseArmLength) + " armLength: " + String(this->armLength));

            // move motors
            BaseMotor.write(V5);
            ArmMotor.write(V1);
            //this->move(V1, V5);
            Serial.println(V1);
            Serial.println(V5);
        }


        /*void printValues() {
            int* angles = this->getAngles();
            Serial.print("Base Angle: ");
            Serial.print(angles[0]);
            Serial.print(" Arm Angle: ");
            Serial.println(angles[1]);
        }*/
};




RobotArm robotArm;

void setup() {
    Serial.begin(115200);
    robotArm.setup(9, A0, 10, A1);
}

void loop() {
    int startX = 115; // starting x-coordinate
    int startY = 120; // starting y-coordinate
    int endX = 165;   // ending x-coordinate
    int endY = 170;   // ending y-coordinate
    int steps = 100;  // number of steps to move

    for (int i = 0; i <= steps; i++) {
        int x = startX + (endX - startX) * i / steps;
        int y = startY + (endY - startY) * i / steps;
        robotArm.ikMove(x, y);
        delay(10); // delay between each step (adjust as needed)
    }
}
