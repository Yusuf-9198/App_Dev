import { Text, View, StyleSheet, Platform } from "react-native";
import { useMagnetometer } from "../hooks/use-megnetometer";
import { useEffect } from "react";

export default function Index() {
  const { data, heading, isAvailable, error } = useMagnetometer(100);

  useEffect(() => {
    void console.log(`Magnetometer Data: x=${data.x}, y=${data.y}, z=${data.z}, heading=${heading}`);
  })
  if (isAvailable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {error || "Magnetometer is not available on this device."}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{heading}°</Text>
      <Text style={styles.subText}>Compass Heading</Text>

      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>X: {data.x.toFixed(2)}</Text>
        <Text style={styles.dataText}>Y: {data.y.toFixed(2)}</Text>
        <Text style={styles.dataText}>Z: {data.z.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  headingText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subText: {
    fontSize: 18,
    color: "#a0a0a0",
    marginBottom: 24,
  },
  dataContainer: {
    flexDirection: "row",
    gap: 16,
  },
  dataText: {
    fontSize: 14,
    color: "#888888",
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
  errorText: {
    color: "#ff4d4d",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});