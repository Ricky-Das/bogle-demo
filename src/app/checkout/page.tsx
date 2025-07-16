"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";

export default function CheckoutDemo() {
  const [step, setStep] = useState<"amount" | "bank" | "confirm" | "success">(
    "amount"
  );
  const [amount, setAmount] = useState<number>(49.99);
  const [bank, setBank] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-white via-sky-50 to-indigo-50 dark:from-black dark:via-zinc-900 dark:to-zinc-800">
      <Link
        href="/"
        className="absolute top-6 left-6 text-sm opacity-70 hover:opacity-100"
      >
        ← Back
      </Link>

      <div className="w-full max-w-md bg-white/80 dark:bg-black/40 backdrop-blur rounded-3xl border border-black/5 dark:border-white/10 shadow-xl p-8">
        {step === "amount" && (
          <>
            <h2 className="text-xl font-bold text-center mb-6">
              Enter payment amount
            </h2>
            <input
              type="number"
              min={0.01}
              step={0.01}
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 mb-6"
            />
            <button
              onClick={() => setStep("bank")}
              className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Continue <ChevronRight size={18} />
            </button>
          </>
        )}

        {step === "bank" && (
          <>
            <h2 className="text-xl font-bold text-center mb-6">
              Choose your bank
            </h2>
            <ul className="grid gap-3 mb-6">
              {["Chase", "Bank of America", "Wells Fargo", "Citibank"].map(
                (b) => (
                  <li key={b}>
                    <button
                      className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-left hover:bg-black/5 dark:hover:bg-white/20"
                      onClick={() => {
                        setBank(b);
                        setStep("confirm");
                      }}
                    >
                      {b}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={() => setStep("amount")}
              className="text-sm underline hover:no-underline"
            >
              ← Back
            </button>
          </>
        )}

        {step === "confirm" && (
          <>
            <h2 className="text-xl font-bold text-center mb-6">
              Confirm payment
            </h2>
            <p className="mb-6">
              You are paying <strong>${amount.toFixed(2)}</strong> from{" "}
              <strong>{bank}</strong>.
            </p>
            <button
              onClick={() => setStep("success")}
              className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Pay now <ChevronRight size={18} />
            </button>
            <button
              onClick={() => setStep("bank")}
              className="mt-4 text-sm underline hover:no-underline"
            >
              ← Back
            </button>
          </>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center text-center gap-4">
            <CheckCircle size={48} className="text-emerald-500" />
            <h2 className="text-xl font-bold">Payment successful!</h2>
            <p className="text-sm text-black/70 dark:text-white/80">
              Funds have been transferred instantly via ACH.
            </p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Return to homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
