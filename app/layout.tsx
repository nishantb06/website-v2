import type { Metadata } from "next";
import "./globals.css";
import { DockDemo } from "@/components/dock-demo";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Nishant Bhansali",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DockDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
