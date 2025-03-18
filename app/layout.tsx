import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin DashBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`ntialiased`}>
        <Navbar />

        <div className="flex">
          <div className="hidden md:block h-screen w-64 bg-gray-100 dark:bg-slate-800 p-5">
            <Sidebar />
          </div>
          <div className="w-full p-5 md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
