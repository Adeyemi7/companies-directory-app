import React from "react";
import { View, Text, StyleSheet } from "react-native";

type SpecificsProps = {
  title: string;
  points: any;
};

const Specifics: React.FC<SpecificsProps> = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item: any, index: number) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827", // dark gray/black
  },
  pointsContainer: {
    marginVertical: 12,
  },
  pointWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 6,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#9CA3AF", // gray-400
    marginTop: 6,
  },
  pointText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#6B7280", // gray-500
    fontWeight: "400",
    flexShrink: 1,
  },
});

export default Specifics;
