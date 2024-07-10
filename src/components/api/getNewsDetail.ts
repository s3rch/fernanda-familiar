import { notFound } from "next/navigation";
import { NewsDetailProps } from "../details";

export const getNewsDetail = async (slug = ''): Promise<NewsDetailProps> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const data = await fetch(`${baseUrl}/api/newsDetail?slug=${slug}`)
    .then(res => res.json());

  if (!data.response) {
    notFound();
  }

  return data.response;
}
