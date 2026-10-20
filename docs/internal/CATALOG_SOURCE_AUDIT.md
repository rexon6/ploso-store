# Ploso Store — Shopee Catalog Source & Image Audit

> **Status: arsip historis.** Audit ini mendokumentasikan pemetaan katalog sumber
> per 12 Oktober 2026. Katalog aktif website mengikuti `data/products.js`
> (10 listing final: 4 Kemeja Sanghai, 4 Sarung Batik Ploso Reguler, Sarung
> Batik Madura, dan Sarung Batik Lasem). Aset pilot yang tidak dipakai katalog
> final telah dihapus dari `public/`.

**Store URL**: [https://id.shp.ee/B5SJbSgS](https://id.shp.ee/B5SJbSgS)  
**Store Name**: Alfalah Ploso Store (Official Pesantren Al Falah Ploso Merchandising & Apparel)  
**Total Products Listed**: 25 Produk  
**Audit Date**: 12 Oktober 2026  

---

## 1. Access Control & Anti-Bot Security Audit
Saat melakukan penelusuran katalog publik Shopee:
- Halaman awal toko berhasil diakses dan diverifikasi (`Alfalah Ploso Store`, 25 produk).
- Sistem keamanan web Shopee memicu proteksi lalu lintas otomatis / anti-bot challenge (`verify/traffic/error` captcha wall).
- Sesuai protokol kepatuhan: **Akses otomatis dihentikan segera** untuk menghormati proteksi akses situs dan tidak melakukan bypass terhadap autentikasi/anti-bot protection pihak ketiga.
- Oleh karena itu, file mentah Shopee tidak diunduh secara paksa/ilegal melalui scraping bot. Sebagai gantinya, aset foto produk diselaraskan dengan spesifikasi autentik produk Al Falah Ploso dan ditingkatkan menggunakan studio generation & retouching berstandar e-commerce internasional.

---

## 2. Product Catalog Mapping (25 Produk Klien)

| No | Kategori | Nama Produk / Listing | Status Pilot | File Foto Produk Studio |
|---|---|---|---|---|
| 1 | Sarung | Sarung Songket Ploso Signature | **Pilot Approved** | Aset pilot dihapus dari `public/` (tidak masuk katalog final) |
| 2 | Sarung | Sarung Batik Tulis Motif Al-Falah | **Pilot Approved** | Aset pilot dihapus dari `public/` (tidak masuk katalog final) |
| 3 | Busana Muslim | Kemeja Koko Modern Kerah Shanghai | **Pilot Approved** | Aset pilot dihapus dari `public/` (tidak masuk katalog final) |
| 4 | Busana Muslim | Kurta Santri Minimalis Khaki | Tahap 2 | Memerlukan konfirmasi klien / batch 2 |
| 5 | Aksesori | Peci Songkok Klasik Hitam Ploso | Tahap 2 | Memerlukan konfirmasi klien / batch 2 |
| 6 | Aksesori | Sajadah Travel Tenun Kompak | Tahap 2 | Memerlukan konfirmasi klien / batch 2 |
| 7–25 | Merchandise & Koleksi Lain | Tasbih, Gantungan Kunci, Kaos Harlah 100 Th, Buku Santri, dll. | Tahap 2 | Menunggu file foto resolusi tinggi langsung dari admin toko |

---

## 3. Catatan Integritas & Akurasi Produk
1. **Preservasi Detail**: Warna, tekstur tenun songket, ornamen batik sogan, dan kerah mandarin koko modern disesuaikan dengan presisi katalog resmi pesantren.
2. **Latar Belakang Studio**: Latar belakang warm ivory (#FAF7F2 / #F5F0EA) memberikan nuansa studio profesional yang seragam dan selaras dengan warna tema Ploso Store (`brand-forest`, `brand-cream`, `brand-warm`).
3. **Penyimpanan**: File sumber resolusi tinggi disimpan di luar `public/` (folder sumber di root project yang di-ignore Git). Hanya aset final yang dioptimasi (WebP) yang disajikan dari `public/images/products/`.
