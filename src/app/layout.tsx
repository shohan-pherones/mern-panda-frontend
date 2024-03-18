import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import Auth0ProviderWithNavigate from "@/providers/Auth0ProviderWithNavigate";

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
