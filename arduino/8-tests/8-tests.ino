/*
  Robotteknologi
    (Test af Arduino forløb)

  Lavet af:
  > Asbjørn Steen Steffensen
  > Alexander Molberg Christiansen
  > Noah Jensen
*/

// ========== [ EZ Functions ] ==========
#define DW digitalWrite
#define DR digitalRead
#define AW analogWrite
#define AR analogRead


// ==========[ PINS ]==========
#define LED_YELLOW 12
#define LED_RED 11
#define LED_GREEN 10
#define LED_WHITE 9
#define POTENTIOMETER A0
#define MODE_POTENTIOMETER A5
#define BUTTON 13


// ==========[ CONTROL SEGMENT ]==========
#define PIN_A 2
#define PIN_B 3
#define PIN_C 4
#define PIN_D 5
#define PIN_E 6
#define PIN_F 7
#define PIN_G 8


// ==========[ GLOBAL VARIABLES ]==========
bool is_blinking = false;
bool can_toggle = false;
int mode = 0;



// ==========[ SETUP ]==========
void setup()
{
  Serial.begin(115200);

  // Outputs
  pinMode(LED_YELLOW, OUTPUT);          // gul led
  pinMode(LED_RED, OUTPUT);             // rød led
  pinMode(LED_GREEN, OUTPUT);           // grøn led
  pinMode(LED_WHITE, OUTPUT);          // grøn led

  // Inputs
  pinMode(POTENTIOMETER, INPUT);        // potentiometer
  pinMode(MODE_POTENTIOMETER, INPUT);   // potentiometer
  pinMode(BUTTON, INPUT);               // knap

  // Control segment
  pinMode(PIN_A, OUTPUT);
  pinMode(PIN_B, OUTPUT);
  pinMode(PIN_C, OUTPUT);
  pinMode(PIN_D, OUTPUT);
  pinMode(PIN_E, OUTPUT);
  pinMode(PIN_F, OUTPUT);
  pinMode(PIN_G, OUTPUT);
}



// ==========[ MAIN LOOP ]==========
void loop()
{
  ModePotentiometer();
  ControlSegment(mode);

  switch(mode)
  {
    case 1: blink(); break;
    case 2: BlinkMedUdskrift(); break;
    case 3: BlinkVedTryk(); break;
    case 4: VariereLysstyrkeIDiode(); break;
    case 5: SkiftMellemFarverKnap(); break;
    case 6: RandomColor(); break;
    case 7: TaendSlukDiodeMedPotentiometer(); break;
    case 8: BlinkAsyncronous(); break;

    default: Serial.println("Standby | Mode: " + String(mode)); break;
  }
}



// ==========[ CONTROL SEGMENT ]==========
void ControlSegment(int number)
{
  switch (number)
  {
    case 0: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 1); DW(PIN_F, 1); DW(PIN_G, 0); break;
    case 1: DW(PIN_A, 0); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 0); DW(PIN_E, 0); DW(PIN_F, 0); DW(PIN_G, 0); break;
    case 2: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 0); DW(PIN_D, 1); DW(PIN_E, 1); DW(PIN_F, 0); DW(PIN_G, 1); break;
    case 3: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 0); DW(PIN_F, 0); DW(PIN_G, 1); break;
    case 4: DW(PIN_A, 0); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 0); DW(PIN_E, 0); DW(PIN_F, 1); DW(PIN_G, 1); break;
    case 5: DW(PIN_A, 1); DW(PIN_B, 0); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 0); DW(PIN_F, 1); DW(PIN_G, 1); break;
    case 6: DW(PIN_A, 1); DW(PIN_B, 0); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 1); DW(PIN_F, 1); DW(PIN_G, 1); break;
    case 7: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 0); DW(PIN_E, 0); DW(PIN_F, 0); DW(PIN_G, 0); break;
    case 8: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 1); DW(PIN_F, 1); DW(PIN_G, 1); break;
    case 9: DW(PIN_A, 1); DW(PIN_B, 1); DW(PIN_C, 1); DW(PIN_D, 1); DW(PIN_E, 0); DW(PIN_F, 1); DW(PIN_G, 1); break;
  }
}



// ==========[ MODE POTENTIOMETER ]==========
void ModePotentiometer()
{
  int pot = AR(MODE_POTENTIOMETER);
  // 0 = 0
  // 1023 = 9

  int newmode = floor(pot / 113);
  if (newmode != mode)
  {
    mode = newmode;
    Serial.println("Mode: " + String(mode));
    TurnAllOff();
  }
}



