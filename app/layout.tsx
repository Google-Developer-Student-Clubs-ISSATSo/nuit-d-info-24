import Nav from "@/components/Nav";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Ocean & Human Parallels",
  description: "Explore the connections between the ocean and the human body.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#1A374D] to-[#406882] text-white">
          <Nav />
        <AnimatePresence mode="wait">

          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
