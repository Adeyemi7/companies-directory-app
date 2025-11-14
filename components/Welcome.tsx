import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

type WelcomeProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleClick: () => void;
};

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View style={{padding: 16,}}>
      {/* Header */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ethan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            placeholderTextColor="#8E8E8E"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={require("@/assets/icons/search.png")}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          horizontal
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 12 }}
          renderItem={({ item }) => {
            const isActive = item === activeJobType;

            return (
              <TouchableOpacity
                style={[
                  styles.tab,
                  { borderColor: isActive ? "#222222" : "#C5C5C5" },
                ]}
                onPress={() => {
                  setActiveJobType(item);
                  //TODO:
                  router.push(`/job/search/${item}`);
                }}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: isActive ? "#222222" : "#8C8C8C" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontSize: 18,
    fontWeight: "400",
    color: "#6B7280",
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginTop: 20,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    height: "100%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    color: "#111827",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    marginLeft: 10,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "#FFFFFF",
  },
  tabsContainer: {
    width: "100%",
    marginTop: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "600",
  },
});


export default Welcome;
