// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useStore } from "@/store/useStore";

export default function ConsumerHome() {
  const wallet = useStore((s) => s.wallet);
  const transactions = useStore((s) => s.transactions);
  const setTransactions = useStore((s) => s.setTransactions);

  useEffect(() => {
    // Lazily load transactions after component mounts (mocked)
    (async () => {
      const { mockApi } = await import("@/api/mockApi");
      const data = await mockApi.getTransactions();
      setTransactions(data);
    })();
  }, [setTransactions]);

  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>
          {wallet ? `$${wallet.balance.toFixed(2)}` : "--"}
        </Text>
        {wallet && (
          <Text style={styles.bankText}>
            {wallet.bankName} •••• {wallet.bankLast4}
          </Text>
        )}
      </View>
      <View style={styles.listPlaceholder}>
        <Text style={{ color: "#999" }}>
          Transactions list coming soon… ({transactions.length})
        </Text>
      </View>

      {/* Floating Pay via QR FAB */}
      <Pressable
        onPress={() => router.push("/qr-scanner")}
        style={[styles.fab, { bottom: tabBarHeight + insets.bottom + 16 }]} // keep above tab bar
        accessibilityRole="button"
        accessibilityLabel="Pay via QR"
      >
        <Ionicons name="qr-code" size={28} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  card: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  balanceLabel: {
    color: "#777",
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: "700",
    marginVertical: 4,
  },
  bankText: {
    color: "#333",
  },
  listPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
    backgroundColor: "#0444FF",
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
});
