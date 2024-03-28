import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/sonner";
import Auth0ProviderWithNavigate from "@/providers/Auth0ProviderWithNavigate";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mern Panda",
  description: "Mern stack food ordering web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <Auth0ProviderWithNavigate>
        <html lang="en" className="scroll-smooth">
          <body className={rubik.className}>
            <Toaster visibleToasts={1} position="top-right" richColors />
            <main className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1">{children}</div>
            </main>
            <Footer />
          </body>
        </html>
      </Auth0ProviderWithNavigate>
    </ReactQueryClientProvider>
  );
}
