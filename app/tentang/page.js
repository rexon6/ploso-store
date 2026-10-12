import Link from "next/link";
import { storeConfig } from "@/data/products";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Cerita perjalanan Ploso Store, berakar dari momentum Harlah 100 Tahun Pondok Pesantren Al Falah Ploso dan semangat kemandirian ekonomi pesantren.",
};

const timelineItems = [
  {
    year: "2024",
    colorClass: "text-brand-brown",
    title: "Lini Merchandise Harlah",
    description:
      "Dimulai sebagai unit resmi merchandise untuk merayakan momentum 100 Tahun Pondok Pesantren Al Falah Ploso dengan apresiasi luas dari jamaah dan alumni.",
  },
  {
    year: "2024 – Akhir",
    colorClass: "text-brand-olive",
    title: "Penguatan Rancang Produk",
    description:
      "Evolusi kurasi dari cenderamata menjadi produk fungsional harian: sarung tenun songket, sarung batik khas, dan kemeja muslim yang elegan.",
  },
  {
    year: "2025",
    colorClass: "text-brand-forest",
    title: "Rebranding Ploso Store",
    description:
      "Penyatuan identitas menjadi Ploso Store dengan cakupan produk busana yang lebih lengkap, kanal layanan WhatsApp terpusat, dan integrasi unit BUMP.",
  },
];

const brandValues = [
  {
    number: "01",
    title: "Tradisi",
    description:
      "Menghormati akar keilmuan dan adab pesantren sebagai pondasi setiap karya.",
  },
  {
    number: "02",
    title: "Kualitas",
    description:
      "Ketelitian pada serat kain, ketahanan tenun, serta jahitan presisi tanpa kompromi.",
  },
  {
    number: "03",
    title: "Pelayanan",
    description:
      "Komunikasi yang santun, tanggap, dan jujur dalam mendampingi setiap pertanyaan pelanggan.",
  },
  {
    number: "04",
    title: "Kreativitas",
    description:
      "Inovasi motif dan potongan pakaian kontemporer yang tetap menjaga marwah kesantunan.",
  },
  {
    number: "05",
    title: "Kemandirian",
    description:
      "Memberi kontribusi nyata bagi ekosistem ekonomi berkelanjutan di pesantren.",
  },
];

