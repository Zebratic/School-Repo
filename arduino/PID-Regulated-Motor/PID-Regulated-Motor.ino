// =================[ CONFIG ]=================
int PIN_LED_1 = 12;
int PIN_LED_2 = 11;

int PIN_MOTOR_ENA = 5;
int PIN_MOTOR_IN1 = 6;
int PIN_MOTOR_IN2 = 7;

int PIN_BUTTON_1 = 4;

int PIN_MOTOR_READ_1 = 3;
int PIN_MOTOR_READ_2 = 2;

int PIN_POT_READ = A0;

// =================[ VARIABLES ]=================
int max_pot_value = 0;


// =================[ SETUP ]=================
void setup() {
  Serial.begin(115200);
  pinMode(PIN_LED_1, OUTPUT);
  pinMode(PIN_LED_2, OUTPUT);
  pinMode(PIN_MOTOR_ENA, OUTPUT);
  pinMode(PIN_MOTOR_IN1, OUTPUT);
  pinMode(PIN_MOTOR_IN2, OUTPUT);
  pinMode(PIN_BUTTON_1, INPUT);
  pinMode(PIN_MOTOR_READ_1, INPUT);
  pinMode(PIN_MOTOR_READ_2, INPUT);
}



// =================[ EZ-FUNCTIONS ]=================
void SetMotor(int speed, bool direction) {
  digitalWrite(PIN_MOTOR_IN1, direction);
  digitalWrite(PIN_MOTOR_IN2, !direction);
  analogWrite(PIN_MOTOR_ENA, speed);
}

void StopMotor() {
  digitalWrite(PIN_MOTOR_ENA, LOW);
  digitalWrite(PIN_MOTOR_IN1, LOW);
  digitalWrite(PIN_MOTOR_IN2, LOW);
}

int ReadPot() { return analogRead(PIN_POT_READ); }


// =================[ MAIN ]=================
void loop() {
  // read pot value and update max if its higher
  int potValue = ReadPot();
  if (potValue > max_pot_value)
    max_pot_value = potValue;

  // calculate speed out from max pot value
  int motorSpeed = (int)((float)potValue / (float)max_pot_value * 255.0);

  // print values
  //Serial.println("Pot Value: " + (String)potValue + " | Max Pot Value: " + (String)max_pot_value + " | Motor Speed: " + (String)motorSpeed);

  // Start the motor
  SetMotor(motorSpeed, true);

  // read motor
  int motorRead1 = digitalRead(PIN_MOTOR_READ_1);
  int motorRead2 = digitalRead(PIN_MOTOR_READ_2);
  // print motor values
  Serial.println("Motor Read 1: " + (String)motorRead1 + " | Motor Read 2: " + (String)motorRead2);

  // motorRead1 (0-1)
  // motorRead2 (0-1)

  // blink led based on values
  digitalWrite(PIN_LED_1, motorRead1);
  digitalWrite(PIN_LED_2, motorRead2);
}