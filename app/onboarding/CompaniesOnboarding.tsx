import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const sectors = [
  {
    id: 1,
    title: "Technology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3RWhI32R-hzC2_veEB77uuH4hm5zT28fSrO-7ScoN4-hI3oTEs7MvBKkL9dIPXIZF1Ya_-Fpi4qNiHCh3LhBIkHD3EaPdQpmoRlytUPoiPZqM9_em4uT2BpBAQOuf_02KmUQTfgBfH0842shcyM6NaOCvJR8n-Fi9b8mIbAz-XKiDDTt5yi-00YNyBOs6ANqMdthtZGt9MllV7WN4MzsWCoUNxJriMzgvFxRfnq5tJWW6XYwcG2FfgR50u6Rwo-YTR3bmEN5MQ3g",
  },
  {
    id: 2,
    title: "Finance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSIiQAfOFXpTrDpfE1IkJp0kQ9YIYgFfBaeWxNehT7mzeJLcC3ikTFVHuh3ln_IabO7O8qdTXcDa2yAlZ6xg8oUslHZuOBggzq1Jzkz8u20EA4ifz7lR2GS0hnoB4tbdvoNo8cWNpLiSqaCMfn-xQQ9IECjfsPK7SHWrU5xqNVHqqWCJPtcMZSsxrlSrQEL8iDIQCZcFKMLkISJF947tu5MPfDdldShPfMeMqb7kRvRJ_p63tqKWsLE4N31iZeO2OZlEhracRhtQ",
  },
  {
    id: 3,
    title: "Healthcare",
    image:
      "https://cdn.pixabay.com/photo/2020/03/17/17/14/medical-4941285_1280.png",
  },
  {
    id: 4,
    title: "Retail",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVD7UyBqweCaNj-UNlUU5iiOC8P4D8GfjbfBMblJYMbv62MmiJRZJyv4ku_GA9US6IKy0N9z7jKbG5esMwvtF5vphK98ZBAy71puUVHMqtIJ0Om4dBKHhxswVxOiP40_Iah3sAqVyte94n7OPZRc4pfIj_APVvzvyh0siw4vHdFHZJtGTubfLBqX8rXFpQTjMqVhFfAmQ9_uU4GKaj5Lj9Qh4TvmQOW8CGdDFaheCKLKQ8GTh0FUaVjtD87uyn_wmBcwNkNojeMtk",
  },
];

const CompaniesOnboarding = () => {
  const router = useRouter();

  const [loaded] = useFonts({
    // Poppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
    // Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) return null;

  const handleGetStarted = () => {
    router.navigate("/onboarding/OnboardingStep");
  };

  const handleSkip = () => {
    router.navigate("/Auth/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Filter by verified sectors</Text>
          <Text style={styles.subtitle}>
            Explore companies by industry, size, and more to find the perfect
            fit for your career goals.
          </Text>
        </View>

        <View style={styles.gridContainer}>
          {sectors.map((sector) => (
            <View key={sector.id} style={styles.gridItem}>
              <ImageBackground
                source={{ uri: sector.image }}
                style={styles.image}
                imageStyle={{ borderRadius: 12 }}
              />
              <Text style={styles.gridText}>{sector.title}</Text>
            </View>
          ))}
        </View>

        <View style={styles.pagination}>
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
        </View>

        <TouchableOpacity
          onPress={handleGetStarted}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#7C3AED", "#38BDF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CompaniesOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 24,
  },
  skipContainer: {
    paddingTop: 50,
    alignItems: "flex-end",
  },
  skipText: {
    color: "#2563EB",
    fontFamily: "Inter",
    fontSize: 16,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 20,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 26,
    color: "#0F172A",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: 15,
    color: "rgba(17, 24, 39, 0.8)",
    textAlign: "center",
    maxWidth: 300,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  gridItem: {
    width: "47%",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 8,
  },
  gridText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(37,99,235,0.2)",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563EB",
    marginHorizontal: 4,
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
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
