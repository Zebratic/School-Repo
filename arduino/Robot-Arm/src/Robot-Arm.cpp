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

            // move motors
            BaseMotor.write(V1);
            ArmMotor.write(V5);
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
    // move the end effector to the coordinates (x, y) in a box animation away from the base
    robotArm.ikMove(115, 30);
    delay(1000);
    robotArm.ikMove(160,90);
    delay(1000);

}
