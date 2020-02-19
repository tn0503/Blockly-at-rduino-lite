'use strict';

goog.provide('Blockly.Msg.de');

goog.require('Blockly.Msg');

Blockly.Msg.SV_tab1 = "Digitale Eingänge";
Blockly.Msg.SV_tab2 = "Digital/PWM Ausgang";
Blockly.Msg.SV_tab3 = "Analog Eingang";
Blockly.Msg.SV_tab4 = "Polled Data Retrieval";
Blockly.Msg.SV_tab5 = "FirmataPlus Features";
Blockly.Msg.SV_tab5_1 = "Sensors/actuators monitoring";
Blockly.Msg.SV_tab5_2 = "i2c";
Blockly.Msg.SV_tab5_3 = "Web HTTP";
Blockly.Msg.SV_tab5_4 = "Reporte";
Blockly.Msg.SV_visible_tab4 = "Visualisieren";
Blockly.Msg.SV_alert1 = "WebSocket is supported by your Browser!";
Blockly.Msg.SV_alert2 = "WebSocket NOT supported by your Browser!";
Blockly.Msg.SV_onOpen = 'Supervision Has Successfully Connected';
Blockly.Msg.SV_onClose = 'The socket has closed!';
Blockly.Msg.SV_onMessage_analog = "Analog Pin unbekannt";
Blockly.Msg.SV_onMessage_digital = "Digital Pin unbekannt";
Blockly.Msg.SV_onMessage_i2c = "Latch nicht definiert";
Blockly.Msg.SV_NotCon = "Fehler: Board nicht verbunden! Wurde der Supervision Server erfolgreich gestartet?";
Blockly.Msg.SV_Con = "Board verbunden!";
Blockly.Msg.SV_enabled = "Aktiviert";
Blockly.Msg.SV_disabled = "Deaktiviert";
Blockly.Msg.SV_pin_e = "PIN";
Blockly.Msg.SV_pin_s = "PIN";
Blockly.Msg.SV_low_e = "EIN";
Blockly.Msg.SV_high_e = "Aus";
Blockly.Msg.SV_low_s = "aus";
Blockly.Msg.SV_high_s = "ein";
Blockly.Msg.SV_PWM = "PWM~";
Blockly.Msg.SV_get_analog_map = "Get analog ports";
Blockly.Msg.SV_get_capability = "Get capability report";
Blockly.Msg.SV_get_firmware = "Get firmware version";
Blockly.Msg.SV_get_protocol = "Get protocol version";
Blockly.Msg.SV_get_pymata = "Get PyMata version";
Blockly.Msg.SV_get_pin_report = "Get PIN state report for Pin:";
Blockly.Msg.SV_get_pin_report_text = "(For Pin State Reports, first select the pin number by using the spinner and then click the button to the left)";
Blockly.Msg.SV_digital_pin = "Digital Pin: ";
Blockly.Msg.SV_analog_pin = "Analog Pin:";
Blockly.Msg.SV_read_pin = "Lesen";
Blockly.Msg.SV_data_latch = "Data Latch ";
Blockly.Msg.SV_data_latch_1 = "No Latch Set";
Blockly.Msg.SV_data_latch_2 = "Latch High";
Blockly.Msg.SV_data_latch_3 = "Latch Low";
Blockly.Msg.SV_latch_event = "Latch Event Occured On ";
Blockly.Msg.SV_latch_digital_pin = "Digital Latch Table Data";
Blockly.Msg.SV_latch_analog_pin = "Analog Latch Table Data";
Blockly.Msg.SV_servo = "Servo";
Blockly.Msg.SV_servo_pin = "Servo Pin";
Blockly.Msg.SV_servo_angle = "Servo Winkel in Grad";
Blockly.Msg.SV_servo_set = "Set Servo";
Blockly.Msg.SV_tone = "Ton";
Blockly.Msg.SV_tone_pin = "Pin";
Blockly.Msg.SV_tone_freq = "Frequenz (Hz)";
Blockly.Msg.SV_tone_dur = "Dauer (ms)";
Blockly.Msg.SV_tone_play = "Ton wiedergeben";
Blockly.Msg.SV_encoder = "Encoder";
Blockly.Msg.SV_encoder_pinA = "Encoder Pin A:";
Blockly.Msg.SV_encoder_pinB = "Encoder Pin B:";
Blockly.Msg.SV_encoder_auto = "Auto Encoder Lesen";
Blockly.Msg.SV_encoder_manual = "Manual Encoder Lesen";
Blockly.Msg.SV_sonar = "Ultraschallsensor";
Blockly.Msg.SV_sonar_trig = "Auslöse Pin:";
Blockly.Msg.SV_sonar_echo = "Echo Pin:";
Blockly.Msg.SV_sonar_auto = "Ultraschallsonar Lesen";
Blockly.Msg.SV_sonar_manual = "Manual Sonar Read";
Blockly.Msg.SV_stepper = "Schrittmotor";
Blockly.Msg.SV_stepper_pin1 = "Pin 1:";
Blockly.Msg.SV_stepper_pin2 = "Pin 2:";
Blockly.Msg.SV_stepper_pin3 = "Pin 3:";
Blockly.Msg.SV_stepper_pin4 = "Pin 4:";
Blockly.Msg.SV_stepper_steps_rev = "Steps/Rev (<= 21 bits)";
Blockly.Msg.SV_stepper_motor = "Motor Speed (<=21 bits)";
Blockly.Msg.SV_stepper_steps = "# Steps (<=14 bits)";
Blockly.Msg.SV_stepper_run = "Run Stepper";
Blockly.Msg.SV_HTTP_BT = "Send HTTP request";
Blockly.Msg.SV_i2c_info = "Default Values Are Set to Read Temperature from a ";
Blockly.Msg.SV_i2c_config = "I2C Config (Use before an I2C read or write)";
Blockly.Msg.SV_i2c_readButton = "Configure I2C";
Blockly.Msg.SV_i2c_readDelay = "Read Delay Time";
Blockly.Msg.SV_i2c_read = "I2C Read";
Blockly.Msg.SV_i2c_read_devAddress = "Device Address";
Blockly.Msg.SV_i2c_read_devRegister = "Device Register";
Blockly.Msg.SV_i2c_read_bytes = "Number of Bytes To Read";
Blockly.Msg.SV_i2c_read_type = "Read Type";
Blockly.Msg.SV_i2c_readRequest = "I2C Read";
Blockly.Msg.SV_i2c_retrieveButton = "Retrieve Last Read Value";