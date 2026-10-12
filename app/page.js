import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products, storeConfig } from "@/data/products";

export const metadata = {
  title: `${storeConfig.name} — ${storeConfig.tagline}`,
  description: storeConfig.description,
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20">
        <div
          className="w-full aspect-[4/5] md:aspect-[16/9] flex items-center justify-center relative overflow-hidden"
        >
          {/* Hero Background Image */}
          <Image
            src="/images/products/hero-banner.jpg"
            alt="Koleksi Ploso Store — sarung songket, batik tulis, dan busana muslim premium"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />

          <div className="text-center px-6 max-w-4xl mx-auto relative z-[2]">
            <p className="text-brand-warm text-sm uppercase tracking-[0.3em] font-sans mb-4 md:mb-6">
              {storeConfig.name}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Modern Dalam
              <br />
              Balutan Tradisi
            </h1>
            <p className="text-brand-stone/90 font-sans text-base md:text-lg mt-6 max-w-xl mx-auto">
              Koleksi fashion muslim modern dengan sentuhan tradisi dari Pondok
              Pesantren Al Falah Ploso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
              <Link
                href="/katalog"
                className="bg-brand-olive text-white rounded px-8 py-3 uppercase tracking-wider text-sm font-sans font-semibold hover:bg-brand-forest transition-colors shadow-sm"
              >
                Lihat Koleksi
              </Link>
              <WhatsAppButton
                variant="outline"
                text="Halo Ploso Store, saya ingin bertanya"
                className="px-8 py-3 text-sm"
              >
                Hubungi Kami
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="batik-divider-thick w-16 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-forest leading-snug mb-6">
              Dari Pesantren,
              <br />
              Untuk Dunia
            </h2>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-4">
              Ploso Store lahir dari semangat kemandirian Pondok Pesantren Al
              Falah Ploso. Berawal dari lini merchandise Harlah 100 Tahun pada
              tahun 2024, kini kami hadir sebagai brand fashion muslim modern yang
              menggabungkan kekayaan tradisi dengan desain kontemporer.
            </p>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed">
              Sebagai bagian dari BUMP (Badan Usaha Milik Pesantren), setiap
              pembelian Anda turut berkontribusi pada kemandirian ekonomi pesantren.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="batik-divider" />
      </div>

      {/* Product Categories — Asymmetric Grid */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
              Koleksi Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-forest">
              Tiga Pilar Gaya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Sarung — Large (7 cols) */}
            <Link
              href="/katalog?cat=sarung"
              className="md:col-span-7 group block rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="aspect-[3/4] rounded relative overflow-hidden flex flex-col justify-end"
              >
                <Image
                  src="/images/products/category-sarung.jpg"
                  alt="Koleksi Sarung Batik & Songket Ploso Store"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  quality={85}
                />
                <div className="p-6 md:p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent relative z-10">
                  <p className="text-brand-cream/80 text-xs uppercase tracking-[0.2em] font-sans mb-2">
                    Koleksi Unggulan
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    Sarung Batik &amp; Songket
                  </h3>
                  <p className="text-brand-cream/90 text-sm font-sans max-w-lg">
                    Sarung eksklusif dengan motif batik dan songket pilihan, ditenun
                    dari bahan berkualitas tinggi.
                  </p>
                </div>
              </div>
            </Link>

            {/* Right column: 2 stacked items (5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              {/* Busana Muslim */}
              <Link
                href="/katalog?cat=busana"
                className="group block rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-1"
              >
                <div
                  className="aspect-[4/3] rounded relative overflow-hidden flex flex-col justify-end h-full"
                >
                  <Image
                    src="/images/products/category-busana.jpg"
                    alt="Koleksi Busana Muslim Modern Ploso Store"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    quality={85}
                  />
                  <div className="p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent relative z-10">
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                      Busana Muslim Modern
                    </h3>
                    <p className="text-brand-cream/90 text-sm font-sans">
                      Kemeja dan busana muslim dengan desain modern yang tetap sopan
                      dan elegan.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Aksesori — gradient fallback (image pending) */}
              <Link
                href="/katalog?cat=aksesori"
                className="group block rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-1"
              >
                <div
                  className="aspect-[4/3] rounded relative overflow-hidden flex flex-col justify-end h-full"
                  style={{
                    background:
                      "linear-gradient(145deg, #E8E2D9 0%, #D4C5B0 50%, #B8A890 100%)",
                  }}
                >
                  <div className="p-6 bg-gradient-to-t from-white/90 via-white/40 to-transparent">
                    <h3 className="font-serif text-xl md:text-2xl text-brand-forest mb-1">
                      Aksesori &amp; Merchandise
                    </h3>
                    <p className="text-brand-ink/80 text-sm font-sans">
                      Peci, tasbih, sajadah, dan merchandise eksklusif Pondok
                      Pesantren Al Falah Ploso.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="batik-divider" />
      </div>

      {/* Keunggulan Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-stone/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
              Mengapa Ploso Store
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-forest">
              Keunggulan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14 max-w-4xl">
            <div>
              <h3 className="font-serif text-xl text-brand-forest mb-3">
                Kualitas Bahan Terjamin
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Setiap produk dibuat dari bahan pilihan yang nyaman, tahan lama, dan
                sesuai dengan standar kualitas tinggi. Kami memastikan setiap
                detail diproduksi dengan teliti.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-brand-forest mb-3">
                Desain Khas Pesantren
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Perpaduan motif tradisional dengan sentuhan modern menciptakan
                identitas visual yang unik dan bermakna, mencerminkan kekayaan budaya
                pesantren.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-brand-forest mb-3">
                Harga Terjangkau
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Kualitas premium tidak harus mahal. Kami menawarkan harga yang adil
                dan terjangkau bagi santri, alumni, maupun masyarakat umum.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-brand-forest mb-3">
                Kontribusi untuk Pesantren
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Setiap pembelian Anda secara langsung mendukung kemandirian ekonomi
                Pondok Pesantren Al Falah Ploso melalui BUMP (Badan Usaha Milik
                Pesantren).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asal-Usul Snippet */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <div
                className="aspect-[4/5] rounded shadow-sm"
                style={{
                  background:
                    "linear-gradient(170deg, #2D3A22 0%, #4A5D3A 40%, #8B7355 100%)",
                }}
              />
            </div>
            <div className="md:col-span-7 md:pl-8">
              <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
                Cerita Kami
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest leading-snug mb-6">
                Berawal dari Harlah
                <br />
                100 Tahun
              </h2>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-4">
                Pada tahun 2024, Pondok Pesantren Al Falah Ploso merayakan Harlah
                ke-100 dengan meluncurkan lini merchandise eksklusif. Antusiasme
                yang luar biasa dari santri, alumni, dan masyarakat menginspirasi
                lahirnya sebuah brand fashion muslim yang lebih besar.
              </p>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
                Tahun 2025, lini merchandise tersebut bertransformasi menjadi Ploso
                Store — sebuah langkah nyata menuju kemandirian pesantren melalui
                produk fashion berkualitas.
              </p>
              <Link
                href="/tentang"
                className="inline-block border border-brand-olive text-brand-olive rounded px-8 py-3 uppercase tracking-wider text-sm font-sans font-semibold hover:bg-brand-olive hover:text-white transition-colors"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="batik-divider" />
      </div>

      {/* Featured Products */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
            <div>
              <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
                Pilihan Terbaik
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest">
                Produk Unggulan
              </h2>
            </div>
            <Link
              href="/katalog"
              className="text-xs uppercase tracking-wider font-semibold text-brand-olive hover:text-brand-forest transition-colors"
            >
              Lihat Semua Koleksi &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-brand-warm text-sm uppercase tracking-[0.3em] font-sans mb-4">
            {storeConfig.motto}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-cream mb-6">
            Temukan Koleksi Anda
          </h2>
          <p className="text-brand-stone/80 text-base md:text-lg max-w-xl mx-auto mb-8">
            Hubungi kami melalui WhatsApp untuk pemesanan, konsultasi ukuran, atau
            informasi produk lebih lanjut.
          </p>
          <WhatsAppButton
            size="lg"
            text="Halo Ploso Store, saya ingin memesan produk"
          >
            Pesan via WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
