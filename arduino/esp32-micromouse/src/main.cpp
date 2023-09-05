#include <WiFi.h>
#include <DNSServer.h>
#include <WiFiManager.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>

// Set your hotspot credentials here
const char* ssid = "Micromouse";
const char* password = "htxmoment";

// Create an instance of the server
AsyncWebServer server(3000);

void setup() {
  // Start Serial for debugging
  Serial.begin(115200);

  // create a new hotspot 
  WiFiManager wifiManager;
  wifiManager.autoConnect(ssid, password);

  // Print ESP32 local IP address
  Serial.println(WiFi.localIP());

  // Define routes for your web server
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(200, "text/html", "<h1>Micromouse greets you!</h1>");
  });

  // Start server
  server.begin();
}

void loop() {
  // Handle client connections and other tasks here
}