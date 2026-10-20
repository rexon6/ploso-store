"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { storeConfig, getWhatsAppUrl } from "@/data/products";

export default function KontakClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "produk",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    directWaUrl: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Catatan akurasi data: Website frontend belum terhubung ke database / backend email.
    // Daripada memberikan klaim palsu bahwa pesan terkirim ke server,
    // kita sediakan opsi langsung meneruskan pesan yang diketik ke WhatsApp resmi klien.
    const topicLabels = {
      produk: "Pertanyaan Produk & Ukuran",
      "pesanan-khusus": "Pemesanan Khusus / Jumlah Banyak",
      reseller: "Kemitraan / Reseller",
      lainnya: "Lainnya",
    };

    const waText = `Halo Ploso Store,\nSaya ingin bertanya:\n- Nama: ${formData.name}\n- Email: ${formData.email || "-"}\n- No. HP: ${formData.phone || "-"}\n- Keperluan: ${topicLabels[formData.topic] || formData.topic}\n- Pesan: ${formData.message}`;

    const waUrl = getWhatsAppUrl(waText);

    setFormStatus({
      submitted: true,
      directWaUrl: waUrl,
    });
  };

  return (
    <main>
      {/* Contact Header */}
      <section className="pt-28 pb-12 sm:pt-32 md:pt-40 md:pb-16 border-b border-brand-warm/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-brand-brown text-xs uppercase tracking-[0.3em] font-sans mb-3 sm:text-sm">
              Layanan Pelanggan
            </p>
            <h1 className="font-serif text-3xl text-brand-forest leading-tight mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Hubungi Kami
            </h1>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed">
              Silakan menghubungi kanal resmi Ploso Store untuk konsultasi
              produk, pertanyaan ketersediaan ukuran, kerja sama kemitraan, atau
              kunjungan titik layanan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Information Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Box */}
              <div className="p-6 border border-brand-warm/60 rounded bg-brand-white shadow-sm sm:p-8">
                <span className="text-xs uppercase tracking-widest text-brand-brown block mb-2">
                  Kanal Pemesanan Utama
                </span>
                <h3 className="font-serif text-2xl text-brand-forest mb-3">
                  WhatsApp Resmi
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  Layanan tanya jawab dan pemesanan kami layani secara personal via
                  WhatsApp agar detail pesanan terkonfirmasi dengan tepat.
                </p>
                <WhatsAppButton
                  size="full"
                  text="Halo Ploso Store, saya ingin bertanya tentang produk"
                >
                  Chat WhatsApp ({storeConfig.whatsappDisplay})
                </WhatsAppButton>
              </div>

              {/* Operational & Address */}
              <div className="p-6 border border-brand-warm/60 rounded bg-brand-white space-y-6 shadow-sm sm:p-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-brown block mb-1">
                    Titik Lokasi
                  </span>
                  <h4 className="font-serif text-lg text-brand-forest mb-1">
                    {storeConfig.address}
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {storeConfig.locationDetail}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-warm/40">
                  <span className="text-xs uppercase tracking-widest text-brand-brown block mb-1">
                    Jam Operasional Layanan
                  </span>
                  <p className="text-brand-forest text-sm font-medium">
                    {storeConfig.operationalHours.weekdays}
                  </p>
                  <p className="text-brand-muted text-xs mt-0.5">
                    {storeConfig.operationalHours.weekend}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-warm/40">
                  <span className="text-xs uppercase tracking-widest text-brand-brown block mb-2">
                    Media Sosial Resmi
                  </span>
                  <p className="text-brand-muted text-xs mb-3">
                    Ikuti perkembangan koleksi terbaru dan kegiatan kami:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={storeConfig.socialLinks.youtube}
                      className="px-3 py-1.5 text-xs border border-brand-warm rounded text-brand-ink hover:border-brand-olive transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                    <a
                      href={storeConfig.socialLinks.instagram}
                      className="px-3 py-1.5 text-xs border border-brand-warm rounded text-brand-ink hover:border-brand-olive transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href={storeConfig.socialLinks.tiktok}
                      className="px-3 py-1.5 text-xs border border-brand-warm rounded text-brand-ink hover:border-brand-olive transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 border border-brand-warm/60 rounded bg-brand-white shadow-sm sm:p-8 md:p-12">
                <span className="text-xs uppercase tracking-widest text-brand-brown block mb-2">
                  Formulir Pesan
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-forest mb-2">
                  Kirimkan Pertanyaan Anda
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">
                  Isi rincian di bawah untuk pertanyaan seputar ketersediaan produk
                  atau peluang kerja sama keagenan/reseller.
                </p>

                {formStatus.submitted ? (
                  <div className="p-6 bg-brand-cream border border-brand-warm rounded space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-brand-olive text-white rounded shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-brand-forest font-semibold">
                          Formulir Siap Diteruskan
                        </h4>
                        <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                          Karena backend server email belum aktif, Anda dapat
                          meneruskan pesan ini langsung ke WhatsApp Customer
                          Service Ploso Store untuk respon lebih cepat.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={formStatus.directWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded px-6 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#1da851] transition-colors"
                      >
                        Buka di WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          setFormStatus({ submitted: false, directWaUrl: null })
                        }
                        className="text-xs uppercase tracking-wider font-semibold text-brand-forest border border-brand-warm rounded px-4 py-3 hover:bg-brand-cream transition-colors"
                      >
                        Kirim Pesan Lain
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-forest mb-2"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-brand-warm/80 bg-brand-cream/30 text-brand-ink text-sm focus:outline-none focus:border-brand-olive transition-colors"
                        placeholder="Contoh: Muhammad Farhan"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-wider font-semibold text-brand-forest mb-2"
                        >
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded border border-brand-warm/80 bg-brand-cream/30 text-brand-ink text-sm focus:outline-none focus:border-brand-olive transition-colors"
                          placeholder="email@contoh.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs uppercase tracking-wider font-semibold text-brand-forest mb-2"
                        >
                          Nomor WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded border border-brand-warm/80 bg-brand-cream/30 text-brand-ink text-sm focus:outline-none focus:border-brand-olive transition-colors"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="topic"
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-forest mb-2"
                      >
                        Keperluan
                      </label>
                      <select
                        id="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-brand-warm/80 bg-brand-cream/30 text-brand-ink text-sm focus:outline-none focus:border-brand-olive transition-colors"
                      >
                        <option value="produk">
                          Pertanyaan Produk &amp; Ukuran
                        </option>
                        <option value="pesanan-khusus">
                          Pemesanan Khusus / Jumlah Banyak
                        </option>
                        <option value="reseller">Kemitraan / Reseller</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-forest mb-2"
                      >
                        Pesan Anda
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-brand-warm/80 bg-brand-cream/30 text-brand-ink text-sm focus:outline-none focus:border-brand-olive transition-colors"
                        placeholder="Tuliskan pesan atau detail produk yang ingin Anda tanyakan..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-olive text-white rounded px-8 py-3.5 uppercase tracking-wider text-xs font-semibold hover:bg-brand-forest transition-colors shadow-sm"
                    >
                      Kirim Pertanyaan
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps Embed / Location Section */}
          <div className="mt-16">
            <div className="border border-brand-warm/60 rounded overflow-hidden shadow-sm">
              <div className="bg-brand-stone/60 p-4 text-center border-b border-brand-warm/60">
                <span className="text-xs uppercase tracking-wider text-brand-brown font-semibold">
                  Peta Lokasi Layanan
                </span>
              </div>
              <div
                className="bg-brand-stone flex flex-col items-center justify-center p-6 py-12 text-center sm:aspect-[21/9] sm:py-6 md:aspect-[3/1]"
                style={{
                  background:
                    "linear-gradient(135deg, #FAF7F2 0%, #E8E2D9 50%, #D4C5B0 100%)",
                }}
              >
                <p className="font-serif text-xl text-brand-forest mb-2">
                  {storeConfig.address}
                </p>
                <p className="text-brand-muted text-xs md:text-sm max-w-md">
                  {storeConfig.locationDetail}
                </p>
                <a
                  href={storeConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs uppercase tracking-wider font-semibold text-brand-olive hover:underline"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
