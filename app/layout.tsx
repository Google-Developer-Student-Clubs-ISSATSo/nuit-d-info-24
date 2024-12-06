import { cn } from "@/lib/utils";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import { AnatomyChatbot } from "@/components/AnatomyChatBot";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body className={cn("bg-[#1F86AA] text-white", poppins.className)}>
        <Nav />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <AnatomyChatbot />
      </body>
    </html>
  );
}
