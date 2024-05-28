import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";

const NotoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 幼兒教育師資培育認證系統",
    default: "首頁 | 幼兒教育師資培育認證系統",
  },
  description: "",
  icons: "/logo/Logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${NotoSansTC.className} bg-bg`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
