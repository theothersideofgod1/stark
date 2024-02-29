import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Container, ThemeProvider } from '@mui/material'
import SearchBar from "@/components/SearchBar";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Stark Interview Demo",
  description: "Stark Interview Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <SearchBar />
            <Container maxWidth="lg" className="p-4">
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
