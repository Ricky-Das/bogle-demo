import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bogle – Pay-by-Bank Payments",
    template: "%s | Bogle",
  },
  description:
    "Bogle is a pay-by-bank Stripe alternative that helps small businesses slash card processing fees with one-click ACH checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
