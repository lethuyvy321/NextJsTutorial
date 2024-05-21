import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "./AppProvider";
import { cookies } from "next/headers";

const roboto = Roboto({ subsets: ["vietnamese"], weight: ["100", "300"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AppProvider initialSessionToken = {sessionToken?.value}>
          {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
