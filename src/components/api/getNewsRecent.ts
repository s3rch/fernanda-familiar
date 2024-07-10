import { notFound } from "next/navigation";
import { NewsItem } from "../home";

export const getNewsRecent = async (limit = 5, offset = 1): Promise<NewsItem[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const data = await fetch(`${baseUrl}/api/newsAll?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  if (!data.response) {
    notFound();
  }

  return data.response;
}
