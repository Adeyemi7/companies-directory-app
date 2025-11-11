import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Toast } from "toastify-react-native";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { useFonts } from "expo-font";

const ResetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    router.navigate("/Auth/OtpVerificationScreen");
    Toast.success(" Otp sent to your email!");
    // Add your password reset API call here
    console.log("Reset link sent to:", email);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#212121" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.main}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="lock-reset"
            size={48}
            colors={["#7C3AED", "#38BDF8"]}
          />
        </View>

        <Text style={styles.description}>
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </Text>

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="mail"
            size={22}
            color="#757575"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#757575"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleReset}
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
            Send Reset Link
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#212121",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: 24,
  },
  description: {
    textAlign: "center",
    color: "#424242",
    fontSize: 15,
    lineHeight: 22,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 360,
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    top: "50%",
    marginTop: -11,
  },
  input: {
    height: 56,
    backgroundColor: "#F5F5F5",
    borderRadius: 28,
    paddingLeft: 46,
    paddingRight: 20,
    fontSize: 16,
    color: "#212121",
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  resetButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 28,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  resetText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
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
});
