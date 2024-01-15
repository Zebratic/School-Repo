#include <Servo.h>

class TriangleValues
{
public:
    float a_1;
    float A_1;
    float B_1;
    float C_1;
    float A_2;
    float v_1;
    float v_2;
};

TriangleValues calTriangle(int x, int y, float length1, float length2)
{
    TriangleValues values;
    float b_1 = length1;
    float c_1 = length2;
    values.a_1 = sqrt(pow(b_1, 2) + pow(c_1, 2));
    values.A_1 = acos((pow(b_1, 2) + pow(c_1, 2) - pow(c_1, 2)) / (2 * values.a_1 * b_1));
    values.B_1 = asin((b_1 * sin(values.A_1)) / values.a_1);
    values.C_1 = 180 - values.A_1 - values.B_1;
    values.A_2 = abs(180 - values.C_1);
    values.v_1 = asin(x / c_1);
    values.v_2 = values.A_2 + values.B_1;

    return values;
}

#define POT_MOT_1 A0
#define POT_MOT_2 A1

Servo motor1;
Servo motor2;

void setup()
{
    motor1.attach(MOT_1);
    motor2.attach(MOT_2);
    Serial.begin(115200);
}

void loop()
{
    // Read potentiometer values
    int potValue1 = analogRead(POT_MOT_1);
    int potValue2 = analogRead(POT_MOT_2);

    // Map potentiometer values to motor speed range
    int motorSpeed1 = map(potValue1, 0, 1023, 0, 255);
    int motorSpeed2 = map(potValue2, 0, 1023, 0, 255);

    Serial.print("Potentiometer 1: ");
    Serial.print(potValue1);
    Serial.print(" | ");
    Serial.print("Potentiometer 2: ");
    Serial.print(potValue2);
    Serial.println();

    // Set motor speeds using PWM
    analogWrite(MOT_1, motorSpeed1);
    analogWrite(MOT_2, motorSpeed2);
}
