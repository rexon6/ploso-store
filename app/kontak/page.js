import KontakClient from "./KontakClient";
import { storeConfig } from "@/data/products";

export const metadata = {
  title: "Kontak & Lokasi",
  description:
    "Hubungi Ploso Store untuk pertanyaan produk, pemesanan via WhatsApp resmi, serta informasi titik pengambilan di Pondok Pesantren Al Falah Ploso.",
};

export default function KontakPage() {
  return <KontakClient />;
}
