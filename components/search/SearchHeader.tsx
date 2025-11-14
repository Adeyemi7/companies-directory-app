// src/components/search/SearchHeader.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { debounce } from "lodash";

type Props = {
  initialQuery?: string;
  onSearch: (q: string) => void;
};

const SearchHeader: React.FC<Props> = ({ initialQuery = "", onSearch }) => {
  const [term, setTerm] = useState(initialQuery);

  // debounce to avoid firing search every keystroke
  const debounced = React.useRef(
    debounce((q: string) => {
      onSearch(q);
    }, 500)
  ).current;

  useEffect(() => {
    debounced(term);
    return () => {
      debounced.cancel();
    };
  }, [term]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{initialQuery || "Search"}</Text>
        <Text style={styles.subtitle}>Job Opportunities</Text>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor="#8B8B8B"
            value={term}
            onChangeText={setTerm}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => onSearch(term)}
          activeOpacity={0.8}
        >
          <Image
            source={require("@/assets/icons/search.png")}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: "#F7F7F7",
  },
  titleBox: {
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: "#6B7280",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 48,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  input: {
    fontSize: 16,
    color: "#111827",
    height: "100%",
  },
  searchBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
});

export default SearchHeader;
