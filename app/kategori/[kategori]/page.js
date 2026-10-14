import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    { kategori: "kemeja" },
    { kategori: "sarung" },
    { kategori: "peci" },
    { kategori: "t-shirt" },
    { kategori: "merchandise" },
  ];
}

export default function KategoriPage({ params }) {
  const cat = params?.kategori ? params.kategori.toLowerCase() : "all";
  redirect(`/katalog?category=${cat}`);
}
