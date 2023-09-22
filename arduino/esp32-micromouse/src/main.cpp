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
AsyncWebSocket ws("/ws");
unsigned long lastTime = 0;
unsigned long timerDelay = 30000;

// ==================================== WebSocket ====================================
void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    ws.textAll("I got your text message: " + String((char*)data));
  }
}

void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len) {
  switch (type) {
    case WS_EVT_CONNECT: Serial.printf("WebSocket client #%u connected from %s\n", client->id(), client->remoteIP().toString().c_str()); break;
    case WS_EVT_DISCONNECT: Serial.printf("WebSocket client #%u disconnected\n", client->id()); break;
    case WS_EVT_DATA: handleWebSocketMessage(arg, data, len); break;
    case WS_EVT_PONG: break;
    case WS_EVT_ERROR: break;
  }
}


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

  // ==================================== Micromouse ====================================
  micromouse.Initialize();

  // ==================================== WebSocket ====================================
  ws.onEvent(onEvent);
  server.addHandler(&ws);
  Serial.println("WebSocket server started");

  // ==================================== ASSETS ====================================
  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/style.css", "text/css"); });
  server.on("/joystick.js", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/joystick.js", "text/javascript"); });

  // ==================================== ROUTES ====================================
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) { request->send(SPIFFS, "/index.html", "text/html"); });
  server.on("/calibrate_on", HTTP_GET, [](AsyncWebServerRequest *request) { micromouse.SetCalibrationMode(true); request->send(SPIFFS, "/index.html", "text/html"); });
  server.on("/calibrate_off", HTTP_GET, [](AsyncWebServerRequest *request) { micromouse.SetCalibrationMode(false); request->send(SPIFFS, "/index.html", "text/html"); });
  server.on("/calibrate_reset", HTTP_GET, [](AsyncWebServerRequest *request) { micromouse.ResetCalibration(); request->send(SPIFFS, "/index.html", "text/html"); });
  
  server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

  server.begin();
  Serial.println("Web server started");
}


// ==================================== WebSocket ====================================

void loop()
{
  micromouse.Update();

  if ((millis() - lastTime) > timerDelay) {
    ws.textAll("HELLO FROM SERVER!");
    lastTime = millis();
  }

  ws.cleanupClients();
}
