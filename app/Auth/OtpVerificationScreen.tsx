import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
// import { Toast } from "toastify-react-native";
import { useToast } from "@/components/Toast/ToastProvider";

import { LinearGradient } from "expo-linear-gradient";

export default function OtpVerificationScreen() {
  const router = useRouter();
    const showToast = useToast(); 


  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const inputs = useRef<(TextInput | null)[]>([]);

  const [fontsLoaded] = useFonts({
    // "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    // "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    // "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1); // only the last character
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // ✅ handleKeyPress
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("Verifying:", code);
    router.navigate("/Auth/LoginScreen");
    // Toast.success("OTP Verified Successfully!");
    showToast("OTP Verified Successfully!", "success"); 
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: "padding", android: undefined })}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#212121" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontFamily: "Poppins-Bold" }]}>
          OTP Verification
        </Text>
      </View>

      <View style={styles.inner}>
        <Text style={[styles.title, { fontFamily: "Poppins-Bold" }]}>
          Enter Your Code
        </Text>
        <Text style={[styles.subtitle, { fontFamily: "Poppins-Regular" }]}>
          A 6-digit code has been sent to your registered email address.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((value, i) => (
            <TextInput
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              style={[styles.otpInput, { fontFamily: "Poppins-SemiBold" }]}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
            />
          ))}
        </View>

        <Text style={[styles.resendText, { fontFamily: "Poppins-Regular" }]}>
          Didn’t receive the code?{" "}
          <Text style={[styles.resendLink, { fontFamily: "Poppins-SemiBold" }]}>
            Resend
          </Text>
        </Text>

        <TouchableOpacity
          onPress={handleVerify}
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
              Verify
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#F1F5F9",
  },
  backArrow: {
    fontSize: 20,
    color: "#0F172A",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    marginRight: 20,
  },
  title: {
    fontSize: 26,
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#64748B",
    marginBottom: 30,
    paddingHorizontal: 12,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 60,
    textAlign: "center",
    fontSize: 22,
    color: "#111827",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#FFFFFF",
  },
  resendText: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 40,
  },
  resendLink: {
    color: "#7C3AED",
  },
  verifyButton: {
    height: 56,
    backgroundColor: "#0F172A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyText: {
    color: "#FFFFFF",
    fontSize: 16,
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
