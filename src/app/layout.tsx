import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardSidebar from "@/Components/DashboardSidebar";
import DashboardFooter from "@/Components/DashboardFooter";
import DashboardNavbar from "@/Components/DashboardNavbar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBook Dashboard",
  description: "DevBook - Dashboard Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors">
        <div className="flex w-full min-h-screen overflow-x-hidden">
          {/* Dashboard Sidebar */}
          <DashboardSidebar />

          <div className="flex flex-col w-full min-h-screen min-w-0">
            {/* Dashboard Navbar */}
            <DashboardNavbar />

            {/* Dynamic Content (app/page.tsx etc.) */}
            <main className="flex-1 w-full p-4 md:p-6">
              {children}
            </main>

            {/* Dashboard Footer */}
            <Suspense fallback={<div className="h-12 w-full" />}>
              <DashboardFooter />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}