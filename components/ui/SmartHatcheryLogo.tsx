import React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const SmartHatchLogo = () => {
  return (
    <View style={styles.circle}>
      <Svg width="100" height="100" viewBox="0 0 24 24" fill="#4CAF50">
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
        10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
        8-8 8 3.59 8 8-3.59 8-8 8z" />
        <Path d="M12 10.5c-1.68 0-3.05 1.14-3.42 2.65-.17.7.13 1.41.76 
        1.76.63.35 1.39.06 1.76-.57.2-.34.52-.54.89-.54.55 0 1 .45 
        1 1s-.45 1-1 1c-1.4 0-2.6-1.01-2.92-2.35C9.07 10.3 
        10.42 9 12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3c-.55 0-1-.45-1-1s.45-1 
        1-1c.38 0 .7-.2.89-.54.37-.63.13-1.41-.5-1.76-.63-.35-1.39-.06-1.76.57C11.23 
        12.36 10.88 13 10 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 
        .9 2 2z" />
      </Svg>
    </View>
  );
};

export default SmartHatchLogo;

const styles = StyleSheet.create({
  circle: {
    width: 180,
    height: 180,
    borderRadius: 9999,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#d9d9d9",
    shadowOffset: { width: 9, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
});
