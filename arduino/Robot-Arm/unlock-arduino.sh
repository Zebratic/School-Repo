#!/bin/bash

# Scan for devices
devices=$(ls /dev/tty*)

# Check if any devices are found
found=0
if [ -n "$devices" ]; then
    for device in $devices; do
        # get the device's info
        device_info=$(udevadm info -q all -a -n $device)

        # if it contains ATTRS{manufacturer}=="Arduino then it's an Arduino device
        if [[ $device_info == *"ATTRS{manufacturer}==\"Arduino"* ]]; then
            echo "Detected Arduino device at $device"
            echo "Unlocking device..."
            sudo chmod a+rw $device
            echo "Unlocked!"
            found=1
        fi
    done
    
    if [ $found -eq 0 ]; then
        echo "No Arduino devices found."
    fi
else
    echo "No devices found."
fi