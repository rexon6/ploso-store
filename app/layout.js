import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { storeConfig } from "@/data/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: `${storeConfig.name} — ${storeConfig.tagline}`,
    template: `%s — ${storeConfig.name}`,
  },
  description: storeConfig.description,
  keywords: [
    "Ploso Store",
    "Sarung Batik",
    "Sarung Songket",
    "Busana Muslim",
    "Al Falah Ploso",
    "Fashion Pesantren",
    "Kediri",
  ],
  authors: [{ name: storeConfig.name }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`scroll-smooth ${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-brand-cream text-brand-ink antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
