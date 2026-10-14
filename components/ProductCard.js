import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, showButton = false }) {
  const { slug, id, name, priceFormatted, image, imageAlt } = product;
  const productHref = `/produk/${slug || id}`;

  return (
    <Link
      href={productHref}
      className="group flex flex-col h-full bg-brand-white border border-brand-warm/60 rounded overflow-hidden transition-all duration-200 hover:shadow-md hover:border-brand-olive/50"
    >
      {/* Product Image Container */}
      <div className="aspect-[3/4] w-full bg-brand-cream relative overflow-hidden flex items-center justify-center p-3">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-105"
            quality={90}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-muted text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3.5 md:p-4 flex flex-col flex-grow bg-brand-white">
        <h3 className="font-serif text-sm md:text-base text-brand-forest group-hover:text-brand-olive transition-colors leading-snug line-clamp-2 min-h-[2.5rem] mb-2">
          {name}
        </h3>
        <div className="mt-auto pt-2 border-t border-brand-warm/30 flex items-center justify-between">
          <span className="text-sm md:text-base font-semibold text-brand-ink">
            {priceFormatted || "Rp 100.000"}
          </span>
        </div>
      </div>
    </Link>
  );
}
