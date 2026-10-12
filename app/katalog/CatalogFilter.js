"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CatalogFilter({ products, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter Tabs Section */}
      <section className="bg-brand-cream border-b border-brand-warm/30 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div
            className="flex flex-wrap gap-2 md:gap-4"
            role="tablist"
            aria-label="Filter Kategori Produk"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-6 py-2.5 text-xs md:text-sm uppercase tracking-wider font-semibold rounded border transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive ${
                    isActive
                      ? "bg-brand-olive text-white border-brand-olive shadow-xs"
                      : "border-brand-warm text-brand-ink bg-transparent hover:border-brand-olive hover:text-brand-olive"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-brand-muted text-base">
                Belum ada produk untuk kategori ini.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Note on Custom / Wholesale Ordering */}
          <div className="mt-16 p-8 border border-brand-warm/60 rounded bg-brand-white text-center shadow-xs">
            <h3 className="font-serif text-2xl text-brand-forest mb-2">
              Ingin Pemesanan Kustom atau Jumlah Banyak?
            </h3>
            <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto mb-6">
              Kami melayani pemesanan seragam santri, bingkisan alumni, dan
              kebutuhan khusus komunitas melalui konsultasi langsung via WhatsApp
              resmi.
            </p>
            <WhatsAppButton
              size="lg"
              text="Halo Ploso Store, saya ingin konsultasi pemesanan khusus"
            >
              Hubungi Konsultan Kami
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
