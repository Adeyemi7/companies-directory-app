import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { checkImageURL } from "@/utils";

interface PopularJobCardProps {
  item: any;
  selectedJob?: string;
  handleCardPress: (item: any) => void;
}

const PopularJobCard = ({ item, selectedJob, handleCardPress }: PopularJobCardProps) => {
  const isSelected = selectedJob === item.job_id;

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.9}
    >
      {/* Company Logo */}
      <View style={[styles.logoContainer, isSelected && styles.selectedLogo]}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      {/* Company Name */}
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name || "Unknown Company"}
      </Text>

      {/* Job Info */}
      <View style={styles.infoContainer}>
        <Text
          style={[styles.jobName, isSelected && styles.selectedJobName]}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text
            style={[styles.publisher, isSelected && styles.selectedPublisher]}
          >
            {item?.job_publisher || "N/A"} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 6,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedContainer: {
    backgroundColor: "#10B981", // Emerald green highlight
    shadowColor: "#10B981",
  },
  logoContainer: {
    width: 56,
    height: 56,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  selectedLogo: {
    backgroundColor: "#FFFFFF",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
  infoContainer: {
    marginTop: 12,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  selectedJobName: {
    color: "#FFFFFF",
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  publisher: {
    fontSize: 13,
    color: "#4B5563",
  },
  selectedPublisher: {
    color: "#FFFFFF",
  },
  location: {
    fontSize: 13,
    color: "#9CA3AF",
  },
});

export default PopularJobCard;
