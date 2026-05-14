import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BygPilot - Lead Generation",
  description: "Modern landing page for lead generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between p-6 bg-white border-b">
          <div className="text-xl font-bold">BygPilot</div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
