import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DefaultPage = () => {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.15,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

    const loop = Animated.loop(pulse);
    loop.start();

    const timer = setTimeout(() => {
      loop.stop();
      router.replace("/onboarding/Splashscreen");
    }, 2500); // 2.5 seconds

    return () => {
      loop.stop();
      clearTimeout(timer);
    };
  }, [router, scaleAnim]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Animated.View
        style={[styles.logoBox, { transform: [{ scale: scaleAnim }] }]}
      >
        <View style={styles.logoInner}>
          <Text style={styles.logoText}>GN</Text>
        </View>
      </Animated.View>

      <Text style={styles.title}>GLOBAL NEXUS</Text>
    </View>
  );
};

export default DefaultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051733",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    width: 112,
    height: 112,
    backgroundColor: "#051733",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  logoInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: 1,
  },
});