export default function TentangPage() {
  return (
    <main>
      {/* Page Header Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-brand-warm/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-4">
              Mengenal Ploso Store
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-forest leading-tight mb-6">
              Tradisi yang Mengakar, Langkah yang Maju
            </h1>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed">
              Dari momentum satu abad pesantren hingga dedikasi menghadirkan
              busana berkualitas dengan spirit kemandirian.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section: Asal-Usul & Transformasi */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div
                className="aspect-[4/5] rounded bg-brand-stone relative overflow-hidden shadow-sm flex flex-col justify-end"
                style={{
                  background:
                    "linear-gradient(150deg, #8B7355 0%, #4A5D3A 55%, #2D3A22 100%)",
                }}
              >
                <div className="p-8 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs uppercase tracking-[0.25em] text-brand-warm mb-2 block">
                    Dokumentasi Nilai
                  </span>
                  <p className="font-serif text-2xl italic leading-snug">
                    "{storeConfig.tagline}"
                  </p>
                  <p className="text-xs text-brand-cream/80 mt-2 font-sans">
                    {storeConfig.motto}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="batik-divider-thick w-16 mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest leading-snug">
                Berawal dari Momentum Satu Abad
              </h2>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                Ploso Store tumbuh dari lini unit usaha “Merchandise” yang pertama
                kali digulirkan dalam rangkaian peringatan akbar Harlah 100 Tahun
                Pondok Pesantren Al Falah Ploso pada tahun 2024. Respon hangat dari
                santri, alumni, keluarga besar, serta masyarakat umum menjadi
                titik tolak yang menegaskan pentingnya wadah usaha yang
                berkelanjutan.
              </p>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                Menapaki tahun 2025, inisiatif ini resmi bertransformasi menjadi
                Ploso Store. Transformasi ini bukan sekadar pergantian jenama,
                melainkan lompatan standar: kurasi bahan yang lebih terukur,
                estetika desain busana muslim modern yang tetap santun, serta
                komitmen pelayanan etalase digital yang lebih profesional.
              </p>
              <div className="pt-4 border-t border-brand-warm/50">
                <h3 className="font-serif text-xl text-brand-forest mb-2">
                  Kemandirian Bersama BUMP
                </h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                  Ploso Store beroperasi terhubung dengan ekosistem Badan Usaha
                  Milik Pesantren (BUMP). Kehadirannya dirancang untuk menjadi
                  pilar penguatan ekonomi pesantren, membuka ruang dedikasi santri
                  produktif, serta membuktikan bahwa tradisi luhur dapat selaras
                  dengan dinamika industri apparel modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-brand-stone/40 border-y border-brand-warm/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
              Linimasa
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-forest">
              Jejak Langkah Transformasi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-cream/80 p-8 border border-brand-warm/60 rounded shadow-xs"
              >
                <span
                  className={`font-serif text-3xl block mb-2 ${item.colorClass}`}
                >
                  {item.year}
                </span>
                <h3 className="font-sans font-semibold text-lg text-brand-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="p-8 md:p-12 border border-brand-warm/60 rounded bg-brand-white shadow-xs">
              <p className="text-brand-brown text-xs uppercase tracking-[0.25em] font-sans mb-3">
                Arah Pandang
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-forest mb-4">
                Visi
              </h3>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                Menjadi jenama apparel dan busana muslim pesantren terdepan yang
                memadukan keaslian nilai tradisi dengan cita rasa modern, serta
                menjadi inspirasi kemandirian ekonomi umat.
              </p>
            </div>
            <div className="p-8 md:p-12 border border-brand-warm/60 rounded bg-brand-white shadow-xs">
              <p className="text-brand-brown text-xs uppercase tracking-[0.25em] font-sans mb-3">
                Tindakan Nyata
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-brand-forest mb-4">
                Misi
              </h3>
              <ul className="space-y-3 text-brand-muted text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-brand-olive font-bold">•</span>
                  <span>
                    Menghasilkan sarung dan busana muslim dengan standar bahan
                    bermutu tinggi dan harga yang berkeadilan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-olive font-bold">•</span>
                  <span>
                    Menjaga orisinalitas nilai kultural pesantren dalam rancangan
                    yang relevan bagi keseharian masyarakat umum.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-olive font-bold">•</span>
                  <span>
                    Mengembangkan ekosistem wirausaha santri yang profesional,
                    amanah, dan menopang kemandirian pesantren.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Brand */}
      <section className="py-20 md:py-28 bg-brand-white border-t border-brand-warm/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-brown text-sm uppercase tracking-[0.3em] font-sans mb-3">
              Prinsip Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-forest">
              Lima Nilai Utama Ploso Store
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {brandValues.map((val) => (
              <div key={val.number} className="p-6 border-b-2 border-brand-olive/70">
                <span className="text-xs uppercase tracking-widest text-brand-brown block mb-1">
                  {val.number}
                </span>
                <h4 className="font-serif text-xl text-brand-forest mb-2">
                  {val.title}
                </h4>
                <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-brand-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Miliki Bagian dari Tradisi
          </h2>
          <p className="text-brand-stone/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Jelajahi ragam sarung batik eksklusif dan busana muslim terbaru yang
            kami siapkan dengan penuh kehati-hatian.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/katalog"
              className="bg-brand-olive text-white rounded px-8 py-3 uppercase tracking-wider text-sm font-sans font-semibold hover:bg-brand-brown transition-colors"
            >
              Lihat Katalog Produk
            </Link>
            <Link
              href="/kontak"
              className="border border-brand-warm text-white rounded px-8 py-3 uppercase tracking-wider text-sm font-sans font-semibold hover:bg-white/10 transition-colors"
            >
              Kanal Kontak Resmi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
