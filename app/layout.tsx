import type { Metadata } from "next";
import "./globals.css";
import { DockDemo } from "@/components/dock-demo";

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
        <DockDemo />
        {children}
      </body>
    </html>
  );
}