// ==========[ Turn all LED's off ]==========
void TurnAllOff()
{
  DW(LED_GREEN, LOW);
  DW(LED_RED, LOW);
  DW(LED_YELLOW, LOW);
  DW(LED_WHITE, LOW);
}



// ==========[ Blink ]==========
void blink()
{
  // blink med 1 sek interval
  DW(LED_WHITE, HIGH);
  delay(1000);
  DW(LED_WHITE, LOW);
  delay(1000);
}



// ==========[ Blink med udskrift ]==========
void BlinkMedUdskrift()
{
  //Blinks an LED with a 1-second interval and prints "LED ON" and "LED OFF."
  DW(LED_WHITE, HIGH);
  Serial.println("LED ON");
  delay(1000);
  DW(LED_WHITE, LOW);
  Serial.println("LED OFF");
  delay(1000);
}



// ==========[ Blink ved tryk ]==========
void BlinkVedTryk()
{
  if (DR(BUTTON) == HIGH)
  {
    if (can_toggle)
    {
      is_blinking = !is_blinking;
      can_toggle = false;
    }
  }
  else
  {
    can_toggle = true;
  }
  Serial.println(is_blinking);
  if (is_blinking)
  {
    DW(LED_WHITE, HIGH);
    delay(100);
    DW(LED_WHITE, LOW);
    delay(100);
  }
}



// ==========[ Variere lysstyrke i diode ]==========
void VariereLysstyrkeIDiode()
{
  //Varies the brightness of an LED.
  static bool reverse = false;
  int time = millis() / 10 % 255;

  if (time == 0)
    reverse = !reverse;

  if (reverse)
    AW(LED_WHITE, abs(255 - time));
  else
    AW(LED_WHITE, time );

  // print boolean and value
  Serial.println(String(reverse) + " " + String(time)) ;

  delay(10);
}



// ==========[ Skift mellem farver ]==========
void SkiftMellemFarverKnap()
{
  // Changes LED colors on each button press.
  static int counter = 0;
  if (DR(BUTTON) == HIGH)
  {
    if (can_toggle)
    {
      counter++;
      can_toggle = false;
    }
  }
  else
  {
    can_toggle = true;
  }
  Serial.println(counter);

  switch (counter)
  {
    case 0: DW(LED_GREEN, 1); DW(LED_RED, 0); DW(LED_YELLOW, 0); break;
    case 1: DW(LED_GREEN, 0); DW(LED_RED, 1); DW(LED_YELLOW, 0); break;
    case 2: DW(LED_GREEN, 0); DW(LED_RED, 0); DW(LED_YELLOW, 1); break;
  }
  if (counter == 3)
  {
    counter = 0;
  }
}



// ==========[ Random color ]==========
void RandomColor()
{
  //Displays a random LED color
  int r = random(1, 4);
  switch (r)
  {
    case 1: DW(LED_GREEN, 1);   delay(100); DW(LED_GREEN, 0);   break;
    case 2: DW(LED_RED, 1);     delay(100); DW(LED_RED, 0);     break;
    case 3: DW(LED_YELLOW, 1);  delay(100); DW(LED_YELLOW, 0);  break;
  }
  delay(100);
}



// ==========[ Tænd og sluk diode med potentiometer ]==========
void TaendSlukDiodeMedPotentiometer()
{
  // turns an LED on and off using a potentiometer.
  int pot = AR(POTENTIOMETER);
  // print pot and the value divided by 4 in one print
  Serial.println(String(pot) + " " + String(floor(pot / 4)));
  AW(LED_WHITE, floor(pot / 4));
}



// ==========[ Blink Asyncronous ]==========
void BlinkAsyncronous () {
  //Asynchronously toggles LEDs based on time intervals.
  int time = millis();
  static bool GREEN = true;
  static bool YELLOW = true;
  static bool RED = true;

  if (time % 632 == 0){
    GREEN = !GREEN;
    DW(LED_GREEN, GREEN);

    Serial.println(GREEN);
  }
  if (time % 1345 == 0){
    Serial.println(YELLOW);
    YELLOW = !YELLOW;

    DW(LED_YELLOW, YELLOW);
  }
  if (time % 2234 == 0){
    RED = !RED;
    DW(LED_RED, RED);

    Serial.println(RED);
  }
  delay(1);
}