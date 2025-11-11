import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// import { MaterialIcons } from "@expo/vector-icons";

export default function profile() {
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backArrow}>
          <MaterialIcons name="arrow-back" size={24} color="#212121" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>
      </View> */}

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200?img=12" }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Ethan Carter</Text>
        <Text style={styles.email}>ethan.carter@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <View style={[styles.iconCircle, styles.iconPurple]}>
              <Text style={styles.iconText}>🔒</Text>
            </View>
            <Text style={styles.rowText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.row, styles.logoutRow]}>
            <View style={[styles.iconCircle, styles.iconRed]}>
              <Text style={styles.iconText}>⎋</Text>
            </View>
            <Text style={[styles.rowText, styles.logoutText]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowText}>Version</Text>
            <Text style={styles.versionText}>1.0.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  backArrow: {
    fontSize: 22,
    color: "#0F172A",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#fff",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#38BDF8",
    borderRadius: 20,
    padding: 6,
  },
  editIcon: {
    color: "white",
    fontSize: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },
  email: {
    fontSize: 14,
    color: "#6B7280",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },
  iconCircle: {
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  iconPurple: {
    backgroundColor: "#7C3AED20",
  },
  iconRed: {
    backgroundColor: "#FCA5A520",
  },
  iconText: {
    fontSize: 18,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  versionText: {
    fontSize: 16,
    color: "#6B7280",
  },
  logoutRow: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: "#DC2626",
  },
});
