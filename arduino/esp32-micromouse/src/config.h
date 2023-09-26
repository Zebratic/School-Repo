#include <WiFi.h>
#include "shortcuts.h"



// ==================================== Network ====================================
const char *ssid = "Micromouse X";
const char *password = "htxmoment";
IPAddress local_ip(192, 168, 4, 1);
IPAddress gateway(255, 255, 255, 0);
IPAddress subnet(255, 255, 255, 0);
const int http_port = 80;
const int dns_port = 53;



// ==================================== PINS ====================================
const int PWM_R_MOTOR_PIN = 19;
const int PWM_L_MOTOR_PIN = 17;

const int DIR_R_MOTOR_PIN = 16;
const int DIR_L_MOTOR_PIN = 18;

const int LDR_L_PIN = 32;
const int LDR_M_PIN = 33;
const int LDR_R_PIN = 35;