import { useToast } from "@/components/Toast/ToastProvider";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const showToast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   router.push("");
  // ROUTE TO DASHBOARD
  // };

  const handleLogin = () => {
    router.navigate("/(tabs)/home");
    showToast("Login Successful!");
  };

  const handleRegister = () => {
    router.push("/Auth/RegisterScreen");
  };

  const handleForgotPassword = () => {
    router.push("/Auth/ResetPassword");
  };

  const [fontsLoaded] = useFonts({
    // Poppins: require("./assets/fonts/Poppins-SemiBold.ttf"),
    // Inter: require("./assets/fonts/Inter-Medium.ttf"),
    // Urbanist: require("./assets/fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={[styles.title, { fontFamily: "Urbanist" }]}>
            Welcome Back
          </Text>
          <Text style={[styles.subtitle, { fontFamily: "Inter" }]}>
            Login to your account
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="mail-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock-outline"
              size={22}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={[styles.inputField, { fontFamily: "Inter" }]}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.forgotContainer}>
          <Text
            onPress={handleForgotPassword}
            style={[styles.forgotText, { fontFamily: "Poppins" }]}
          >
            Forgot Password?
          </Text>
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
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister} style={styles.googleButton}>
          <Image
            source={{
              uri: "https://images.financialmodelingprep.com/symbol/GOOGL.png",
            }}
            style={styles.googleIcon}
          />
          <Text style={[styles.googleText, { fontFamily: "Poppins" }]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={[styles.signupText, { fontFamily: "Inter" }]}>
            Don’t have an account?{" "}
            <Text
              onPress={handleRegister}
              style={[styles.signupLink, { fontFamily: "Poppins" }]}
            >
              Sign Up
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
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 6,
  },
  inputWrapper: {
    marginBottom: 20,
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
    color: "#111827",
    fontSize: 15,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    fontSize: 13,
    color: "#7C3AED",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 58,
    borderRadius: 10,
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
    fontSize: 16,
  },
  googleButton: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    marginTop: 16,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleText: {
    color: "#0F172A",
    fontSize: 16,
  },
  signupContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  signupText: {
    color: "#6B7280",
    fontSize: 14,
  },
  signupLink: {
    color: "#7C3AED",
  },
});
