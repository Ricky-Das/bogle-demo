// @ts-nocheck
import { router, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Pressable, Share, StyleSheet, Text, View } from "react-native";

export default function Receipt() {
  const { amount, cashback, balance, merchantName } = useLocalSearchParams();

  const shareReceipt = async () => {
    const text = `Paid $${amount} to ${merchantName}. Earned $${cashback} cashback. New balance: $${balance}.`;
    try {
      await Share.share({ message: text });
    } catch {}
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("@/assets/images/splash-icon.png")}
        autoPlay
        loop={false}
        style={{ width: 120, height: 120 }}
      />
      <Text style={styles.title}>Payment Successful</Text>

      <View style={styles.card}>
        <Row label="Debited" value={`$${amount}`} />
        <Row label="Cashback" value={`$${cashback}`} />
        <Row label="New Balance" value={`$${balance}`} />
      </View>

      <View style={styles.btnRow}>
        <Pressable
          onPress={() => router.replace("/")}
          style={styles.primaryBtn}
        >
          <Text style={styles.primaryText}>Back to Home</Text>
        </Pressable>
        <Pressable onPress={shareReceipt} style={styles.outlinedBtn}>
          <Text style={styles.outlinedText}>Share Receipt</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 16,
  },
  card: {
    width: "90%",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    padding: 16,
    marginVertical: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  btnRow: {
    flexDirection: "row",
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: "#0444FF",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },
  outlinedBtn: {
    borderColor: "#0444FF",
    borderWidth: 2,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  outlinedText: {
    color: "#0444FF",
    fontWeight: "600",
  },
});
