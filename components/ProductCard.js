import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product, showButton = true, compact = false }) {
  const { name, categoryLabel, badge, priceFormatted, description, gradient, image, imageAlt } = product;

  return (
    <div className="product-item group flex flex-col h-full bg-brand-white border border-brand-warm/50 rounded overflow-hidden p-5 transition-shadow hover:shadow-md">
      {/* Visual Product Card Image/Gradient */}
      <div
        className="aspect-[3/4] rounded bg-brand-stone relative overflow-hidden mb-5 w-full shrink-0"
        style={!image ? { background: gradient } : undefined}
        role="img"
        aria-label={imageAlt || name}
      >
        {image && (
          <Image
            src={image}
            alt={imageAlt || name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            quality={85}
          />
        )}
        {badge && (
          <span className="absolute top-4 left-4 bg-brand-forest/90 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm shadow-sm z-10">
            {badge}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        {categoryLabel && (
          <p className="text-brand-brown text-xs uppercase tracking-wider mb-1">
            {categoryLabel}
          </p>
        )}
        <h3 className="font-serif text-xl text-brand-forest mb-2 leading-snug">
          {name}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Footer: Price & WA Action */}
        <div className="flex items-center justify-between pt-4 border-t border-brand-warm/40 mt-auto">
          <span className="text-sm font-semibold text-brand-ink">
            {priceFormatted || "Rp —"}
          </span>
          {showButton && (
            <WhatsAppButton
              size="sm"
              text={`Halo Ploso Store, saya tertarik dengan ${name}`}
              className="!py-2 !px-3"
            >
              Tanya via WA &rarr;
            </WhatsAppButton>
          )}
        </div>
      </div>
    </div>
  );
}

