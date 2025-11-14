import React, { useCallback, useState } from "react";
import { 
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  StyleSheet
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeaderBtn from "@/components/ui/ScreenHeaderBtn";
import { Company, JobAbout, JobFooter, JobTabs, Specifics } from "@/components/JobDetails";
import useFetch from "@/hooks/use-fetch";

const tabs = ["About", "Qualifications", "Responsibilities"];


const JobDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch(
    "job-details",
    { job_id: id }
  );

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  const job = data?.[0];

  const displayTabContent = () => {
    if (!job) return null;

    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={job.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return <JobAbout info={job.job_description ?? "No information available"} />;

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={job.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#F7F7F7" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={require("@/assets/icons/chevron-left.png")}
              dimension={24}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={require("@/assets/icons/heart-ol.png")}
              dimension={24}
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF6B00" />
        ) : error ? (
          <Text style={styles.error}>Something went wrong</Text>
        ) : !job ? (
          <Text style={styles.error}>No data available</Text>
        ) : (
          <View style={styles.content}>
            <Company
              companyLogo={job.employer_logo}
              jobTitle={job.job_title}
              companyName={job.employer_name}
              location={job.job_country}
            />

            <JobTabs 
              tabs={tabs} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      {job && (
        <JobFooter url={job.job_google_link ?? "https://careers.google.com/jobs/results/"} />
      )}
    </SafeAreaView>
  );
};

export default JobDetails;


// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  error: {
    textAlign: "center",
    color: "#555",
    marginTop: 20,
    fontSize: 16,
  },
});
