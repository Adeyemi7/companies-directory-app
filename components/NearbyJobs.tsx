import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import useFetch from "@/hooks/use-fetch";
import NearbyJobCard from "./ui/NearbyJobCard";

const NearbyJobs: React.FC = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "Developer Jobs in Nigeria",
    num_pages: "1",
    country: 'ng',
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Job Cards */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#10B981" /> // emerald green
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {data?.map((job: any) => (
              <NearbyJobCard
                key={`nearby-job-${job.job_id}`}
                job={job}
                handleNavigate={() => {
                  router.push({
                    pathname: "/job/[id]",
                    params: { id: job.job_id },
                  });
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827", // near-black gray
  },
  headerBtn: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6B7280", // cool gray
  },
  cardsContainer: {
    gap: 10,
  },
  errorText: {
    color: "#DC2626", // red-600
    textAlign: "center",
    fontSize: 16,
  },
});

export default NearbyJobs;
