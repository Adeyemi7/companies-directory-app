import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F5F5F5",
    borderRadius: 9999,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
  text: {
    color: "#4CAF50",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
