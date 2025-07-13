// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { mockApi } from "@/api/mockApi";
import PrimaryButton from "@/components/PrimaryButton";
import { useStore } from "@/store/useStore";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PaymentConfirm() {
  const { draft: encoded } = useLocalSearchParams();
  let draft: any = null;
  try {
    draft = JSON.parse(decodeURIComponent(encoded as string));
  } catch {
    draft = null;
  }

  const addTransaction = useStore((s) => s.addTransaction);
  const decrementBalance = useStore((s) => s.decrementBalance);
  const wallet = useStore((s) => s.wallet);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const confirmPayment = async () => {
    if (!draft) return;
    setLoading(true);
    try {
      await mockApi.postPayment(draft);
      // Update store
      addTransaction({
        id: Date.now().toString(),
        merchantName: draft.merchantName,
        createdAt: new Date().toISOString(),
        amount: -draft.amount,
        cashback: draft.cashback,
      });
      decrementBalance(draft.amount);

      const newBalance = wallet ? wallet.balance - draft.amount : 0;
      router.replace({
        pathname: "/receipt",
        params: {
          amount: draft.amount.toString(),
          cashback: draft.cashback.toString(),
          balance: newBalance.toString(),
          merchantName: draft.merchantName,
        },
      });
    } catch (e) {
      setError("Something went wrong. Please try again.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (!draft) {
    return (
      <View style={styles.center}>
        <Text>Invalid payment data.</Text>
      </View>
    );
  }

  const logoSource = require("@/assets/images/react-logo.png");

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.snackbar} accessibilityLiveRegion="polite">
          <Text style={styles.snackbarText}>{error}</Text>
        </View>
      )}
      <View style={styles.topSection}>
        <Image source={logoSource} style={styles.logo} />
        <Text style={styles.merchantName}>{draft.merchantName}</Text>
        <Text style={styles.amount}>${draft.amount.toFixed(2)}</Text>
        <View style={styles.cashbackRow}>
          <Ionicons
            name="checkmark-circle"
            size={18}
            color="#29D391"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.cashbackText}>
            You’ll earn ${draft.cashback.toFixed(2)} cashback
          </Text>
        </View>
      </View>

      <View style={styles.middleCard}>
        <Text style={styles.cardLine}>
          {wallet?.bankName} •••• {wallet?.bankLast4}
        </Text>
        <Text style={styles.cardLine}>Same-Day ACH • by 5 PM CT</Text>
        <Pressable
          onPress={() => Linking.openURL("https://example.com/how-it-works")}
        >
          <Text style={[styles.cardLine, styles.link]}>How it works</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Confirm Payment"
          onPress={confirmPayment}
          loading={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  snackbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FF4E64",
    paddingVertical: 12,
    alignItems: "center",
    zIndex: 10,
  },
  snackbarText: {
    color: "#fff",
    fontWeight: "600",
  },
  topSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  merchantName: {
    fontSize: 20,
    fontWeight: "700",
  },
  amount: {
    fontSize: 36,
    fontWeight: "700",
    marginVertical: 8,
  },
  cashbackRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cashbackText: {
    color: "#29D391",
  },
  middleCard: {
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  cardLine: {
    marginBottom: 8,
  },
  link: {
    color: "#0444FF",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 24,
  },
});
