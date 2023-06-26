import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components";
import { auth } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-Bazar",
  description: "E-commerce app built with Next.js",
};

export default function RootLayout({ children }) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-bodybg">
          <Navbar userId={userId} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
