import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";

type FooterProps = {
  url: string;
};

const Footer: React.FC<FooterProps> = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={require("@/assets/icons/heart-ol.png")}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 4,
  },

  // Heart button
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1.5,
    borderColor: "#F37453",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },

  // Apply button
  applyBtn: {
    height: 55,
    flex: 1,
    backgroundColor: "#FE7654",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    borderRadius: 12,
  },
  applyBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default Footer;
