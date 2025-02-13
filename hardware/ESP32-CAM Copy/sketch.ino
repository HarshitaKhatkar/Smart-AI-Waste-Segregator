#include <ESP32Servo.h>

// Define servo objects
Servo lidServo;
Servo flapServo;

// Define pins for servos
const int lidServoPin = 15;  // GPIO 15 for lid servo
const int flapServoPin = 13; // GPIO 13 for flap servo

void setup() {
  Serial.begin(115200);  // Initialize serial communication

  // Attach servos to their pins
  lidServo.attach(lidServoPin);
  flapServo.attach(flapServoPin);

  // Initialize servos
  lidServo.write(0);     // Lid closed
  flapServo.write(90);   // Flap neutral

  Serial.println("Smart Dustbin Simulation Initialized");
}

void loop() {
  // Simulate object detected and process begins
  Serial.println("\nObject detected! Starting segregation process...");

  // Step 1: Open lid
  Serial.println("Opening lid...");
  lidServo.write(90);  // Lid opens to 90 degrees
  delay(2000);         // Wait for 2 seconds

  // Step 2: Simulate image capture
  Serial.println("Simulating image capture...");
  delay(2000);  // Simulating time for capturing an image

  // Step 3: Simulate waste classification
  String wasteType = classifyWaste();  // Simulate waste classification
  Serial.println("Waste classified as: " + wasteType);

  // Step 4: Move flap based on classification
  if (wasteType == "Recyclable") {
    Serial.println("Moving flap to Recyclable bin...");
    flapServo.write(45);  // Example position for Recyclable bin
  } else if (wasteType == "Non-Recyclable") {
    Serial.println("Moving flap to Non-Recyclable bin...");
    flapServo.write(135); // Example position for Non-Recyclable bin
  } else if (wasteType == "Hazardous") {
    Serial.println("Moving flap to Hazardous bin...");
    flapServo.write(180); // Example position for Hazardous bin
  } else if (wasteType == "Organic") {
    Serial.println("Moving flap to Organic bin...");
    flapServo.write(0);   // Example position for Organic bin
  }

  delay(2000);  // Wait for 2 seconds

  // Step 5: Return flap to neutral
  Serial.println("Returning flap to neutral...");
  flapServo.write(90);  // Flap returns to neutral position
  delay(2000);

  // Step 6: Close lid
  Serial.println("Closing lid...");
  lidServo.write(0);  // Lid closes
  delay(2000);

  // End of process
  Serial.println("Segregation process completed. Ready for next object.");
  delay(5000);  // Wait before the next process
}

// Simulate waste classification logic
String classifyWaste() {
  // Hardcode or randomize waste type for testing
  String wasteTypes[] = {"Recyclable", "Non-Recyclable", "Hazardous", "Organic"};
  int randomIndex = random(0, 4);  // Pick a random waste type
  return wasteTypes[randomIndex];
}
