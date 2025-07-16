"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../../components/Reveal";

const ranges = ["24h", "7d", "30d"] as const;

type Range = (typeof ranges)[number];

const stats = {
  volume: "$152,430.88",
  savings: "$4,312.76",
  transactions: "1,482",
  settlement: "Instant",
};

const series: Record<Range, number[]> = {
  "24h": [
    5, 6, 4, 7, 6, 9, 11, 10, 13, 12, 15, 14, 16, 18, 17, 20, 22, 21, 24, 23,
    25, 26, 28, 27,
  ],
  "7d": [42, 55, 61, 70, 68, 79, 85],
  "30d": [
    32, 38, 35, 41, 39, 44, 48, 52, 51, 55, 60, 62, 64, 69, 71, 76, 78, 82, 85,
    90, 95, 97, 102, 106, 110, 113, 118, 120, 124, 130,
  ],
};

const transactions = [
  { id: "TX-9271", customer: "Bloom Coffee", amount: 129.99, time: "10:21" },
  { id: "TX-9270", customer: "CraftyGoods", amount: 78.45, time: "09:58" },
  { id: "TX-9269", customer: "FreshFarm", amount: 254.1, time: "09:12" },
  { id: "TX-9268", customer: "Urban Boutique", amount: 42.0, time: "08:55" },
  { id: "TX-9267", customer: "Booksy", amount: 18.5, time: "08:47" },
  { id: "TX-9266", customer: "Gardenia", amount: 312.0, time: "08:15" },
  { id: "TX-9265", customer: "SunnySide Deli", amount: 63.75, time: "07:59" },
  { id: "TX-9264", customer: "LuxeBeauty", amount: 147.0, time: "07:42" },
  { id: "TX-9263", customer: "Pet Paradise", amount: 33.2, time: "07:28" },
  { id: "TX-9262", customer: "GearHub", amount: 512.9, time: "07:05" },
  { id: "TX-9261", customer: "GreenLeaf", amount: 94.6, time: "06:48" },
  { id: "TX-9260", customer: "TasteBuds", amount: 210.0, time: "06:36" },
  { id: "TX-9259", customer: "Urban Boutique", amount: 87.3, time: "06:22" },
  { id: "TX-9258", customer: "CraftyGoods", amount: 55.55, time: "06:09" },
  { id: "TX-9257", customer: "Bloom Coffee", amount: 143.29, time: "05:53" },
  { id: "TX-9256", customer: "FreshFarm", amount: 298.4, time: "05:37" },
  { id: "TX-9255", customer: "BikeTown", amount: 410.0, time: "05:20" },
  { id: "TX-9254", customer: "HomeCraft", amount: 76.8, time: "05:02" },
  { id: "TX-9253", customer: "SweetTreats", amount: 22.15, time: "04:51" },
  { id: "TX-9252", customer: "GearHub", amount: 68.0, time: "04:35" },
  { id: "TX-9251", customer: "Bloom Coffee", amount: 129.99, time: "04:21" },
  { id: "TX-9250", customer: "CraftyGoods", amount: 78.45, time: "04:03" },
  { id: "TX-9249", customer: "FreshFarm", amount: 254.1, time: "03:48" },
  { id: "TX-9248", customer: "Urban Boutique", amount: 42.0, time: "03:32" },
  { id: "TX-9247", customer: "Booksy", amount: 18.5, time: "03:15" },
  { id: "TX-9246", customer: "Gardenia", amount: 312.0, time: "03:02" },
];

export default function DashboardDemo() {
  const [range, setRange] = useState<Range>("7d");
  const data = series[range];
  const max = Math.max(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (v / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="min-h-screen flex flex-col p-12 sm:p-16 md:p-24 lg:p-32 bg-white dark:bg-black text-black dark:text-white">
      <Link href="/" className="mb-8 opacity-70 hover:opacity-100 text-sm">
        ← Back
      </Link>

      <Reveal animationClass="animate-fade-in-up">
        <p className="text-2xl md:text-4xl font-semibold mb-6">
          Welcome, Carson
        </p>
      </Reveal>

      <Reveal animationClass="animate-fade-in-up" delay="0.02s">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Dashboard
        </h1>
      </Reveal>
      <Reveal
        animationClass="animate-fade-in-up"
        delay="0.07s"
        className="mb-10 max-w-xl"
      >
        <p className="text-black/70 dark:text-white/80">
          Real-time snapshot of your ACH payment performance.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Reveal
          animationClass="animate-fade-in-up"
          className="p-6 rounded-3xl bg-white/80 dark:bg-black/40 backdrop-blur border border-black/5 dark:border-white/10 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Volume Trend</h2>
            <div className="flex gap-2">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    range === r
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 dark:bg-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="relative h-72 w-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />
            </svg>
          </div>
        </Reveal>
        <Reveal
          animationClass="animate-fade-in-up"
          delay="0.05s"
          className="p-6 rounded-3xl bg-white/80 dark:bg-black/40 backdrop-blur border border-black/5 dark:border-white/10 flex flex-col"
        >
          <h2 className="text-sm uppercase tracking-wide opacity-70 mb-4">
            Statistics
          </h2>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <span className="opacity-70 text-sm">Total Volume</span>
              <span className="font-semibold">{stats.volume}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="opacity-70 text-sm">Fees Saved</span>
              <span className="font-semibold">{stats.savings}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="opacity-70 text-sm">Transactions</span>
              <span className="font-semibold">{stats.transactions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="opacity-70 text-sm">Avg Settlement</span>
              <span className="font-semibold">{stats.settlement}</span>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal
        animationClass="animate-fade-in-up"
        delay="0.05s"
        className="p-6 rounded-3xl bg-white/80 dark:bg-black/40 backdrop-blur border border-black/5 dark:border-white/10 flex flex-col"
      >
        <h2 className="text-lg font-semibold mb-6">Recent Transactions</h2>
        <ul className="divide-y divide-black/5 dark:divide-white/10">
          {transactions.map((t) => (
            <li key={t.id} className="py-3 flex items-center justify-between">
              <div>
                <span className="font-medium mr-2">{t.customer}</span>
                <span className="text-xs opacity-60">{t.id}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm opacity-70">{t.time}</span>
                <span className="font-semibold">${t.amount.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
