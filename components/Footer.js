import Link from "next/link";
import { storeConfig, getWhatsAppUrl } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-brand-cream border-t border-brand-forest/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Kolom 1: Profil Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.2em] text-white block mb-4"
            >
              {storeConfig.name}
            </Link>
            <p className="text-brand-cream/70 text-sm leading-relaxed mb-4">
              {storeConfig.tagline}. Produk fashion muslim modern dari Pondok
              Pesantren Al Falah Ploso.
            </p>
            <p className="text-brand-warm text-xs italic">
              {storeConfig.motto}
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold mb-4 text-brand-warm">
              Navigasi
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Katalog Koleksi
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Kontak &amp; Layanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kategori Produk */}
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold mb-4 text-brand-warm">
              Kategori Produk
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/katalog?category=kemeja"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Kemeja
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog?category=sarung"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Sarung
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog?category=peci"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Peci
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog?category=t-shirt"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  T-Shirt
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog?category=merchandise"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Merchandise
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors"
                >
                  Semua Produk
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Media Sosial */}
          <div>
            <p className="text-sm uppercase tracking-wider font-semibold mb-4 text-brand-warm">
              Kontak
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={getWhatsAppUrl("Halo Ploso Store")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cream/70 text-sm hover:text-white transition-colors block"
                >
                  WhatsApp: {storeConfig.whatsappDisplay}
                </a>
              </li>
              <li className="text-brand-cream/70 text-sm leading-relaxed">
                {storeConfig.address}
              </li>
              <li className="flex gap-4 mt-3 pt-2">
                <a
                  href={storeConfig.socialLinks.youtube}
                  className="text-brand-cream/50 hover:text-white transition-colors p-1"
                  aria-label="YouTube Ploso Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href={storeConfig.socialLinks.instagram}
                  className="text-brand-cream/50 hover:text-white transition-colors p-1"
                  aria-label="Instagram Ploso Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={storeConfig.socialLinks.tiktok}
                  className="text-brand-cream/50 hover:text-white transition-colors p-1"
                  aria-label="TikTok Ploso Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <p className="text-brand-cream/50 text-xs text-center">
            &copy; {currentYear} {storeConfig.name}. Produk fashion muslim modern dari Pondok Pesantren Al Falah Ploso.
          </p>
        </div>
      </div>
    </footer>
  );
}
