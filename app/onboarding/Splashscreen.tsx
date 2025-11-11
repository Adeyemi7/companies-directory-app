import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Splashscreen = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.navigate("/onboarding/CompaniesOnboarding");
  };

  const handleSkip = () => {
    router.navigate("/Auth/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtazklANuvml7U8-8-KIDkyq-Kc1uxBoaONxJ67dCvzXSxv3_x6vxkFkpvuD4CHZGydQAWiLlEkfsxUg87rHoHNw4UoY86kxKqw_GuLo5lGBUPgZwf1j5z3Kx9tNI7jaVmJ57A5uKmDTajzBrX3-m8Y2dCrQE3ho7jLoLRsldD5N8w4oz5IHazaXp040g9IEDPi6ib6Nb5VskrqT1GBFBHgBseDmTq_tfZ4U2NjEL8vN5AYgmEsq5Jh2QqDNDH7D9UyjYaE7EEdWU",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.title}>Find trusted companies globally</Text>

          <Text style={styles.description}>
            Explore verified organizations worldwide, ensuring transparency and
            reliability in your professional network.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
        </View>

        <TouchableOpacity
          onPress={handleGetStarted}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
          accessibilityLabel="Get started button"
        >
          <LinearGradient
            colors={["#7C3AED", "#38BDF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Next </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  skipContainer: {
    paddingHorizontal: 24,
    paddingTop: 50,
    alignItems: "flex-end",
  },
  skipText: {
    color: "#2a73ea",
    fontWeight: "600",
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 40,
  },
  imageContainer: {
    width: "100%",
    maxWidth: 350,
    aspectRatio: 4 / 3,
    borderRadius: 16,
    overflow: "hidden",
    transform: [{ rotate: "-3deg" }],
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#111827",
  },
  description: {
    textAlign: "center",
    color: "#374151",
    fontSize: 16,
    lineHeight: 22,
    maxWidth: 320,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 60,
    marginBottom: 30,
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
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  button: {
    width: "90%",
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
