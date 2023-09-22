class Micromouse {
    private:
        bool calibration_mode = true;

        int ldr_l_min = 4095;
        int ldr_l_max = 0;

        int ldr_m_min = 4095;
        int ldr_m_max = 0;

        int ldr_r_min = 4095;
        int ldr_r_max = 0;



    public:
        Micromouse() {}

        void Initialize() {
            Serial.println("Micromouse initialized");
        };

        void Update()
        {
            if (calibration_mode)
                CalibrateSensors();
            else
                CalculateMove();

            delay(100);
        };


        // ==================================== MOVEMENT ====================================
        void Forward()  { Serial.println("Micromouse forward"); };
        void Backward() { Serial.println("Micromouse backward"); };
        void Left()     { Serial.println("Micromouse left"); };
        void Right()    { Serial.println("Micromouse right"); };

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
            int ldr_l_min_sens = 1.2; 
            int ldr_m_min_sens = 1.2; 
            int ldr_r_min_sens = 1.2; 
            int* ldr_values = ReadLightSensors();
            // ldr_values[0] // left ldr
            // ldr_values[1] // middle ldr
            // ldr_values[2] // right ldr
            if(ldr_values[0] < ldr_l_min * ldr_l_min_sens)
            {
                //steer right
                
                
            }

            else if (ldr_values[1] > ldr_m_min * ldr_m_min_sens)
            {
                //we are fuck if this is true
            }

            else if (ldr_values[2] < ldr_r_min * ldr_r_min_sens)
            {
                //steer left
            }

            else
            {
                // drive forward
            }


            // logic here
          
        }
        
        int* ReadLightSensors()
        {
            int* ldr_values = new int[3];
            ldr_values[0] = AR(LDR_L_PIN);
            ldr_values[1] = AR(LDR_M_PIN);
            ldr_values[2] = AR(LDR_R_PIN);
            return ldr_values;
        };

};
