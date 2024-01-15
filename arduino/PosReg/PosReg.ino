  int enM = 5;
  int MRev = 7;
  int MFor = 6;

  int KnapPin = 4;

  int i;

  boolean flag1 = LOW;
  boolean flag2 = LOW;
  int k = 0;
  
  float PKonst, PDiff, PInt;
  float Error, ErrorBefore, DiffError, ErrorSum;

  float SetPktPos;
  
  int MotorPWM;

  volatile boolean ChA, ChB;
  volatile int StateNow, StateBefore;
  volatile long Step = 0;
  volatile int ArrIndex;
  volatile int StateArr[16]={0,-1,0,1,1,0,-1,0,0,1,0,-1,-1,0,1,0};
 
  long StepPrior = 0;
  unsigned long TimeNow, TimeBefore;
  

void setup() {

  pinMode(enM, OUTPUT);
  pinMode(MRev, OUTPUT);
  pinMode(MFor, OUTPUT);

  pinMode(KnapPin, INPUT);

  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  attachInterrupt(digitalPinToInterrupt(2),IntProg,CHANGE);
  attachInterrupt(digitalPinToInterrupt(3),IntProg,CHANGE);
  
  ChA = digitalRead(2);
  ChB = digitalRead(3);
  if (ChA == HIGH && ChB == HIGH) StateBefore = 0;
  if (ChA == HIGH && ChB == LOW) StateBefore = 1;
  if (ChA == LOW && ChB == LOW) StateBefore = 2;
  if (ChA == LOW && ChB == HIGH) StateBefore = 3;   

  digitalWrite(MFor, HIGH);
  digitalWrite(MRev, LOW);

  //while(digitalRead(KnapPin)) delay(50);

  PKonst = 0.3;
  PInt = 0.0;
  PDiff = 0.25;
  ErrorBefore = 0;
  ErrorSum = 0;

  TimeBefore = micros();
  
  Serial.begin(115200);
}

void IntProg() {
  ChA = digitalRead(2);
  ChB = digitalRead(3);
  if (ChA == HIGH && ChB == HIGH) StateNow = 0;
  if (ChA == HIGH && ChB == LOW) StateNow = 1;
  if (ChA == LOW && ChB == LOW) StateNow = 2;
  if (ChA == LOW && ChB == HIGH) StateNow = 3;
  ArrIndex = 4*StateNow + StateBefore;
  Step = Step + StateArr[ArrIndex];
  StateBefore = StateNow;
}

void loop() {

  TimeNow = micros();

  if ((TimeNow - TimeBefore) >= 100000) {

    SetPktPos = float(analogRead(A0))/1024.0*1920.0 - 960.0;

    Error = SetPktPos - float(Step);
    
    DiffError = Error - ErrorBefore;
    ErrorBefore = Error;
    
    ErrorSum = ErrorSum + Error;
    if(ErrorSum >= 500.0) ErrorSum = 500.0;
    if(ErrorSum <= -500.0) ErrorSum = -500.0;
    
    MotorPWM = int(PKonst*Error + PDiff*DiffError + PInt*ErrorSum);

    if(MotorPWM > 0) {
//      MotorPWM = MotorPWM + 50;
      if(MotorPWM > 254) MotorPWM = 254;
      digitalWrite(MFor, HIGH);
      digitalWrite(MRev, LOW);
      analogWrite(enM,MotorPWM); 
    }
    if(MotorPWM < 0) {
      // MotorPWM = MotorPWM - 50;
      if(MotorPWM < -254) MotorPWM = -254;
      digitalWrite(MFor, LOW);
      digitalWrite(MRev, HIGH);
      analogWrite(enM,-MotorPWM);  
    }    
  
    TimeBefore = TimeNow;
 
    k = k + 1;
    if (k == 10) {
      k = 0;
      flag1 = !flag1;
      digitalWrite(11,flag1);
    }
       
  }
    
  if (abs(Step - StepPrior) >= 1000) {
    StepPrior = Step;
    flag2 = !flag2;
    digitalWrite(12,flag2);
  }
  
  Serial.print("SetpktPos: ");
  Serial.print(SetPktPos);
  Serial.print("  Step: ");
  Serial.print(Step);  
  Serial.print(" Error:");
  Serial.print(Error);
  Serial.print(" DiffError:");
  Serial.print(DiffError);
  Serial.print(" ErrorSum:");
  Serial.print(ErrorSum);
  Serial.print("  MotorPWM:");
  Serial.print(MotorPWM);
  Serial.print("  TimeNow:");
  Serial.print(TimeNow);  
  Serial.print("  k:");
  Serial.println(k);
}
