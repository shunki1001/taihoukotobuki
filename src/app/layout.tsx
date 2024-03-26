import type { Metadata } from "next";
import sawarabi_gothic from "@/app/ui/fonts";
import "./globals.css";
// muiのnextjsへの導入
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "大宝寿",
  description: "名古屋市熱田区にある大宝寿のHPです。",
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
