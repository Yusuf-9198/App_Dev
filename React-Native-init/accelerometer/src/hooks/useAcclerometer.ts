import { useEffect, useState } from "react";
import { Accelerometer, Subscription } from "expo-sensors";

export const useAccelerometer = () => {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let subscription: Subscription | null = null;

    const setupSensor = async () => {
      const isAvailable = await Accelerometer.isAvailableAsync();
      setAvailable(isAvailable);

      if (!isAvailable) return; // FIXED: Stop execution only if sensor is missing

      Accelerometer.setUpdateInterval(100);
      subscription = Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData); // Single state update instead of 3
      });
    };

    setupSensor();

    // FIXED: Clean up directly inside the top-level useEffect
    return () => {
      subscription?.remove();
    };
  }, []);

  return { available, ...data };
};