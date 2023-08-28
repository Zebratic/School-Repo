bool is_blinking = false;
bool can_toggle = false;

void setup()
{
  Serial.begin(115200);

  // button
  pinMode(13, OUTPUT);
  digitalWrite(13, HIGH);
  pinMode(A0, INPUT);

  // led
  
}

void loop() 
{
  // toggle blinking on released button
  if (analogRead(A0) == HIGH && can_toggle)
  {
    Serial.println("Button on");
    is_blinking = !is_blinking;
    can_toggle = false;
  }
  else if (analogRead(A0) == LOW && !can_toggle)
  {
    Serial.println("Button off");
    can_toggle = true;
  }
  
  if (is_blinking)
    blink();
}

void blink()
{
  //Serial.println("LED: ON");
  //digitalWrite(A0, HIGH);
  //delay(1000);
  //Serial.println("LED: OFF");
  //digitalWrite(A0, LOW);
  //delay(1000);
}