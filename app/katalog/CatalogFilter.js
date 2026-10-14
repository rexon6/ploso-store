"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";

function CatalogFilterContent({ products, categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Category from URL query ?category=...
  const categoryParam = searchParams.get("category");
  const initialCategory = useMemo(() => {
    if (!categoryParam) return "all";
    const found = categories.find(
      (c) => c.id.toLowerCase() === categoryParam.toLowerCase()
    );
    return found ? found.id : "all";
  }, [categoryParam, categories]);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");

  // Keep state synced with URL query param if user clicks back/forward
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (newCat) => {
    setSelectedCategory(newCat);
    if (newCat === "all") {
      router.push("/katalog", { scroll: false });
    } else {
      router.push(`/katalog?category=${newCat}`, { scroll: false });
    }
  };

  // Derive counts and options
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter Category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter Size (saat ini produk kemeja all-size/standar)
    if (selectedSize !== "all") {
      list = list.filter((p) => p.size === selectedSize);
    }

    // Filter Price
    if (selectedPriceRange === "under-100k") {
      list = list.filter((p) => p.price < 100000);
    } else if (selectedPriceRange === "100k") {
      list = list.filter((p) => p.price === 100000);
    } else if (selectedPriceRange === "above-100k") {
      list = list.filter((p) => p.price > 100000);
    }

    // Filter Availability
    if (selectedAvailability === "in-stock") {
      list = list.filter((p) => p.inStock !== false);
    }

    // Sorting
    if (selectedSort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [
    products,
    selectedCategory,
    selectedSize,
    selectedPriceRange,
    selectedAvailability,
    selectedSort,
  ]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedSize("all");
    setSelectedPriceRange("all");
    setSelectedAvailability("all");
    setSelectedSort("featured");
    router.push("/katalog", { scroll: false });
  };

  const hasActiveFilter =
    selectedCategory !== "all" ||
    selectedSize !== "all" ||
    selectedPriceRange !== "all" ||
    selectedAvailability !== "all" ||
    selectedSort !== "featured";

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);
  const activeCategoryLabel = activeCategoryObj ? activeCategoryObj.label : "Semua Produk";

  return (
    <div>
      {/* Filter Controls Bar */}
      <section className="bg-brand-cream/80 border-b border-brand-warm/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="filter-category" className="text-brand-muted font-medium shrink-0">
                Kategori:
              </label>
              <select
                id="filter-category"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-brand-white border border-brand-warm rounded px-3 py-1.5 text-brand-ink text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive cursor-pointer"
              >
                {categories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? products.length
                      : products.filter((p) => p.category.toLowerCase() === cat.id.toLowerCase()).length;
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.label} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Size Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="filter-size" className="text-brand-muted font-medium shrink-0">
                Ukuran:
              </label>
              <select
                id="filter-size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-brand-white border border-brand-warm rounded px-3 py-1.5 text-brand-ink text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive cursor-pointer"
              >
                <option value="all">Semua Ukuran</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="filter-price" className="text-brand-muted font-medium shrink-0">
                Harga:
              </label>
              <select
                id="filter-price"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-brand-white border border-brand-warm rounded px-3 py-1.5 text-brand-ink text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive cursor-pointer"
              >
                <option value="all">Semua Harga</option>
                <option value="100k">Rp 100.000</option>
              </select>
            </div>

            {/* Availability Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="filter-availability" className="text-brand-muted font-medium shrink-0">
                Ketersediaan:
              </label>
              <select
                id="filter-availability"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="bg-brand-white border border-brand-warm rounded px-3 py-1.5 text-brand-ink text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive cursor-pointer"
              >
                <option value="all">Semua</option>
                <option value="in-stock">Tersedia</option>
              </select>
            </div>

            {/* Sort Control */}
            <div className="flex items-center gap-1.5 sm:ml-auto">
              <label htmlFor="filter-sort" className="text-brand-muted font-medium shrink-0">
                Urutkan:
              </label>
              <select
                id="filter-sort"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-brand-white border border-brand-warm rounded px-3 py-1.5 text-brand-ink text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive cursor-pointer font-medium"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Nama (A-Z)</option>
                <option value="name-desc">Nama (Z-A)</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
              </select>
            </div>

            {/* Reset Button */}
            {hasActiveFilter && (
              <button
                onClick={resetFilters}
                className="text-brand-brown hover:text-brand-forest underline text-xs font-sans transition-colors ml-2"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Active Status Row */}
          <div className="mt-3 pt-3 border-t border-brand-warm/30 flex items-center justify-between text-xs text-brand-muted">
            <span>
              Menampilkan <strong className="text-brand-forest">{filteredProducts.length}</strong> produk
              {selectedCategory !== "all" && (
                <span> dalam kategori <strong className="text-brand-forest">{activeCategoryLabel}</strong></span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-brand-white border border-brand-warm/50 rounded p-8 max-w-xl mx-auto shadow-xs">
              <p className="font-serif text-xl text-brand-forest mb-2">
                Belum Ada Produk
              </p>
              <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                Produk untuk kategori <strong className="text-brand-ink">{activeCategoryLabel}</strong> saat ini belum tersedia dalam katalog resmi. Silakan hubungi kami via WhatsApp untuk informasi rilis berikutnya.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-olive text-white px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-brand-forest transition-colors shadow-sm"
              >
                Tampilkan Semua Produk
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function CatalogFilter(props) {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-brand-muted text-sm">
          Memuat katalog...
        </div>
      }
    >
      <CatalogFilterContent {...props} />
    </Suspense>
  );
}
