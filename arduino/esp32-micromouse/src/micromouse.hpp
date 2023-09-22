class Micromouse {
    private:
        bool calibration_mode = false;
        bool manual_mode = false;
        const char* direction = "forward";

        int ldr_l_min = 4095;
        int ldr_l_max = 0;

        int ldr_m_min = 4095;
        int ldr_m_max = 0;

        int ldr_r_min = 4095;
        int ldr_r_max = 0;

        int PWM_R_MOTOR_VAR_SPEED = 100;
        int PWM_L_MOTOR_VAR_SPEED = 100;
        int NORMAL_MOTOR_SPEED = 100;

        int ldr_l_min_sens = 1.2; 
        int ldr_m_min_sens = 1.2; 
        int ldr_r_min_sens = 1.2; 




    public:
        Micromouse() {}

        void Initialize() {
            Serial.println("Micromouse initialized");
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
        void Forward()  { DW( DIR_R_MOTOR_PIN , HIGH); DW( DIR_L_MOTOR_PIN , HIGH); };
        void Backward() { DW( DIR_R_MOTOR_PIN , LOW); DW( DIR_L_MOTOR_PIN , LOW); };
        void Left()     { DW( DIR_R_MOTOR_PIN , HIGH); DW( DIR_L_MOTOR_PIN , LOW); };
        void Right()    { DW( DIR_R_MOTOR_PIN , LOW); DW( DIR_L_MOTOR_PIN , HIGH); };
        void Stop()     { DW( DIR_R_MOTOR_PIN , LOW); DW( DIR_L_MOTOR_PIN , LOW); };

        // ==================================== MANUAL ====================================
        void SetManualMode(bool mode) { manual_mode = mode; };
        void SetDirection(const char* dir) { direction = dir; };
        void ManualMove()
        {
            /*
            forward-left"
            forward
            forward-right
            left
            stop
            right
            backward-left
            backward
            backward-right
            */
            if (strcmp(direction, "forward-left") == 0)
            {
                Forward();
                Left();
            }
            else if (strcmp(direction, "forward") == 0)
            {
                Forward();
            }
            else if (strcmp(direction, "forward-right") == 0)
            {
                Forward();
                Right();
            }
            else if (strcmp(direction, "left") == 0)
            {
                Left();
            }
            else if (strcmp(direction, "stop") == 0)
            {
                Stop();
            }
            else if (strcmp(direction, "right") == 0)
            {
                Right();
            }
            else if (strcmp(direction, "backward-left") == 0)
            {
                Backward();
                Left();
            }
            else if (strcmp(direction, "backward") == 0)
            {
                Backward();
            }
            else if (strcmp(direction, "backward-right") == 0)
            {
                Backward();
                Right();
            }
        }

        // ==================================== CALIBRATOR ====================================
        void SetCalibrationMode(bool mode) { calibration_mode = mode; };
        void ResetCalibration()
        {
            ldr_l_min = 4095;
            ldr_l_max = 0;
            ldr_m_min = 4095;
            ldr_m_max = 0;
            ldr_r_min = 4095;
            ldr_r_max = 0;
            Serial.println("Calibration reset");
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
            Serial.println(" LDR L => min: " + String(ldr_l_min) + " max: " + String(ldr_l_max));
            Serial.println(" LDR M => min: " + String(ldr_m_min) + " max: " + String(ldr_m_max));
            Serial.println(" LDR R => min: " + String(ldr_r_min) + " max: " + String(ldr_r_max));
        }

        // ==================================== SCANNER ====================================
        void CalculateMove()
        {
            int* ldr_values = ReadLightSensors();

            // Debugging: Log the initial values
            Serial.println("Initial values:");
            Serial.print("PWM_R_MOTOR_VAR_SPEED: ");
            Serial.println(PWM_R_MOTOR_VAR_SPEED);
            Serial.print("PWM_L_MOTOR_VAR_SPEED: ");
            Serial.println(PWM_L_MOTOR_VAR_SPEED);
            Serial.print("ldr_values[0]: ");
            Serial.println(ldr_values[0]);
            Serial.print("ldr_values[1]: ");
            Serial.println(ldr_values[1]);
            Serial.print("ldr_values[2]: ");
            Serial.println(ldr_values[2]);

            if (ldr_values[0] < 200)
            {
                //steer right
                PWM_R_MOTOR_VAR_SPEED /= 1.1;
                //AW(PWM_R_MOTOR_PIN, PWM_R_MOTOR_VAR_SPEED);

                PWM_L_MOTOR_VAR_SPEED *= 1.1;
                //AW(PWM_L_MOTOR_PIN, PWM_L_MOTOR_VAR_SPEED);     

                if (PWM_L_MOTOR_VAR_SPEED > 255) PWM_L_MOTOR_VAR_SPEED = 255;
                if (PWM_R_MOTOR_VAR_SPEED > 255) PWM_R_MOTOR_VAR_SPEED = 255;

                // Debugging: Log the adjusted values
                Serial.println("Steer right:");
                Serial.print("PWM_R_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_R_MOTOR_VAR_SPEED);
                Serial.print("PWM_L_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_L_MOTOR_VAR_SPEED);
            }
            else if (ldr_values[1] > 200)
            {
                // Debugging: Log a message
                Serial.println("We are in trouble!");
            }
            else if (ldr_values[2] < 320)
            {
                //steer left
                PWM_L_MOTOR_VAR_SPEED /= 1.1;
                //AW(PWM_L_MOTOR_PIN, PWM_L_MOTOR_VAR_SPEED);

                PWM_R_MOTOR_VAR_SPEED *= 1.1;
                //AW(PWM_R_MOTOR_PIN, PWM_R_MOTOR_VAR_SPEED);

                if (PWM_L_MOTOR_VAR_SPEED > 255) PWM_L_MOTOR_VAR_SPEED = 255;
                if (PWM_R_MOTOR_VAR_SPEED > 255) PWM_R_MOTOR_VAR_SPEED = 255;

                // Debugging: Log the adjusted values
                Serial.println("Steer left:");
                Serial.print("PWM_R_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_R_MOTOR_VAR_SPEED);
                Serial.print("PWM_L_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_L_MOTOR_VAR_SPEED);
            }
            else
            {
                // drive forward
                PWM_R_MOTOR_VAR_SPEED = NORMAL_MOTOR_SPEED;
                PWM_L_MOTOR_VAR_SPEED = NORMAL_MOTOR_SPEED;
                //AW( PWM_R_MOTOR_PIN , PWM_R_MOTOR_VAR_SPEED );
                //AW( PWM_L_MOTOR_PIN , PWM_L_MOTOR_VAR_SPEED );

                // Debugging: Log the forward motion
                Serial.println("Drive forward:");
                Serial.print("PWM_R_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_R_MOTOR_VAR_SPEED);
                Serial.print("PWM_L_MOTOR_VAR_SPEED: ");
                Serial.println(PWM_L_MOTOR_VAR_SPEED);
            }
            DW( DIR_L_MOTOR_PIN , HIGH);
        }
};
