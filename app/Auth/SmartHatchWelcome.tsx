import { useRouter } from "expo-router";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";

const SmartHatchWelcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.logoSection}>
        <View style={styles.logoCircleOuter}>
          <View style={styles.logoCircleInner}>
            <Svg width={96} height={96} viewBox="0 0 24 24" fill="#4CAF50">
              <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <Path d="M12 6c-2.29 0-4.42.9-6 2.42.48.65.89 1.39 1.21 2.21.36.88.59 1.88.59 2.95 0 1.5-.47 2.86-1.25 3.96C7.58 18.25 9.69 19 12 19c3.31 0 6-2.69 6-6s-2.69-6-6-6zm-1.5 8c-.83 0-1.5-.67-1.5-1.5S9.67 11 10.5 11s1.5.67 1.5 1.5S11.33 14 10.5 14zm3 0c-.83 0-1.5-.67-1.5-1.5S12.67 11 13.5 11s1.5.67 1.5 1.5S14.33 14 13.5 14z" />
            </Svg>
          </View>
        </View>
        <Text style={styles.title}>SmartHatch</Text>
        <Text style={styles.subtitle}>Let’s get your hatchery online!</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.navigate("/Auth/RegisterScreen")}
        >
          <Text style={styles.primaryText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.navigate("/Auth/LoginScreen")}
        >
          <Text style={styles.secondaryText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmartHatchWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logoSection: {
    alignItems: "center",
    marginBottom: 60,
  },
  logoCircleOuter: {
    backgroundColor: "#F5F5F5",
    borderRadius: 9999,
    padding: 24,
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 10,
  },
  logoCircleInner: {
    backgroundColor: "#F5F5F5",
    borderRadius: 9999,
    padding: 20,
    shadowColor: "#ffffff",
    shadowOffset: { width: -9, height: -9 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#212121",
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 6,
  },
  buttons: {
    width: "100%",
    maxWidth: 340,
  },
  primaryButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 16,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  secondaryText: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 16,
  },
});
