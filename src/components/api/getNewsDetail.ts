import { notFound } from "next/navigation";
import { NewsDetailProps } from "../details";

export const getNewsDetail = async (slug = ''): Promise<NewsDetailProps> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/api/newsDetail?slug=${slug}`);

  if (!response.ok) {
    throw new Error("Error fetching");
  }

  const data = await response.json();

  if (!data.response) {
    notFound();
  }

  return data.response;
}
