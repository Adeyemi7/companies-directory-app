import NearbyJobs from "@/components/NearbyJobs";
import Popularjobs from "@/components/PopularJobs";
import Welcome from "@/components/Welcome";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function JobsPage() {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 4,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/job/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <NearbyJobs />
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1},
});
