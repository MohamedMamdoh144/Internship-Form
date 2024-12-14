import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Internship Form",
  description: "Choose Round Order",
};
export const viewport = {
  width: 1024
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("bg-indigo-300",`${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        {children}
      </body>
    </html>
  );
}
