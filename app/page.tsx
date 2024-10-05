import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);

  return <></>;
}
