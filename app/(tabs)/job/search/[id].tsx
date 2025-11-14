// src/screens/JobSearch.tsx
import React, { useState, useMemo, useCallback } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchHeader from "@/components/search/SearchHeader";
import SearchList from "@/components/search/SearchList";
import { useJobSearch } from "@/hooks/useJobSearch";

const JobSearch: React.FC = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const initialQuery = (params.id as string) ?? "";

  const [query, setQuery] = useState<string>(initialQuery);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useJobSearch(query);

  const flattened = useMemo(() => {
    if (!data) return [];
    return data.pages.flat();
  }, [data]);

  const handleNavigateToJob = useCallback(
    (jobId: string) => {
      router.push(`/job/${jobId}`);
    },
    [router]
  );

  return (
    <SafeAreaView style={styles.safe}>

      <SearchHeader
        initialQuery={initialQuery}
        onSearch={(q) => {
          // update query -> hook will re-run
          setQuery(q);
        }}
      />

      {isLoading && !flattened.length ? (
        <View style={styles.loadingWrap}>
          <ActivityIndicator size="large" color="#2563EB" />
        </View>
      ) : isError ? (
        <View style={styles.loadingWrap}>
          <Text style={styles.errorText}>Something went wrong.</Text>
        </View>
      ) : (
        <SearchList
          data={flattened}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          hasNextPage={!!hasNextPage}
          onRefresh={() => refetch()}
          onNavigateToJob={handleNavigateToJob}
          page={1}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  loadingWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "#DC2626",
  },
});

export default JobSearch;
