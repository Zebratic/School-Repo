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
int led_interval = 1000;
int led_time = 0;
int led_time_left = 0;

int max_pot_value = 0;

int pid_gearing_ratio = 15;
int pid_rotation_count = 0;
int pid_rotation_step = 0;
int last_pid_rotation_step = 0;
int full_pid_rotations = 0;

int gearing_ratio = 29;
int full_rotations = 0;


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

  // check PID values
  int last_full_rotations = full_rotations;
  CheckPID();

  // if full rotation is changed, blink LED for the next 200 ms
  if (last_full_rotations != full_rotations) {
    led_time_left = 200;
  }

  // if led_time_left is greater than 0, blink LED_1
  if (led_time_left > 0) {
    digitalWrite(PIN_LED_1, !digitalRead(PIN_LED_1));
    led_time_left--;
  }
  else
    digitalWrite(PIN_LED_1, LOW);


  // blink LED_2 every 1 second
  if (millis() - led_time > led_interval) {
    led_time = millis();
    digitalWrite(PIN_LED_2, !digitalRead(PIN_LED_2));
  }



}

/* PID values:

0 0
0 1
1 1
1 0

these values are the motorRead1 and motorRead2 values
once these values have been read 32 times, its 1 full rotation
*/



// function to check PID values
void CheckPID() {
  // read motor
  int motorRead1 = digitalRead(PIN_MOTOR_READ_1);
  int motorRead2 = digitalRead(PIN_MOTOR_READ_2);
  // print motor values
  //Serial.println("Motor Read 1: " + (String)motorRead1 + " | Motor Read 2: " + (String)motorRead2);

  // check for both directions, so that it will increment and decrement
  if (motorRead1 == 0 && motorRead2 == 0) {
    pid_rotation_step = 0;
  } else if (motorRead1 == 0 && motorRead2 == 1) {
    pid_rotation_step = 1;
  } else if (motorRead1 == 1 && motorRead2 == 1) {
    pid_rotation_step = 2;
  } else if (motorRead1 == 1 && motorRead2 == 0) {
    pid_rotation_step = 3;
  }

  // check if pid_rotation_step is different from last time
  if (pid_rotation_step != last_pid_rotation_step && pid_rotation_step == 3 && last_pid_rotation_step == 0) {
    pid_rotation_count++;
    //Serial.println("Rotation Count: " + (String)pid_rotation_count);
  }
  else if (pid_rotation_step != last_pid_rotation_step && pid_rotation_step == 0 && last_pid_rotation_step == 3) {
    pid_rotation_count--;
    //Serial.println("Rotation Count: " + (String)pid_rotation_count);
  }


  // set last_pid_rotation_step to pid_rotation_step
  last_pid_rotation_step = pid_rotation_step;

  // check if pid_rotation_count is less 0 or pid_gearing_ratio, if so, add to full_pid_rotations
  if (pid_rotation_count < 0) {
    full_pid_rotations--;
    pid_rotation_count = pid_gearing_ratio;
    //Serial.println("Full PID Rotations: " + (String)full_pid_rotations);
  }
  else if (pid_rotation_count > pid_gearing_ratio) {
    full_pid_rotations++;
    pid_rotation_count = 0;
    //Serial.println("Full PID Rotations: " + (String)full_pid_rotations);
  }

  if (full_pid_rotations < 0) {
    full_rotations--;
    full_pid_rotations = gearing_ratio;
    Serial.println("Full Rotations: " + (String)full_rotations);
  }
  else if (full_pid_rotations > gearing_ratio) {
    full_rotations++;
    full_pid_rotations = 0;
    Serial.println("Full Rotations: " + (String)full_rotations);
  }
}
