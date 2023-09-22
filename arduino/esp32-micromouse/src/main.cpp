#include "config.h"
#include <DNSServer.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
#include "micromouse.hpp"
#include <Arduino_JSON.h>

// ==================================== Variables ====================================
AsyncWebServer server(http_port);
DNSServer dns;
Micromouse micromouse = Micromouse();
AsyncWebSocket ws("/ws");
JSONVar json;
unsigned long lastTime = 0;
unsigned long timerDelay = 30000;

// ==================================== WebSocket ====================================
void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    try
    {
      data[len] = 0;
      String msg = (char*)data;
      Serial.println(msg);
      json = JSON.parse(msg);


      // ==================================== CALIBRATION ====================================
      // {'calibration_mode':'on'} // can be on, off, reset
      if (json.hasOwnProperty("calibration_mode"))
      {
        const char* calibration_mode = json["calibration_mode"];
        if (strcmp(calibration_mode, "on") == 0)
        {
          micromouse.SetCalibrationMode(true);
          Serial.println("Calibration mode on");
        }
        else if (strcmp(calibration_mode, "off") == 0)
        {
          micromouse.SetCalibrationMode(false);
          Serial.println("Calibration mode off");
        }
        else if (strcmp(calibration_mode, "reset") == 0)
        {
          micromouse.ResetCalibration();
          Serial.println("Calibration reset");
        }
      }

      // ==================================== MANUAL MODE TOGGLE ====================================
      // { manual: 'on' }
      if (json.hasOwnProperty("manual"))
      {
        // if manual is true, set manual mode to true
        const char* manual = json["manual"];
        if (strcmp(manual, "on") == 0)
        {
          micromouse.SetManualMode(true);
          Serial.println("Manual mode on");
        }
        else if (strcmp(manual, "off") == 0)
        {
          micromouse.SetManualMode(false);
          Serial.println("Manual mode off");
        }
      }

      // ==================================== MANUAL DIRECTION ====================================
      // {"dir":"forward"}
      if (json.hasOwnProperty("dir"))
      {
        const char* dir = json["dir"];
        micromouse.SetDirection(dir);
      }
    }
    catch(const std::exception& e)
    {
      Serial.println(e.what());
    }
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
  server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

  server.begin();
  Serial.println("Web server started");
}


// ==================================== WebSocket ====================================

void loop()
{
  micromouse.Update();
  ws.cleanupClients();
}
