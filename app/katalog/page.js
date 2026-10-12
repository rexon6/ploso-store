import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogFilter from "./CatalogFilter";
import { products, categories, storeConfig } from "@/data/products";

export const metadata = {
  title: "Katalog Koleksi",
  description:
    "Katalog sarung batik & songket eksklusif, kemeja dan busana muslim modern, serta aksesori resmi Ploso Store.",
};

export default function KatalogPage() {
  return (
    <main>
      {/* Catalog Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-brand-warm/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
              Koleksi Terpilih
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-forest leading-tight mb-4">
              Etalase Busana
            </h1>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed">
              Temukan ragam sarung eksklusif, busana muslim kontemporer, dan
              aksesori resmi dengan penekanan pada bahan bermutu tinggi dan
              kenyamanan pemakaian.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Catalog with Filter */}
      <CatalogFilter products={products} categories={categories} />
    </main>
  );
}
