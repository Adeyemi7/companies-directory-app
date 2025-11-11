import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

const OnboardingStep = () => {
  const router = useRouter();

  const [loaded] = useFonts({
    // PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    // InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) return null;

  const handleGetStarted = () => {
    router.navigate("/Auth/LoginScreen");
  };

  const handleSkip = () => {
    router.navigate("/Auth/LoginScreen");
  };

  return (
    <LinearGradient
      colors={["#F9FAFB", "#E0E7FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centerContent}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="group" size={150} color="#6366F1" />
          </View>

          <Text style={styles.heading}>Stay connected and informed.</Text>
          <Text style={styles.subText}>
            Join your network, collaborate effortlessly, and never miss an
            update again.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.pagination}>
            <View style={styles.dotInactive} />
            <View style={styles.dotInactive} />
            <View style={styles.dotActive} />
          </View>

          <TouchableOpacity
            onPress={handleGetStarted}
            activeOpacity={0.85}
            style={styles.buttonWrapper}
          >
            <LinearGradient
              colors={["#7C3AED", "#38BDF8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default OnboardingStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  skipContainer: {
    alignItems: "flex-end",
  },
  skipText: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "InterRegular",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    backgroundColor: "rgba(99,102,241,0.08)",
    borderRadius: 100,
    padding: 20,
  },
  heading: {
    fontFamily: "PoppinsBold",
    fontSize: 26,
    color: "#1E293B",
    textAlign: "center",
    marginTop: 32,
  },
  subText: {
    fontFamily: "InterRegular",
    fontSize: 15,
    color: "rgba(17, 24, 39, 0.75)",
    textAlign: "center",
    marginTop: 12,
    maxWidth: 300,
  },
  footer: {
    alignItems: "center",
    marginTop: 40,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    gap: 8,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(37,99,235,0.2)",
  },
  dotActive: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563EB",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 58,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "PoppinsBold",
    letterSpacing: 0.5,
  },
});
