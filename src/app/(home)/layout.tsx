import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../../../components/Navbar";


export const metadata: Metadata = {
  title: "CRNCL",
  description: "This is a time capsule app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
