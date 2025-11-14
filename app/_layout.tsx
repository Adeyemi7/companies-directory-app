import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ToastContainer from "toastify-react-native";
import { ToastProvider } from "../components/Toast/ToastProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <ToastProvider>
        <ToastContainer />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="splash"
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
            name="(tabs)"
            options={{
              headerTitle: "",
              headerShown: false,
            }}
          />
        </Stack>
      </ToastProvider>
    </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}



// import React from "react";
// import { SafeAreaView, StyleSheet } from "react-native";
// import { Stack } from "expo-router";
// import ToastContainer from "toastify-react-native";
// import { ToastProvider } from "../components/Toast/ToastProvider";

// export default function RootLayout() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ToastProvider>
//         <ToastContainer />
//         {/* Let file-based routing auto-register routes */}
//         <Stack screenOptions={{ headerShown: false }} />
//       </ToastProvider>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });