#include "config.h"
#include <DNSServer.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
#include "micromouse.hpp"

// ==================================== Variables ====================================
AsyncWebServer server(http_port);
DNSServer dns;
Micromouse micromouse = Micromouse();


void setup()
{
  // ==================================== Serial ====================================
  Serial.begin(115200);

  // ==================================== SPIFFS ====================================
  if (!SPIFFS.begin(true))
  {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  // ==================================== WiFi + DNS ====================================
  WiFi.softAP(ssid, password);
  WiFi.softAPConfig(local_ip, gateway, subnet);
  dns.start(dns_port, "*", local_ip);
  Serial.println("IP Address: " + WiFi.softAPIP().toString());

  micromouse.Initialize();


  // ==================================== ASSETS ====================================
  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/style.css", "text/css"); });
  server.on("/main.js", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/main.js", "text/javascript"); });

  // ==================================== ROUTES ====================================
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/index.html", "text/html"); });

  server.on("/calibrate_on", HTTP_GET, [](AsyncWebServerRequest *request) { micromouse.SetCalibrationMode(true); request->send(SPIFFS, "/index.html", "text/html"); });
  server.on("/calibrate_off", HTTP_GET, [](AsyncWebServerRequest *request) { micromouse.SetCalibrationMode(false); request->send(SPIFFS, "/index.html", "text/html"); });

  
  server.begin();
  Serial.println("Web server started");


}

void loop()
{
  micromouse.Update();
}