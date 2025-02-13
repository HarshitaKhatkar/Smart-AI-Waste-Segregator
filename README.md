# Smart AI Waste Segregator

## 📌 Project Overview
The product is an intelligent waste segregation system that uses machine learning and embedded systems to categorize waste into **recyclable** and **non-recyclable** categories. It utilizes an **ESP32-CAM module** for image processing, an **ultrasonic sensor** for waste detection, and a **servo motor** for directing the waste into respective compartments. The system enhances waste management efficiency and promotes eco-friendly disposal practices.

## 🏙️ Smart Cities & Waste Management
The Smart AI Bin plays a vital role in Smart Cities by improving waste management through AI-driven automation. By efficiently segregating waste and reducing landfill overflow, it supports sustainability goals and promotes eco-friendly urban development. The IoT-enabled monitoring system ensures optimized collection schedules, reducing operational costs and carbon footprints. Integrating such solutions into smart city infrastructure fosters cleaner environments, efficient resource utilization, and a more sustainable future.

## 🚀 Features
- **Automated Waste Detection**: Uses an ultrasonic sensor to detect approaching waste.
- **AI-Based Waste Classification**: Utilizes a trained TensorFlow Lite model to categorize waste.
- **ESP32-CAM Integration**: Captures images of waste and processes them in real-time.
- **Servo-Controlled Sorting**: Directs waste to the appropriate bin using a servo motor.
- **Smart Notifications**: Sends alerts when the bin is full using the **Blynk** IoT platform.
- **Compact & Efficient**: Designed for low power consumption and high accuracy.
- **Web App Dashboard**: Real-time monitoring, analytics, and control of the Smart AI Bin via an intuitive web interface.

## 🌐 Web App Integration
The **Smart AI Bin Web App** provides an interactive interface for monitoring, controlling, and analyzing waste segregation data remotely. 

### **Key Web App Features:**
- **Real-Time Monitoring**: View live status and waste classification logs.
- **Bin Fill Level Alerts**: Get notified when the bin reaches capacity.
- **Data Visualization**: Charts and reports for waste trends and segregation efficiency.
- **Remote Control**: Manually trigger bin actions if needed.
- **User Management**: Secure login and access control for multiple users.
- **Cloud Storage**: Stores waste classification history for future reference.

## 🛠️ Technologies & Components Used
### **Hardware Components**
- **ESP32-CAM**: For capturing waste images and processing AI-based classification.
- **Ultrasonic Sensor (HC-SR04)**: For detecting waste placement.
- **Servo Motors**: For controlling bin lid and waste sorting flap.
- **MicroSD Card**: For storing the trained TensorFlow Lite model.
- **Power Supply (5V/3.3V)**: To power the ESP32 and sensors.

### **Software & Libraries**
- **PlatformIO**: Development environment for ESP32-CAM.
- **TensorFlow Lite**: For running the AI model on ESP32.
- **Arduino Framework**: For writing and deploying firmware.
- **Blynk IoT**: For monitoring bin status remotely.
- **Flask/Django (Web App)**: Backend for handling user requests and data storage.
- **React.js/Vue.js (Frontend)**: Interactive UI for real-time monitoring and analytics.

## 📂 Project Structure
```
Smart-AI-Bin/
│-- src/                     # Source code for ESP32 firmware
│   │-- main.cpp              # Main program logic
│   │-- model_data.cc         # Trained TensorFlow Lite model
│-- web-app/                 # Web application files
│   │-- backend/             # Server-side logic (Flask/Django)
│   │-- frontend/            # UI components (React.js/Vue.js)
│-- include/                 # Header files
│-- lib/                     # External libraries
│-- dataset/                 # Image dataset for training
│-- docs/                    # Documentation and images
│-- README.md                # Project documentation
│-- platformio.ini           # PlatformIO configuration file
```

## 🔧 Setup & Installation
### **Prerequisites**
- Install **PlatformIO** in VS Code.
- Install the required **Arduino libraries** (TensorFlowLite_ESP32, Servo, Blynk, etc.).
- Install **Python** and dependencies for the web app (`Flask` or `Django`).
- Install **Node.js** and package manager for frontend setup (`React.js` or `Vue.js`).

### **Installation Steps**
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/smart-ai-bin.git
   cd smart-ai-bin
   ```
2. **Set Up PlatformIO**:
   - Open the project in **VS Code with PlatformIO**.
   - Ensure ESP32 libraries are installed.
3. **Upload Firmware**:
   - Connect ESP32-CAM via USB (FTDI Adapter required).
   - Upload the firmware using PlatformIO.
4. **Deploy Model**:
   - Place the trained `model_data.cc` file in the `src/` directory.
5. **Set Up the Web App**:
   - Navigate to `web-app/backend/` and install dependencies:
     ```sh
     pip install -r requirements.txt
     python app.py
     ```
   - Navigate to `web-app/frontend/` and install dependencies:
     ```sh
     npm install
     npm start
     ```
6. **Run the System**:
   - Power on the ESP32-CAM and observe classification & sorting in action.
   - Open the web app in your browser to monitor and control the bin.

## 🧠 Model Training
- The AI model is trained on a dataset of waste images, labeled as **recyclable (R)** and **non-recyclable (O)**.
- **Google Colab** was used for training with TensorFlow.
- The final model is converted into **TensorFlow Lite** format and deployed on the ESP32.

## 📊 Performance & Results
- **Training Accuracy**: 86%
- **Confusion Matrix**:
  - **True Positives (TP)**: 990
  - **True Negatives (TN)**: 1169
  - **False Positives (FP)**: 232
  - **False Negatives (FN)**: 122
- The model achieves **91% precision for class 0 (recyclable)** and **81% for class 1 (non-recyclable)**.

## 📌 Future Enhancements
- **Increase Dataset Size**: Improve classification accuracy with more diverse waste images.
- **Optimize Power Consumption**: Enhance battery efficiency for long-term use.
- **Cloud Integration**: Store data and logs for further analysis.
- **Voice Commands**: Add voice-controlled sorting functionality.
- **Mobile App Support**: Expand monitoring features to smartphones.
- 
---
**🚀 Let's build a smarter and greener future together! 🌍♻️**

