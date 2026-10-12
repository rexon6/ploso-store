/**
 * Data Terpusat Ploso Store
 *
 * Catatan Data Klien:
 * - Nomor WhatsApp resmi: Belum diberikan oleh klien (saat ini menggunakan placeholder "62xxxxxxxxxx" / "62xxx-xxxx-xxxx").
 * - Akun Media Sosial (Instagram, TikTok, Facebook): Belum diberikan URL spesifik oleh klien.
 * - Harga produk beranda sebelumnya tercatat "Rp —" di index.html, sedangkan harga katalog di katalog.html tercantum.
 */

export const storeConfig = {
  name: "PLOSO STORE",
  tagline: "Modern Dalam Balutan Tradisi",
  motto: "Santri Produktif, Pesantren Mandiri",
  description: "Ploso Store menawarkan sarung batik & songket eksklusif, busana muslim modern, serta aksesori berkualitas dari Pondok Pesantren Al Falah Ploso.",
  // Data klien yang masih placeholder / belum terisi:
  whatsappNumber: "62xxxxxxxxxx",
  whatsappDisplay: "62xxx-xxxx-xxxx", // [DATA KLIEN BELUM TERSEDIA: Memerlukan nomor WhatsApp resmi aktif]
  address: "Pondok Pesantren Al Falah Ploso, Kediri, Jawa Timur",
  locationDetail: "Kecamatan Mojo, Kabupaten Kediri, Jawa Timur, Indonesia",
  mapsUrl: "https://maps.google.com/?q=Pondok+Pesantren+Al+Falah+Ploso+Kediri",
  operationalHours: {
    weekdays: "Sabtu – Kamis: 08.00 – 16.30 WIB",
    weekend: "Jumat: Libur / Menyesuaikan Kegiatan Pesantren",
  },
  socialLinks: {
    instagram: "#", // [DATA KLIEN BELUM TERSEDIA: Memerlukan username/link resmi]
    tiktok: "#",    // [DATA KLIEN BELUM TERSEDIA: Memerlukan username/link resmi]
    facebook: "#",  // [DATA KLIEN BELUM TERSEDIA: Memerlukan URL halaman resmi]
  },
};

export const products = [
  {
    id: "sarung-songket-signature",
    name: "Sarung Songket Ploso Signature",
    category: "sarung",
    categoryLabel: "Sarung Songket",
    badge: "Sarung Eksklusif",
    price: 350000,
    priceFormatted: "Rp 350.000",
    description: "Tenunan rapat dengan motif songket klasik dan tumpal anggun, menggunakan benang pilihan yang nyaman.",
    gradient: "linear-gradient(160deg, #D4C5B0 0%, #B8A890 50%, #8B7355 100%)",
    image: "/images/products/sarung-songket-signature.jpg",
    imageAlt: "Sarung Songket Ploso Signature — tenunan songket klasik dengan motif tumpal dan aksen benang emas",
    featured: true,
  },
  {
    id: "sarung-batik-al-falah",
    name: "Sarung Batik Tulis Motif Al-Falah",
    category: "sarung",
    categoryLabel: "Sarung Batik",
    badge: "Batik Pilihan",
    price: 420000,
    priceFormatted: "Rp 420.000",
    description: "Motif orisinal sarat filosofi pesantren dengan warna sogan teduh, menyatu dengan tradisi kesantrian.",
    gradient: "linear-gradient(160deg, #4A5D3A 0%, #3A4D2E 50%, #2D3A22 100%)",
    image: "/images/products/sarung-batik-al-falah.jpg",
    imageAlt: "Sarung Batik Tulis Motif Al-Falah — batik sogan khas Jawa dengan motif parang dan kawung",
    featured: true,
  },
  {
    id: "kemeja-koko-shanghai",
    name: "Kemeja Koko Modern Kerah Shanghai",
    category: "busana",
    categoryLabel: "Busana Muslim",
    badge: "Kemeja Modern",
    price: 225000,
    priceFormatted: "Rp 225.000",
    description: "Potongan bersih berbahan katun madinah adem, cocok untuk kegiatan formal maupun ibadah harian.",
    gradient: "linear-gradient(145deg, #E8E2D9 0%, #D4C5B0 50%, #B8A890 100%)",
    image: "/images/products/kemeja-koko-shanghai.jpg",
    imageAlt: "Kemeja Koko Modern Kerah Shanghai — kemeja putih katun madinah dengan kerah mandarin",
    featured: true,
  },
  {
    id: "kurta-santri-khaki",
    name: "Kurta Santri Minimalis Khaki",
    category: "busana",
    categoryLabel: "Busana Muslim",
    badge: "Kurta Santun",
    price: 260000,
    priceFormatted: "Rp 260.000",
    description: "Rancangan siluet santun dengan detail kantong tersembunyi dan material katun linen bernapas.",
    gradient: "linear-gradient(145deg, #8B7355 0%, #6B5B45 60%, #4A5D3A 100%)",
    image: null,
    imageAlt: "Kurta Santri Minimalis Khaki",
    featured: false,
  },
  {
    id: "peci-songkok-hitam",
    name: "Peci Songkok Klasik Hitam Ploso",
    category: "aksesori",
    categoryLabel: "Aksesori",
    badge: "Aksesori Ibadah",
    price: 110000,
    priceFormatted: "Rp 110.000",
    description: "Beludru halus dengan ventilasi udara atas, nyaman digunakan berlama-lama saat ta'lim.",
    gradient: "linear-gradient(150deg, #FAF7F2 0%, #E8E2D9 60%, #D4C5B0 100%)",
    image: null,
    imageAlt: "Peci Songkok Klasik Hitam Ploso",
    featured: true,
  },
  {
    id: "sajadah-travel-tenun",
    name: "Sajadah Travel Tenun Kompak",
    category: "aksesori",
    categoryLabel: "Aksesori",
    badge: "Merchandise",
    price: 95000,
    priceFormatted: "Rp 95.000",
    description: "Sajadah ringan berbahan tenun halus yang mudah dilipat untuk mobilitas bepergian.",
    gradient: "linear-gradient(150deg, #3A4D2E 0%, #2D3A22 60%, #1A2414 100%)",
    image: null,
    imageAlt: "Sajadah Travel Tenun Kompak",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "Semua Koleksi" },
  { id: "sarung", label: "Sarung" },
  { id: "busana", label: "Busana Muslim" },
  { id: "aksesori", label: "Aksesori" },
];

/**
 * Helper untuk menyusun URL WhatsApp
 * @param {string} text - Pesan awal yang ingin dikirim
 * @param {string} [phone] - Nomor WA (opsional, fallback ke storeConfig.whatsappNumber)
 */
export function getWhatsAppUrl(text = "Halo Ploso Store", phone = storeConfig.whatsappNumber) {
  // Jika phone adalah placeholder seperti 62xxxxxxxxxx, pertahankan agar link tetap mencantumkan format tersebut
  const cleanPhone = phone ? phone.replace(/[^\dx]/gi, "") : "62xxxxxxxxxx";
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
