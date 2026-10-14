/**
 * Data Terpusat Ploso Store
 */

export const storeConfig = {
  name: "PLOSO STORE",
  tagline: "Modern Dalam Balutan Tradisi",
  motto: "Santri Produktif, Pesantren Mandiri",
  description: "Ploso Store menawarkan kemeja sanghai eksklusif, busana muslim modern, serta perlengkapan berkualitas dari Pondok Pesantren Al Falah Ploso.",
  whatsappNumber: "62xxxxxxxxxx",
  whatsappDisplay: "62xxx-xxxx-xxxx",
  address: "Pondok Pesantren Al Falah Ploso, Kediri, Jawa Timur",
  locationDetail: "Kecamatan Mojo, Kabupaten Kediri, Jawa Timur, Indonesia",
  mapsUrl: "https://maps.google.com/?q=Pondok+Pesantren+Al+Falah+Ploso+Kediri",
  operationalHours: {
    weekdays: "Sabtu – Kamis: 08.00 – 16.30 WIB",
    weekend: "Jumat: Libur / Menyesuaikan Kegiatan Pesantren",
  },
  socialLinks: {
    instagram: "#",
    tiktok: "#",
    facebook: "#",
  },
};

export const products = [
  {
    id: "kemeja-sanghai-ploso-hitam",
    slug: "kemeja-sanghai-ploso-hitam",
    name: "Kemeja Sanghai Ploso Hitam",
    category: "kemeja",
    categoryLabel: "Kemeja",
    badge: "Koleksi Terbaru",
    price: 100000,
    priceFormatted: "Rp 100.000",
    color: "Hitam",
    colorHex: "#1a1a1a",
    description: "Kemeja Sanghai Ploso dengan kerah sanghai yang elegan, saku depan berdesain minimalis, serta manset kancing yang rapi. Tampilan sederhana dan rapi, cocok untuk suasana kasual hingga formal.",
    features: [
      "Kerah Sanghai yang elegan",
      "Saku depan dengan desain minimalis",
      "Manset kancing",
      "Tampilan sederhana dan rapi",
      "Cocok untuk suasana kasual hingga formal",
    ],
    image: "/images/products/kemeja-sanghai-hitam.png",
    imageAlt: "Kemeja Sanghai Ploso Hitam — kemeja pria berkerah sanghai warna hitam",
    featured: true,
  },
  {
    id: "kemeja-sanghai-ploso-hijau",
    slug: "kemeja-sanghai-ploso-hijau",
    name: "Kemeja Sanghai Ploso Hijau",
    category: "kemeja",
    categoryLabel: "Kemeja",
    badge: "Koleksi Terbaru",
    price: 100000,
    priceFormatted: "Rp 100.000",
    color: "Hijau",
    colorHex: "#2E5339",
    description: "Kemeja Sanghai Ploso dengan kerah sanghai yang elegan, saku depan berdesain minimalis, serta manset kancing yang rapi. Tampilan sederhana dan rapi, cocok untuk suasana kasual hingga formal.",
    features: [
      "Kerah Sanghai yang elegan",
      "Saku depan dengan desain minimalis",
      "Manset kancing",
      "Tampilan sederhana dan rapi",
      "Cocok untuk suasana kasual hingga formal",
    ],
    image: "/images/products/kemeja-sanghai-hijau.png",
    imageAlt: "Kemeja Sanghai Ploso Hijau — kemeja pria berkerah sanghai warna hijau",
    featured: true,
  },
  {
    id: "kemeja-sanghai-ploso-cream",
    slug: "kemeja-sanghai-ploso-cream",
    name: "Kemeja Sanghai Ploso Cream",
    category: "kemeja",
    categoryLabel: "Kemeja",
    badge: "Koleksi Terbaru",
    price: 100000,
    priceFormatted: "Rp 100.000",
    color: "Cream",
    colorHex: "#DDD4C0",
    description: "Kemeja Sanghai Ploso dengan kerah sanghai yang elegan, saku depan berdesain minimalis, serta manset kancing yang rapi. Tampilan sederhana dan rapi, cocok untuk suasana kasual hingga formal.",
    features: [
      "Kerah Sanghai yang elegan",
      "Saku depan dengan desain minimalis",
      "Manset kancing",
      "Tampilan sederhana dan rapi",
      "Cocok untuk suasana kasual hingga formal",
    ],
    image: "/images/products/kemeja-sanghai-cream.png",
    imageAlt: "Kemeja Sanghai Ploso Cream — kemeja pria berkerah sanghai warna cream",
    featured: true,
  },
  {
    id: "kemeja-sanghai-ploso-biru",
    slug: "kemeja-sanghai-ploso-biru",
    name: "Kemeja Sanghai Ploso Biru",
    category: "kemeja",
    categoryLabel: "Kemeja",
    badge: "Koleksi Terbaru",
    price: 100000,
    priceFormatted: "Rp 100.000",
    color: "Biru",
    colorHex: "#7E9FB8",
    description: "Kemeja Sanghai Ploso dengan kerah sanghai yang elegan, saku depan berdesain minimalis, serta manset kancing yang rapi. Tampilan sederhana dan rapi, cocok untuk suasana kasual hingga formal.",
    features: [
      "Kerah Sanghai yang elegan",
      "Saku depan dengan desain minimalis",
      "Manset kancing",
      "Tampilan sederhana dan rapi",
      "Cocok untuk suasana kasual hingga formal",
    ],
    image: "/images/products/kemeja-sanghai-biru.png",
    imageAlt: "Kemeja Sanghai Ploso Biru — kemeja pria berkerah sanghai warna biru",
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "Semua Produk" },
  { id: "kemeja", label: "Kemeja" },
  { id: "sarung", label: "Sarung" },
  { id: "peci", label: "Peci" },
  { id: "t-shirt", label: "T-Shirt" },
  { id: "merchandise", label: "Merchandise" },
];

/**
 * Helper untuk menyusun URL WhatsApp
 * @param {string} text - Pesan awal yang ingin dikirim
 * @param {string} [phone] - Nomor WA (opsional, fallback ke storeConfig.whatsappNumber)
 */
export function getWhatsAppUrl(text = "Halo Ploso Store", phone = storeConfig.whatsappNumber) {
  const cleanPhone = phone ? phone.replace(/[^\dx]/gi, "") : "62xxxxxxxxxx";
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug || p.id === slug) || null;
}
