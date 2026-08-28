import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Accelerometer } from "expo-sensors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BALL_SIZE = 28;
const TARGET_SIZE = 40;
const PADDING = 20;

const GAME_WIDTH = SCREEN_WIDTH - PADDING * 2;
const GAME_HEIGHT = 260;

export default function TiltGame() {
  const insets = useSafeAreaInsets();

  const [score, setScore] = useState(0);
  const [sensorValues, setSensorValues] = useState({ x: 0, y: 0, z: 0 });
  const [ballPos, setBallPos] = useState({
    x: GAME_WIDTH / 2 - BALL_SIZE / 2,
    y: GAME_HEIGHT / 2 - BALL_SIZE / 2,
  });
  const [targetPos, setTargetPos] = useState({ x: 40, y: 40 });

  // Physics refs for stable closure execution in 60 FPS animation loop
  const posRef = useRef({
    x: GAME_WIDTH / 2 - BALL_SIZE / 2,
    y: GAME_HEIGHT / 2 - BALL_SIZE / 2,
  });
  const velRef = useRef({ x: 0, y: 0 });
  const accelRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 40, y: 40 });
  const scoreRef = useRef(0);

  const spawnTarget = () => {
    const newX = Math.random() * (GAME_WIDTH - TARGET_SIZE);
    const newY = Math.random() * (GAME_HEIGHT - TARGET_SIZE);
    targetRef.current = { x: newX, y: newY };
    setTargetPos({ x: newX, y: newY });
  };

  useEffect(() => {
    spawnTarget();
    Accelerometer.setUpdateInterval(16);

    const subscription = Accelerometer.addListener((data) => {
      accelRef.current = { x: data.x, y: data.y };
      setSensorValues({ x: data.x, y: data.y, z: data.z });
    });

    let animFrameId: number;

    const gameLoop = () => {
      const sensitivity = 1.5;
      const friction = 0.93;

      // Update velocities based on sensor readings
      velRef.current.x = (velRef.current.x + accelRef.current.x * sensitivity) * friction;
      velRef.current.y = (velRef.current.y - accelRef.current.y * sensitivity) * friction;

      let newX = posRef.current.x + velRef.current.x;
      let newY = posRef.current.y + velRef.current.y;

      // Wall bounds & elasticity dampening
      if (newX < 0) {
        newX = 0;
        velRef.current.x *= -0.5;
      } else if (newX > GAME_WIDTH - BALL_SIZE) {
        newX = GAME_WIDTH - BALL_SIZE;
        velRef.current.x *= -0.5;
      }

      if (newY < 0) {
        newY = 0;
        velRef.current.y *= -0.5;
      } else if (newY > GAME_HEIGHT - BALL_SIZE) {
        newY = GAME_HEIGHT - BALL_SIZE;
        velRef.current.y *= -0.5;
      }

      posRef.current = { x: newX, y: newY };
      setBallPos({ x: newX, y: newY });

      // Collision check
      const ballCenter = { x: newX + BALL_SIZE / 2, y: newY + BALL_SIZE / 2 };
      const targetCenter = {
        x: targetRef.current.x + TARGET_SIZE / 2,
        y: targetRef.current.y + TARGET_SIZE / 2,
      };

      const distance = Math.hypot(
        ballCenter.x - targetCenter.x,
        ballCenter.y - targetCenter.y
      );

      if (distance < (BALL_SIZE + TARGET_SIZE) / 2) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
        spawnTarget();
      }

      animFrameId = requestAnimationFrame(gameLoop);
    };

    animFrameId = requestAnimationFrame(gameLoop);

    return () => {
      subscription.remove();
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const handleReset = () => {
    scoreRef.current = 0;
    setScore(0);
    posRef.current = {
      x: GAME_WIDTH / 2 - BALL_SIZE / 2,
      y: GAME_HEIGHT / 2 - BALL_SIZE / 2,
    };
    velRef.current = { x: 0, y: 0 };
    setBallPos(posRef.current);
    spawnTarget();
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 12 }]}>
      <Text style={styles.title}>Tilt the ball</Text>
      <Text style={styles.subtitle}>
        Tilt the phone. Watch x and y change. The ball follows x and y.
      </Text>

      {/* Sensor readout display box */}
      <View style={styles.sensorBox}>
        <Text style={styles.sensorTitle}>Accelerometer (g)</Text>
        <Text style={styles.sensorLine}>x: {sensorValues.x.toFixed(2)}</Text>
        <Text style={styles.sensorLine}>y: {sensorValues.y.toFixed(2)}</Text>
        <Text style={styles.sensorLine}>z: {sensorValues.z.toFixed(2)}</Text>
        <Text style={styles.sensorHint}>
          Flat on table {"->"} z = 1. Tilt left/right {"->"} x changes. Tilt forward/back {"->"} y changes.
        </Text>
      </View>

      {/* Game controls & playable area */}
      <View style={styles.gameHeader}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.playArea}>
        <View style={[styles.target, { left: targetPos.x, top: targetPos.y }]} />
        <View style={[styles.ball, { left: ballPos.x, top: ballPos.y }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginBottom: 16,
  },
  sensorBox: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 16,
  },
  sensorTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#38bdf8",
    marginBottom: 8,
  },
  sensorLine: {
    fontSize: 15,
    color: "#f8fafc",
    fontFamily: "monospace",
    marginVertical: 1,
  },
  sensorHint: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 8,
    lineHeight: 16,
  },
  gameHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f8fafc",
  },
  resetButton: {
    backgroundColor: "#f43f5e",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  resetText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
  },
  playArea: {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    borderColor: "#334155",
    borderWidth: 1,
    position: "relative",
    overflow: "hidden",
  },
  ball: {
    position: "absolute",
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: "#38bdf8",
  },
  target: {
    position: "absolute",
    width: TARGET_SIZE,
    height: TARGET_SIZE,
    borderRadius: TARGET_SIZE / 2,
    backgroundColor: "#4ade80",
  },
});