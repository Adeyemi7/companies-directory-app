import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { checkImageURL } from "@/utils";

type CompanyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

const Company: React.FC<CompanyProps> = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}) => {
  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo!
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      {/* Job Title */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* Company + Location */}
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.separator}> / </Text>
        <View style={styles.locationBox}>
          <Image
            source={require('@/assets/icons/location.png')}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  logoImage: {
    width: "75%",
    height: "75%",
  },
  jobTitleBox: {
    marginTop: 12,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827", // gray-900
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  companyName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  separator: {
    fontSize: 15,
    color: "#6B7280", // gray-500
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: "#6B7280",
    marginRight: 3,
  },
  locationName: {
    fontSize: 15,
    color: "#6B7280",
  },
});

export default Company;
