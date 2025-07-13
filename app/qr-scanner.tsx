// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const SCAN_BOX_SIZE = 240;

export default function QRScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraAvailable, setCameraAvailable] = useState<boolean | undefined>(
    undefined
  );
  const [torchOn, setTorchOn] = useState(false);
  const [scanned, setScanned] = useState(false);
  const paymentDraft = useRef<any>(null);

  // Check if camera hardware is available (web / simulators may not have)
  useEffect(() => {
    (async () => {
      try {
        const available = await CameraView.isAvailableAsync();
        setCameraAvailable(available);
      } catch {
        setCameraAvailable(false);
      }
    })();
  }, []);

  // Request camera permission on mount
  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const handleBarcodeScanned = (result) => {
    if (scanned) return;
    setScanned(true);
    try {
      paymentDraft.current = JSON.parse(result.data);
    } catch (e) {
      // Ignore parse errors – in PoC we expect valid JSON payloads only
      paymentDraft.current = null;
    }

    // Light haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Delay a tick so overlay freeze is visible then navigate
    setTimeout(() => {
      router.push({
        pathname: "/payment-confirm",
        params: {
          draft: encodeURIComponent(JSON.stringify(paymentDraft.current)),
        },
      });
    }, 100);
  };

  const simulateScan = () => {
    if (scanned) return;
    const fake = {
      merchantId: "coffeeco",
      merchantName: "CoffeeCo",
      amount: 6.75,
      cashback: 0.13,
    };
    paymentDraft.current = fake;
    setScanned(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: "/payment-confirm",
      params: { draft: encodeURIComponent(JSON.stringify(fake)) },
    });
  };

  if (!permission || cameraAvailable === undefined) {
    return (
      <View style={styles.center}>
        <Text>Requesting camera permission…</Text>
      </View>
    );
  }

  // If camera hardware exists but permission denied, prompt user
  if (cameraAvailable && permission.status !== "granted") {
    return (
      <View style={styles.center}>
        <Text>Camera permission not granted.</Text>
        <Pressable
          onPress={() => requestPermission()}
          style={styles.permissionBtn}
        >
          <Text style={styles.permissionBtnText}>Allow Camera</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cameraAvailable && permission.status === "granted" && (
        <CameraView
          style={StyleSheet.absoluteFill}
          facing="back"
          enableTorch={torchOn}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] as any }}
          onBarcodeScanned={handleBarcodeScanned}
        />
      )}

      {/* Dark mask overlays */}
      {cameraAvailable && permission.status === "granted" && <MaskOverlay />}

      {/* Flash toggle */}
      {cameraAvailable && permission.status === "granted" && (
        <Pressable
          onPress={() => setTorchOn((prev) => !prev)}
          style={styles.flashBtn}
          accessibilityRole="button"
          accessibilityLabel="Toggle flash"
        >
          <Ionicons
            name={torchOn ? "flashlight" : "flashlight-outline"}
            size={24}
            color="#fff"
          />
        </Pressable>
      )}

      {/* Bottom sheet for simulate scan when camera unavailable */}
      {!cameraAvailable && (
        <View style={styles.bottomSheet} accessibilityRole="menu">
          <Text style={styles.bottomSheetTitle}>No camera detected</Text>
          <Pressable
            onPress={simulateScan}
            style={styles.bottomSimBtn}
            accessibilityRole="button"
          >
            <Text style={styles.bottomSimBtnText}>Simulate Scan</Text>
          </Pressable>
        </View>
      )}

      {/* Freeze overlay when scanned */}
      {scanned && <View style={styles.freezeLayer} />}
    </View>
  );
}

function MaskOverlay() {
  const { width, height } = Dimensions.get("window");
  const sideWidth = (width - SCAN_BOX_SIZE) / 2;
  const topHeight = (height - SCAN_BOX_SIZE) / 2;

  return (
    <>
      {/* Top */}
      <View style={[styles.overlay, { top: 0, height: topHeight }]} />
      {/* Bottom */}
      <View style={[styles.overlay, { bottom: 0, height: topHeight }]} />
      {/* Left */}
      <View
        style={[
          styles.overlay,
          { top: topHeight, height: SCAN_BOX_SIZE, left: 0, width: sideWidth },
        ]}
      />
      {/* Right */}
      <View
        style={[
          styles.overlay,
          { top: topHeight, height: SCAN_BOX_SIZE, right: 0, width: sideWidth },
        ]}
      />
      {/* Border around scan box */}
      <View
        style={[
          styles.scanBox,
          {
            top: topHeight,
            left: sideWidth,
            width: SCAN_BOX_SIZE,
            height: SCAN_BOX_SIZE,
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  permissionBtn: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#0444FF",
  },
  permissionBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  scanBox: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 6,
  },
  flashBtn: {
    position: "absolute",
    top: 50,
    right: 24,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 8,
  },
  simBtn: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  simBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
  freezeLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10,
    alignItems: "center",
  },
  bottomSheetTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  bottomSimBtn: {
    backgroundColor: "#0444FF",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  bottomSimBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
