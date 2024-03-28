import type { Metadata } from "next";
import sawarabi_gothic from "@/app/ui/fonts";
import "./globals.css";
// muiのnextjsへの導入
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "寿の店",
  description:
    "名古屋市熱田区にある「寿の店」の公式HPです。寿の店は、先代から受け継ぐ鉄板プレス機を使ってその場で焼いた、ぺらっとパリッとしたせんべい、ピリ辛のイカ焼きを提供しています。",
  openGraph: {
    title: "寿の店 公式HP",
    description: "名古屋市熱田区にある「寿の店」の公式HPです。",
    url: "https://taihoukotobuki.vercel.app/",
    siteName: "寿の店 公式HP",
    images: [
      {
        url: "https://taihoukotobuki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDSC00133.b6570d4c.jpg&w=1080&q=75", // Must be an absolute URL
        width: 500,
        height: 500,
      },
      {
        url: "https://taihoukotobuki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDSC00133.b6570d4c.jpg&w=1080&q=75", // Must be an absolute URL
        width: 1000,
        height: 1000,
        alt: "寿の店の店頭写真",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "寿の店 公式HP",
    description: "名古屋市熱田区にある「寿の店」の公式HPです。",
    creator: "@ojira0808",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={sawarabi_gothic.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
