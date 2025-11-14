import React from "react";
import { Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  dimension: any;
  handlePress?: () => void;
};

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    borderRadius: 12,
  },
});

export default ScreenHeaderBtn;
