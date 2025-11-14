import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import PopularJobCard from "@/components/ui/PopularJobCard";
import useFetch from "@/hooks/use-fetch";

const PopularJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState<string | undefined>();

  const handleCardPress = (item: any) => {
    router.push({
    pathname: "/job/[id]",
    params: { id: item.job_id }
  });
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Job Cards */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#10B981" />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={styles.listContent}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#052224",
  },
  headerBtn: {
    fontSize: 14,
    fontWeight: "500",
    color: "#10B981",
  },
  cardsContainer: {
    minHeight: 150,
  },
  listContent: {
    columnGap: 14,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 14,
    textAlign: "center",
  },
});

export default PopularJobs;
