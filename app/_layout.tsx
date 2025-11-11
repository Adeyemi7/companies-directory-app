import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastContainer from "toastify-react-native";
import { ToastProvider } from "../components/Toast/ToastProvider";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToastProvider>
        <ToastContainer />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="splash/index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="onboarding/Splashscreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="onboarding/CompaniesOnboarding"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="onboarding/OnboardingStep"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Auth/LoginScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Auth/RegisterScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Auth/ResetPassword"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Auth/OtpVerificationScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="(tab)"
            options={{
              headerTitle: "",
              headerShown: false,
            }}
          />
        </Stack>
      </ToastProvider>
    </SafeAreaView>
  );
}
