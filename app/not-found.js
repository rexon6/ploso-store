import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-olive font-medium mb-3">
        404 — Halaman Tidak Ditemukan
      </p>
      <h1 className="font-serif text-3xl md:text-5xl text-brand-forest mb-4">
        Halaman Belum Tersedia
      </h1>
      <p className="text-brand-muted max-w-md mb-8 text-sm md:text-base leading-relaxed">
        Halaman yang Anda tuju mungkin telah dipindahkan atau tautan tidak valid. Silakan kembali ke katalog atau halaman utama.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-forest text-brand-cream hover:bg-brand-olive text-xs font-medium uppercase tracking-widest transition-colors rounded"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/katalog"
          className="inline-flex items-center justify-center px-6 py-3 border border-brand-forest/20 text-brand-forest hover:bg-brand-forest/5 text-xs font-medium uppercase tracking-widest transition-colors rounded"
        >
          Lihat Katalog
        </Link>
      </div>
    </div>
  );
}
