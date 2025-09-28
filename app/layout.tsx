import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

// app/layout.tsx
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700"], // Regular and Bold
  subsets: ["latin"],
  variable: "--font-merriweather", // ✅ dash use karo, double "--" avoid karo
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} antialiased`} // font variable yaha attach
      suppressHydrationWarning
    >
    <body className="font-merriweather bg-background text-foreground">

        {/* Merriweather ko global font bana diya */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
