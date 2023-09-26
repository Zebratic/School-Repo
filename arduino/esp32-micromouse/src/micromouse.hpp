void SerialPrint(const String &value)
{
  Serial.println(value);
  try {
    String json = "{\"type\":\"log\",\"value\":\"" + String(value) + "\"}";
    ws.textAll(json);
  }
  catch(const std::exception& e) { }
}

class Micromouse {
    private:
        bool calibration_mode = false;
        bool manual_mode = true;
        bool should_drive = true;
        const char* direction = "stop";
        const char* last_direction = "stop";

        int ldr_l_min = 4095;
        int ldr_l_max = 0;

        int ldr_m_min = 4095;
        int ldr_m_max = 0;

        int ldr_r_min = 4095;
        int ldr_r_max = 0;

        int PWM_R_MOTOR_VAR_SPEED = 255;
        int PWM_L_MOTOR_VAR_SPEED = 255;
        int NORMAL_MOTOR_SPEED = 255;

        int ldr_l_min_sens = 1.2;
        int ldr_m_min_sens = 1.2;
        int ldr_r_min_sens = 1.2;




    public:
        Micromouse() {}

        void Initialize() {
            SerialPrint("Micromouse initialized");
            pinMode(DIR_R_MOTOR_PIN, OUTPUT);
            pinMode(DIR_L_MOTOR_PIN, OUTPUT);
            pinMode(PWM_R_MOTOR_PIN, OUTPUT);
            pinMode(PWM_L_MOTOR_PIN, OUTPUT);
        };

        void Update()
        {
            if (calibration_mode)
                CalibrateSensors();
            else
            {
                if (manual_mode)
                    ManualMove();
                else
                    CalculateMove();
            }

            delay(100);
        };


        // ==================================== MOVEMENT ====================================
        void SetMotorSpeeds(int R_Speed, int L_Speed) { PWM_R_MOTOR_VAR_SPEED = R_Speed; PWM_L_MOTOR_VAR_SPEED = L_Speed; };
        void SetNormalMotorSpeed(int speed) { NORMAL_MOTOR_SPEED = speed; };
        void SetShouldDrive(bool drive) { should_drive = drive; Stop(); Drive(); };
        void Drive()
        {
            AW(PWM_R_MOTOR_PIN, PWM_R_MOTOR_VAR_SPEED);
            AW(PWM_L_MOTOR_PIN, PWM_L_MOTOR_VAR_SPEED);
        };
        void InvertMotors(bool inverted)
        {
            if (!inverted)
            {
                DW(DIR_R_MOTOR_PIN, HIGH);
                DW(DIR_L_MOTOR_PIN, LOW);
            }
            else
            {
                DW(DIR_R_MOTOR_PIN, LOW);
                DW(DIR_L_MOTOR_PIN, HIGH);
            }
        }

