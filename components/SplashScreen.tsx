import { Image } from "expo-image";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#0444FF" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
  },
  spinner: {
    marginTop: 16,
  },
});
