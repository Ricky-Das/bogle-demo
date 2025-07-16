"use client";

import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CreditCard,
  DollarSign,
  Download,
  Landmark,
  Receipt,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 rounded-full hover:bg-gray-200">
            <Download className="w-6 h-6" />
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800">
            New Transaction
          </button>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Total Revenue
              </h3>
              <DollarSign className="w-6 h-6 text-gray-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$45,231.89</p>
            <p className="text-sm text-gray-500">+20.1% from last month</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Transactions
              </h3>
              <Receipt className="w-6 h-6 text-gray-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">+2350</p>
            <p className="text-sm text-gray-500">+180.1% from last month</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                ACH Payments
              </h3>
              <Landmark className="w-6 h-6 text-gray-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">+12,234</p>
            <p className="text-sm text-gray-500">+19% from last month</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Card Payments
              </h3>
              <CreditCard className="w-6 h-6 text-gray-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">+573</p>
            <p className="text-sm text-gray-500">+2% from last month</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Transactions
              </h3>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-sm text-left text-gray-500">
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm text-gray-900 border-b">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-medium">Olivia Martin</p>
                        <p className="text-xs text-gray-500">
                          olivia.martin@email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">$250.00</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-3">2023-01-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
