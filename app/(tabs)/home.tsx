import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInUp, FadeOut } from "react-native-reanimated";

import companyData from "@/mock/data.json";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const SECTORS = [
  "All",
  "Technology",
  "Healthcare",
  "Finance",
  "Energy",
  "Retail",
  "Automotive",
];

const PAGE_SIZE = 10;
const screenWidth = Dimensions.get("window").width;
const ITEM_WIDTH = (screenWidth - 60) / 2;

export default function CompanyDirectoryApp() {
  const [screen, setScreen] = useState<"home" | "details">("home");
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState(companyData);

  useEffect(() => {
    let list = companyData;

    if (selectedLetter) {
      list = list.filter((c) =>
        c.companyName.toUpperCase().startsWith(selectedLetter)
      );
    }

    if (selectedSector !== "All") {
      list = list.filter((c) => c.sector === selectedSector);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.companyName.toLowerCase().includes(q) ||
          c.symbol.toLowerCase().includes(q)
      );
    }

    setFiltered(list);
    setCurrentPage(1);
  }, [searchQuery, selectedLetter, selectedSector]);

  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const openDetails = (company: typeof companyData[0]) => {
    setSelectedCompany(company);
    setScreen("details");
  };

  const goBack = () => {
    setSelectedCompany(null);
    setScreen("home");
  };

  /* ----------------------------------------------------
     UPDATED DETAILS PAGE (FULL JSON SUPPORT)
     ---------------------------------------------------- */
  if (screen === "details" && selectedCompany) {
    const c = selectedCompany;

    const renderRow = (label: string, value: any) => (
      <View style={styles.detailsRow}>
        <Text style={styles.detailsLabel}>{label}</Text>
        <Text style={styles.detailsValue}>{value || "N/A"}</Text>
      </View>
    );

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.detailsHeader}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={26} color="#071531" />
          </TouchableOpacity>
          <Text style={styles.detailsTitle}>Company Details</Text>
        </View>

        <View style={styles.detailsCard}>
          <Image source={{ uri: c.image }} style={styles.detailsImage} />

          <Text style={styles.detailsName}>{c.companyName}</Text>
          <Text style={styles.detailsSymbol}>{c.symbol}</Text>

          {renderRow("Sector", c.sector)}
          {renderRow("Industry", c.industry)}
          {renderRow("CEO", c.ceo)}
          {renderRow("Employees", c.fullTimeEmployees)}
          <Text style={styles.detailsDescription}>{c.description}</Text>

          {/* IDENTIFICATION */}
          {renderRow("Currency", c.currency)}
          {renderRow("Exchange", c.exchangeFullName)}

          {/* LOCATION */}
          {renderRow("Country", c.country)}
          {renderRow("Phone", c.phone)}
          {renderRow("Website", c.website)}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.username}>Ethan</Text>
          </View>
          <View style={styles.notification}>
            <MaterialIcons name="notifications" size={24} color="#475569" />
            <View style={styles.badge} />
          </View>
        </View>

        <View style={styles.searchWrapper}>
          <MaterialIcons
            name="search"
            size={20}
            color="#94A3B8"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search companies"
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.letterScroll}
        >
          {LETTERS.map((l) => (
            <TouchableOpacity
              key={l}
              style={[
                styles.letterButton,
                selectedLetter === l && styles.letterButtonActive,
              ]}
              onPress={() => setSelectedLetter(selectedLetter === l ? null : l)}
            >
              <Text
                style={[
                  styles.letterText,
                  selectedLetter === l && styles.letterTextActive,
                ]}
              >
                {l}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.sectorScroll}
        >
          {SECTORS.map((sector) => (
            <TouchableOpacity
              key={sector}
              style={[
                styles.sectorButton,
                selectedSector === sector && styles.sectorButtonActive,
              ]}
              onPress={() => setSelectedSector(sector)}
            >
              <Text
                style={[
                  styles.sectorText,
                  selectedSector === sector && styles.sectorTextActive,
                ]}
              >
                {sector}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.grid}>
          {paginated.map((c, index) => (
            <TouchableOpacity key={c.symbol} onPress={() => openDetails(c)}>
              <Animated.View
                entering={FadeInUp.delay(index * 80)}
                exiting={FadeOut}
                style={styles.card}
              >
                <Image source={{ uri: c.image }} style={styles.cardImage} />
                <Text style={styles.cardName}>{c.companyName}</Text>
                <Text style={styles.cardLocation}>
                  {c.city || ""} {c.state || ""}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.pagination}>
          <TouchableOpacity
            disabled={currentPage === 1}
            onPress={() => setCurrentPage(currentPage - 1)}
          >
            <MaterialIcons
              name="chevron-left"
              size={30}
              color={currentPage === 1 ? "#CBD5E1" : "#334155"}
            />
          </TouchableOpacity>

          <Text style={styles.pageText}>
            {currentPage} / {totalPages || 1}
          </Text>

          <TouchableOpacity
            disabled={currentPage === totalPages}
            onPress={() => setCurrentPage(currentPage + 1)}
          >
            <MaterialIcons
              name="chevron-right"
              size={30}
              color={currentPage === totalPages ? "#CBD5E1" : "#334155"}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: { fontSize: 14, color: "#64748B" },
  username: { fontSize: 20, fontWeight: "700", color: "#071531" },
  notification: {
    backgroundColor: "#E2E8F0",
    padding: 8,
    borderRadius: 30,
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },

  searchWrapper: {
    marginTop: 20,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 14,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: 16,
  },

  letterScroll: { marginTop: 15 },
  letterButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#E2E8F0",
    marginRight: 8,
  },
  letterButtonActive: { backgroundColor: "#1E40AF" },
  letterText: { color: "#334155", fontSize: 14, fontWeight: "600" },
  letterTextActive: { color: "white" },

  sectorScroll: { marginTop: 15 },
  sectorButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
    marginRight: 10,
  },
  sectorButtonActive: { backgroundColor: "#1E293B" },
  sectorText: { color: "#334155", fontWeight: "600" },
  sectorTextActive: { color: "white" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: ITEM_WIDTH,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardName: { fontWeight: "700", color: "#071531", fontSize: 15 },
  cardLocation: { color: "#64748B", fontSize: 12 },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
  pageText: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
  },

  detailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    backgroundColor: "#E2E8F0",
    borderRadius: 30,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#071531",
    marginLeft: 20,
  },
  detailsCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },
  detailsImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  detailsName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#071531",
  },
  detailsSymbol: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 10,
  },
  detailsSector: { color: "#334155", marginBottom: 10, fontWeight: "600" },
  detailsDescription: {
    color: "#475569",
    fontSize: 15,
    marginVertical: 15,
    paddingHorizontal: 10,
    lineHeight: 22,
    marginBottom: 30,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailsLabel: { color: "#64748B", fontWeight: "600" },
  detailsValue: { fontWeight: "700", color: "#071531", textAlign: "right" },
});
