import CatalogFilter from "./CatalogFilter";
import { products, categories, storeConfig } from "@/data/products";

export const metadata = {
  title: "Katalog Produk",
  description:
    "Katalog resmi produk Kemeja Sanghai Ploso dan busana modern Ploso Store — Pondok Pesantren Al Falah Ploso.",
};

export default function KatalogPage() {
  return (
    <main className="min-h-screen">
      {/* Catalog Title Section — Clean & Elegant Ploso Theme */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 border-b border-brand-warm/40 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <p className="text-brand-brown text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-2">
            {storeConfig.name}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest uppercase tracking-wider">
            ALL PRODUCTS
          </h1>
          <p className="text-brand-muted text-xs md:text-sm max-w-xl mx-auto mt-2">
            Koleksi Kemeja Sanghai Ploso dengan kerah sanghai elegan dan desain minimalis
          </p>
        </div>
      </section>

      {/* Catalog Filter & Grid */}
      <CatalogFilter products={products} categories={categories} />
    </main>
  );
}
