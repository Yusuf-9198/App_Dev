import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export interface MagnetometerData {
  x: number;
  y: number;
  z: number;
}

export interface UseMagnetometerReturn {
  data: MagnetometerData;
  heading: number;
  isAvailable: boolean | null;
  error: string | null;
}

export const useMagnetometer = (updateIntervalMs: number = 100): UseMagnetometerReturn => {
  const [data, setData] = useState<MagnetometerData>({ x: 0, y: 0, z: 0 });
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let subscription: ReturnType<typeof Magnetometer.addListener> | null = null;

    const setupMagnetometer = async () => {
      try {
        const available = await Magnetometer.isAvailableAsync();
        setIsAvailable(available);

        if (!available) {
          setError('Magnetometer sensor is not available on this device.');
          return;
        }

        // Set update frequency in milliseconds
        Magnetometer.setUpdateInterval(updateIntervalMs);

        // Subscribe to sensor updates
        subscription = Magnetometer.addListener((sensorData) => {
          setData(sensorData);
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize magnetometer.');
      }
    };

    setupMagnetometer();

    // Clean up listener on unmount
    return () => {
      subscription?.remove();
    };
  }, [updateIntervalMs]);

  // Platform-accurate heading calculation (0° = North, 90° = East, 180° = South, 270° = West)
  const calculateHeading = (): number => {
    const { x, y } = data;

    // Prevent NaN / invalid calculation before sensor transmits data
    if (x === 0 && y === 0) return 0;

    let angle = 0;

    if (Platform.OS === 'ios') {
      // iOS: Top of phone points North when calculating atan2(-x, y)
      angle = Math.atan2(-x, y) * (180 / Math.PI);
    } else {
      // Android: Sensor frame requires atan2(x, y) for top-of-screen orientation
      angle = Math.atan2(x, y) * (180 / Math.PI);
    }

    // Convert negative angles (-180° to 0°) to standard 360° circle (0° to 360°)
    if (angle < 0) {
      angle += 360;
    }

    return Math.round(angle);
  };

  return {
    data,
    heading: calculateHeading(),
    isAvailable,
    error,
  };
};