import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Toast } from "toastify-react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    router.push("/Auth/LoginScreen");
    Toast.success("Registration Successful!");
  };

  const [fontsLoaded] = useFonts({
    // Poppins: require("./assets/fonts/Poppins-SemiBold.ttf"),
    // Inter: require("./assets/fonts/Inter-Medium.ttf"),
    // Urbanist: require("./assets/fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleBack = () => {
    router.navigate("/Auth/LoginScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons
              onPress={handleBack}
              name="arrow-back-ios"
              size={22}
              color="#0F172A"
            />
          </TouchableOpacity>
          <Text style={[styles.title, { fontFamily: "Urbanist" }]}>
            Register
          </Text>
          <View style={{ width: 22 }} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { fontFamily: "Inter" }]}>Full name</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="person-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Enter your full name"
              placeholderTextColor="#9CA3AF"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { fontFamily: "Inter" }]}>Email</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="mail-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { fontFamily: "Inter" }]}>Password</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { fontFamily: "Inter" }]}>
            Confirm Password
          </Text>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Confirm your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.85}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#7C3AED", "#38BDF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={[styles.buttonText, { fontFamily: "Poppins" }]}>
              Register
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { fontFamily: "Inter" }]}>
            Already have an account?{" "}
            <Text
              onPress={handleLogin}
              style={[styles.footerLink, { fontFamily: "Poppins" }]}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8FAFC",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 22,
    color: "#0F172A",
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
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
    color: "#FFFFFF",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
    marginTop: 40,
  },
  footerText: {
    color: "#6B7280",
    fontSize: 14,
  },
  footerLink: {
    color: "#7C3AED",
  },
});
