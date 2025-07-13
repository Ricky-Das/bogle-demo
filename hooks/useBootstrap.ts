// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { mockApi } from "@/api/mockApi";
import { useStore } from "@/store/useStore";

export function useBootstrap() {
  const setUser = useStore((s) => s.setUser);
  const setWallet = useStore((s) => s.setWallet);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await mockApi.getUser();
        if (!mounted) return;
        // Persist
        setUser({ id: data.id, name: data.name });
        setWallet(data.wallet);
      } finally {
        if (mounted) setBooting(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [setUser, setWallet]);

  return booting;
}