        // ==================================== MANUAL ====================================
        void SetManualMode(bool mode) { manual_mode = mode; };
        void SetDirection(const char* dir) { direction = dir; };
        void ForwardLeft()      { InvertMotors(false); SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED / 2); }
        void Forward()          { InvertMotors(false); SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED); }
        void ForwardRight()     { InvertMotors(false); SetMotorSpeeds(NORMAL_MOTOR_SPEED / 2, NORMAL_MOTOR_SPEED); }
        void Left()             { InvertMotors(false); SetMotorSpeeds(NORMAL_MOTOR_SPEED, 0); }
        void Stop()             { InvertMotors(false); SetMotorSpeeds(0, 0); }
        void Right()            { InvertMotors(false); SetMotorSpeeds(0, NORMAL_MOTOR_SPEED); }
        void BackwardLeft()     { InvertMotors(true); SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED / 2); }
        void Backward()         { InvertMotors(true); SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED); }
        void BackwardRight()    { InvertMotors(true); SetMotorSpeeds(NORMAL_MOTOR_SPEED / 2, NORMAL_MOTOR_SPEED); }


        void ManualMove()
        {
            // 0-255
            if (strcmp(direction, "forward-left") == 0)         ForwardLeft(); 
            else if (strcmp(direction, "forward") == 0)         Forward();
            else if (strcmp(direction, "forward-right") == 0)   ForwardRight();
            else if (strcmp(direction, "left") == 0)            Left();
            else if (strcmp(direction, "stop") == 0)            Stop();
            else if (strcmp(direction, "right") == 0)           Right();
            else if (strcmp(direction, "backward-left") == 0)   BackwardLeft();
            else if (strcmp(direction, "backward") == 0)        Backward();
            else if (strcmp(direction, "backward-right") == 0)  BackwardRight();
            else
                SetMotorSpeeds(0, 0);

            Drive();
        }

        // ==================================== CALIBRATOR ====================================
        void SetCalibrationMode(bool mode)
        {
            calibration_mode = mode;
            if (calibration_mode)
            {
                InvertMotors(false);
                SetMotorSpeeds(0, 0);
            }
        };
        void ResetCalibration()
        {
            ldr_l_min = 4095;
            ldr_l_max = 0;
            ldr_m_min = 4095;
            ldr_m_max = 0;
            ldr_r_min = 4095;
            ldr_r_max = 0;
            SerialPrint("Calibration reset");
        }

        int* ReadLightSensors()
        {
            int* ldr_values = new int[3];
            ldr_values[0] = AR(LDR_L_PIN);
            ldr_values[1] = AR(LDR_M_PIN);
            ldr_values[2] = AR(LDR_R_PIN);
            return ldr_values;
        };

        void CalibrateSensors()
        {
            int* ldr = ReadLightSensors();

            // record min and max values for each channel
            ldr_l_min = min(ldr_l_min, ldr[0]);
            ldr_l_max = max(ldr_l_max, ldr[0]);

            ldr_m_min = min(ldr_m_min, ldr[1]);
            ldr_m_max = max(ldr_m_max, ldr[1]);

            ldr_r_min = min(ldr_r_min, ldr[2]);
            ldr_r_max = max(ldr_r_max, ldr[2]);

            // print new min and max values for each channel
            SerialPrint(" LDR L => min: " + String(ldr_l_min) + " max: " + String(ldr_l_max));
            SerialPrint(" LDR M => min: " + String(ldr_m_min) + " max: " + String(ldr_m_max));
            SerialPrint(" LDR R => min: " + String(ldr_r_min) + " max: " + String(ldr_r_max));
        }

        // ==================================== SCANNER ====================================
        void CalculateMove()
        {
            int* ldr_values = ReadLightSensors();

            // depending on ldr_values, set direction and speed
            // ldr_values[0] = left
            // ldr_values[1] = middle
            // ldr_values[2] = right

            // focus on keeping middle sensor lowest value, so if middle is lowest, go straight, if left is lowest, go left, if right is lowest, go right
            SerialPrint("L: " + String(ldr_values[0]) + " M: " + String(ldr_values[1]) + " R: " + String(ldr_values[2]));
            
            if (ldr_values[1] < ldr_values[0] && ldr_values[1] < ldr_values[2])
            {
                // go straight
                InvertMotors(false);
                SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED);
                
                SerialPrint("Straight");
            }
            else if (ldr_values[0] < ldr_values[1] && ldr_values[0] < ldr_values[2])
            {
                // go left
                ForwardLeft();
                last_direction = "left";
                SerialPrint("Left");
            }
            else if (ldr_values[2] < ldr_values[1] && ldr_values[2] < ldr_values[0])
            {
                // go right
                ForwardRight();
                last_direction = "right";
                SerialPrint("Right");
            }
            else
            {
                // go straight
                InvertMotors(false);
                SetMotorSpeeds(NORMAL_MOTOR_SPEED, NORMAL_MOTOR_SPEED);
                
                SerialPrint("Straight");
            }

            // get combined medium value of min max for each sensor
            //int ldr_l_med = (ldr_l_min + ldr_l_max) / 2;
            //int ldr_m_med = (ldr_m_min + ldr_m_max) / 2;
            //int ldr_r_med = (ldr_r_min + ldr_r_max) / 2;

            //// get medium
            //int ldr_med = (ldr_l_med + ldr_m_med + ldr_r_med) / 3;

            //// get medium of ldr_values
            //int ldr_values_med = (ldr_values[0] + ldr_values[1] + ldr_values[2]) / 3;

            // if all sensors are over the min threshold, drive opposite of last direction
            //if (ldr_values_med > ldr_med)
            //{
            //    // all sensors are on white surface, drive opposite of last direction
            //    if (strcmp(last_direction, "straight") == 0)
            //    {
            //        // go backward
            //        Backward();
            //        SerialPrint("Reversing towards Backward");
            //    }
            //    else if (strcmp(last_direction, "left") == 0)
            //    {
            //        // go right
            //        InvertMotors(true);
            //        SetMotorSpeeds(NORMAL_MOTOR_SPEED, 0);
            //        SerialPrint("Reversing towards Right");
            //    }
            //    else if (strcmp(last_direction, "right") == 0)
            //    {
            //        // go left
            //        InvertMotors(true);
            //        SetMotorSpeeds(0, NORMAL_MOTOR_SPEED);
            //        SerialPrint("Reversing towards Left");
            //    }
            //}

            if (should_drive)
                Drive();
        }
};
