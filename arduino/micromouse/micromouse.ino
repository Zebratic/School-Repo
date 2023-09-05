#define LDR_1_PIN A0
#define LDR_2_PIN A1
#define LDR_3_PIN A2

void setup()
{
    pinMode(LDR_1_PIN, INPUT);
    pinMode(LDR_2_PIN, INPUT);
    pinMode(LDR_3_PIN, INPUT);

    Serial.begin(115200);

    Serial.println("Micromouse Booted!");
}

void loop()
{
    int ldr_1 = analogRead(LDR_1_PIN);
    int ldr_2 = analogRead(LDR_2_PIN);
    int ldr_3 = analogRead(LDR_3_PIN);

    String output = "LDR 1: " + String(ldr_1) + " LDR 2: " + String(ldr_2) + " LDR 3: " + String(ldr_3);
    Serial.println(output);

    delay(100);
}