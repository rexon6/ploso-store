import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCarousel3D from "@/components/homepage/ProductCarousel3D";
import { storeConfig } from "@/data/products";

export const metadata = {
  title: `${storeConfig.name} — ${storeConfig.tagline}`,
  description: storeConfig.description,
};

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 md:py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        {/* Desktop: 2-Column Hero (Left: Text & Buttons, Right: 3D Single Product Showcase) */}
        {/* Mobile: Stacked in order (Text -> 3D Showcase -> Buttons) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Headline, Description, and Desktop CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-brand-brown text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-medium mb-3">
              {storeConfig.name}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-forest leading-[1.12] mb-4 max-w-xl">
              Modern Dalam Balutan Tradisi
            </h1>
            <p className="text-brand-muted font-sans text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mb-6 lg:mb-8">
              Koleksi fashion muslim modern dengan sentuhan tradisi dari Pondok
              Pesantren Al Falah Ploso.
            </p>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex flex-row items-center gap-4">
              <Link
                href="/katalog"
                className="text-center bg-brand-olive text-white rounded px-8 py-3.5 uppercase tracking-wider text-xs md:text-sm font-sans font-semibold hover:bg-brand-forest transition-colors shadow-sm"
              >
                Jelajahi Katalog
              </Link>
              <WhatsAppButton
                variant="outline"
                text="Halo Ploso Store, saya ingin bertanya tentang koleksi kemeja sanghai"
                className="text-center px-8 py-3.5 text-xs md:text-sm border border-brand-olive !bg-transparent !text-brand-olive hover:!bg-brand-olive hover:!text-white transition-colors"
              >
                Hubungi Kami
              </WhatsAppButton>
            </div>
          </div>

          {/* Right Column: Clean Single Product Image 3D Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <ProductCarousel3D />

            {/* Mobile CTA Buttons */}
            <div className="flex lg:hidden flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-md mx-auto mt-6">
              <Link
                href="/katalog"
                className="w-full sm:w-auto text-center bg-brand-olive text-white rounded px-7 py-3 uppercase tracking-wider text-xs font-sans font-semibold hover:bg-brand-forest transition-colors shadow-sm"
              >
                Jelajahi Katalog
              </Link>
              <WhatsAppButton
                variant="outline"
                text="Halo Ploso Store, saya ingin bertanya tentang koleksi kemeja sanghai"
                className="w-full sm:w-auto text-center px-7 py-3 text-xs border border-brand-olive !bg-transparent !text-brand-olive hover:!bg-brand-olive hover:!text-white transition-colors"
              >
                Hubungi Kami
              </WhatsAppButton>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
