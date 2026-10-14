import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products, getProductBySlug, storeConfig } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Produk Tidak Ditemukan" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products: other colors of Kemeja Sanghai
  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <main className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs md:text-sm text-brand-muted mb-6 md:mb-8"
        >
          <Link href="/" className="hover:text-brand-forest transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/katalog" className="hover:text-brand-forest transition-colors">
            Katalog
          </Link>
          <span>/</span>
          <Link
            href="/katalog?category=kemeja"
            className="hover:text-brand-forest transition-colors"
          >
            {product.categoryLabel || "Kemeja"}
          </Link>
          <span>/</span>
          <span className="text-brand-forest font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 bg-brand-white border border-brand-warm/50 rounded p-6 md:p-10 shadow-xs">
          {/* Image Container with Contain Fit & Ivory Background */}
          <div className="aspect-[3/4] w-full bg-brand-cream rounded relative overflow-hidden flex items-center justify-center p-4 border border-brand-warm/30">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.imageAlt || product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2"
                quality={90}
              />
            ) : (
              <div className="text-brand-muted text-sm">Foto Produk</div>
            )}
          </div>

          {/* Product Detail Info */}
          <div className="flex flex-col justify-start">
            {/* Category & Badge */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-brand-brown text-xs uppercase tracking-widest font-sans font-medium">
                {product.categoryLabel || "Kemeja"}
              </span>
              <span className="text-xs bg-brand-stone/60 text-brand-forest px-2.5 py-0.5 rounded">
                Warna: {product.color}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-forest leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-2xl sm:text-3xl font-serif text-brand-ink font-semibold mb-6 pb-6 border-b border-brand-warm/40">
              {product.priceFormatted}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-forest mb-2">
                Deskripsi Produk
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Highlights / Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-forest mb-3">
                  Detail &amp; Spesifikasi
                </h2>
                <ul className="space-y-2 text-sm text-brand-ink">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-olive shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Button */}
            <div className="mt-auto pt-6 border-t border-brand-warm/40">
              <WhatsAppButton
                size="lg"
                text={`Halo Ploso Store, saya ingin memesan ${product.name} (${product.priceFormatted})`}
                className="w-full text-center justify-center py-3.5"
              >
                Pesan via WhatsApp
              </WhatsAppButton>
              <p className="text-center text-xs text-brand-muted mt-3">
                Transaksi aman dan konsultasi langsung dengan admin resmi Ploso Store
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="border-b border-brand-warm/40 pb-4 mb-8">
              <p className="text-brand-brown text-xs uppercase tracking-[0.2em] font-sans mb-1">
                Pilihan Warna Lain
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-forest">
                Koleksi Kemeja Sanghai Ploso
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
