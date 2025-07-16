"use client";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {children}
      </main>
    </div>
  );
}
