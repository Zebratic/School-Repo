int enM = 5;
int MRev = 7;
int MFor = 6;

int KnapPin = 4;

float SystemSp = 7.0;

int i;

boolean flag1 = LOW;
boolean flag2 = LOW;
int k = 0;

float PKonst, PDiff, PInt;
float Error, ErrorBefore, DiffError, ErrorSum;
float Hast;
float MotorSp;

float SetPktHast;

int MotorPWM;

volatile boolean ChA, ChB;
volatile int StateNow, StateBefore;
volatile long Step = 0;
volatile int ArrIndex;
volatile int StateArr[16] = {0, -1, 0, 1, 1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0};

long StepBefore = 0;
long StepPrior = 0;
long StepDiff;
unsigned long TimeNow, TimeBefore;

void setup()
{
  pinMode(enM, OUTPUT);
  pinMode(MRev, OUTPUT);
  pinMode(MFor, OUTPUT);

  pinMode(KnapPin, INPUT);

  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  attachInterrupt(digitalPinToInterrupt(2), IntProg, CHANGE);
  attachInterrupt(digitalPinToInterrupt(3), IntProg, CHANGE);

  digitalWrite(MFor, HIGH);
  digitalWrite(MRev, LOW);
  
  // Set the PID constants
  PKonst = 1.0;
  PInt = 1.0;
  PDiff = 1.0;
  ErrorBefore = 0;
  ErrorSum = 0;

  TimeBefore = micros();

  Serial.begin(115200);
}

void IntProg()
{
  ChA = digitalRead(2);
  ChB = digitalRead(3);
  
  if (ChA == 1 && ChB == 1) StateNow = 0;
  if (ChA == 1 && ChB == 0) StateNow = 1;
  if (ChA == 0 && ChB == 0) StateNow = 2;
  if (ChA == 0 && ChB == 1) StateNow = 3;

  ArrIndex = 4 * StateNow + StateBefore;
  Step = Step + StateArr[ArrIndex];
  StateBefore = StateNow;
}

void loop()
{
  TimeNow = micros();
  
  // 1. Read the potentiometer
  SetPktHast = float(analogRead(A0)) / 1024.0 * (SystemSp - 4.0);

  // 2. Calculate the desired speed of the motor
  StepDiff = Step - StepBefore;
  Hast = float(StepDiff) / 1920.0 * 10.0;
  StepBefore = Step;

  // 3. Read the current speed of the motor
  Error = SetPktHast - Hast;

  // 4. Calculate the error
  DiffError = Error - ErrorBefore;
  ErrorBefore = Error;

  // 5. Calculate the error sum
  ErrorSum = ErrorSum + Error;
  if (ErrorSum >= SystemSp / PInt) ErrorSum = SystemSp / PInt;
  if (ErrorSum <= 0.0) ErrorSum = 0.0;

  // 6. Calculate the PWM
  MotorSp = PKonst * Error + PDiff * DiffError + PInt * ErrorSum;
  if (MotorSp >= SystemSp) MotorSp = SystemSp;
  if (MotorSp <= 0.0) MotorSp = 0.0;

  // 7. Write the PWM to the motor
  MotorPWM = int(MotorSp / SystemSp * 255.0);
  analogWrite(enM, MotorPWM);

  // 8. Turn on the LED based on the motor position
  if (abs(Step - StepPrior) >= 960)
  {
    StepPrior = Step;
    flag2 = !flag2;
    digitalWrite(12, flag2);
  }

  // 9. Print the results
  Serial.println("SetPktHast: " + String(SetPktHast) +
                 " Hast: " + String(Hast) +
                 " Error: " + String(Error) +
                 " DiffError: " + String(DiffError) +
                 " ErrorSum: " + String(ErrorSum) +
                 " MotorSp: " + String(MotorSp) +
                 " MotorPWM: " + String(MotorPWM));
}
