// src/components/search/SearchList.tsx
import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  StyleSheet,
} from "react-native";
import NearbyJobCard from "@/components/ui/NearbyJobCard";

type Props = {
  data: any;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  onRefresh: () => void;
  onNavigateToJob: (jobId: string) => void;
  page: number;
};

const SearchList: React.FC<Props> = ({
  data,
  isLoading,
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
  onRefresh,
  onNavigateToJob,
  page,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.job_id}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <NearbyJobCard
          job={item}
          handleNavigate={() => onNavigateToJob(item.job_id)}
        />
      )}
      ListEmptyComponent={() => {
        if (isLoading) return null;
        return (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No jobs found</Text>
          </View>
        );
      }}
      ListFooterComponent={() => (
        <View style={styles.footer}>
          {isFetchingNextPage ? (
            <ActivityIndicator size="small" color="#2563EB" />
          ) : hasNextPage ? (
            <Text style={styles.loadMore}>Load more</Text>
          ) : (
            <Text style={styles.endText}>End of results</Text>
          )}
        </View>
      )}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      onEndReachedThreshold={0.6}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 120,
    rowGap: 12,
  },
  footer: {
    paddingVertical: 16,
    alignItems: "center",
  },
  empty: {
    paddingTop: 30,
    alignItems: "center",
  },
  emptyText: {
    color: "#6B7280",
  },
  loadMore: {
    color: "#2563EB",
  },
  endText: {
    color: "#9CA3AF",
  },
});

export default SearchList;
