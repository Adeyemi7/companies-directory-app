// src/components/ui/NearbyJobCard.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { checkImageURL } from "@/utils";


type Props = {
  job: any;
  handleNavigate: () => void;
};

const NearbyJobCard: React.FC<Props> = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate} activeOpacity={0.9}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo!
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title ?? "Job Title"}
        </Text>
        <Text style={styles.jobType}>{job?.job_employment_type ?? "Full-time"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 6,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    marginLeft: 14,
    flex: 1,
  },
  jobName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  jobType: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },
});

export default NearbyJobCard;
