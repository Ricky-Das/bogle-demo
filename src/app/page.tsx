"use client";
import { ArrowRight, Banknote, Landmark, Receipt } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ditch Credit Card Fees with Bogle
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    An all-in-one payment platform that lets small businesses
                    ditch credit-card fees by shifting transactions to ACH.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Better Way to Get Paid
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bogle offers a simple, secure, and cost-effective way to
                  accept payments directly from your customers' bank accounts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <Banknote className="h-8 w-8 text-gray-900" />
                <h3 className="text-xl font-bold">Low Transaction Fees</h3>
                <p className="text-sm text-gray-500">
                  Save up to 80% on transaction fees compared to credit cards.
                </p>
              </div>
              <div className="grid gap-1">
                <Landmark className="h-8 w-8 text-gray-900" />
                <h3 className="text-xl font-bold">Direct Bank Payments</h3>
                <p className="text-sm text-gray-500">
                  Securely accept payments directly from your customers' bank
                  accounts.
                </p>
              </div>
              <div className="grid gap-1">
                <Receipt className="h-8 w-8 text-gray-900" />
                <h3 className="text-xl font-bold">Simple Integration</h3>
                <p className="text-sm text-gray-500">
                  Easily integrate Bogle into your existing website or app with
                  just a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How Bogle Works
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple three-step process to get you paid faster and cheaper.
              </p>
            </div>
            <div className="relative mx-auto max-w-5xl w-full">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-gray-900 text-white w-12 h-12 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">
                    Customer Links Bank Account
                  </h3>
                  <p className="text-sm text-gray-500">
                    Customers securely connect their bank account using our
                    one-click widget.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-gray-900 text-white w-12 h-12 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">
                    Payment is Authorized
                  </h3>
                  <p className="text-sm text-gray-500">
                    The payment is securely authorized and processed via the ACH
                    network.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-gray-900 text-white w-12 h-12 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">
                    Funds are Transferred
                  </h3>
                  <p className="text-sm text-gray-500">
                    Funds are transferred directly to your bank account, minus a
                    small, transparent fee.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/3 w-1/3 h-full">
                  <ArrowRight className="absolute -left-3 -top-3 h-6 w-6 text-gray-900" />
                  <ArrowRight className="absolute -right-3 -top-3 h-6 w-6 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">© 2024 Bogle. All rights reserved.</p>
      </footer>
    </div>
  );
}
