import React from "react";
import { View, Text, StyleSheet } from "react-native";

type AboutProps = {
  info: any;
};

const About: React.FC<AboutProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          {info || "No information available for this job."}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  headText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827", // gray-900
  },
  contentBox: {
    marginTop: 10,
  },
  contextText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4B5563", // gray-700
    fontWeight: "400",
  },
});

export default About;
