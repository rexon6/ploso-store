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

export default async function KategoriPage({ params }) {
  const resolvedParams = await params;
  const cat = resolvedParams?.kategori ? resolvedParams.kategori.toLowerCase() : "all";
  redirect(`/katalog?category=${cat}`);
}
