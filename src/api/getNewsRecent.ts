import { NewsItem } from "@/components/home";
import { getUrl } from "@/utils/getUrlBase";
import { notFound } from "next/navigation";

export const getNewsRecent = async (limit = 5, offset = 1): Promise<NewsItem[]> => {
  const url = getUrl(`/api/newsAll?limit=${limit}&offset=${offset}`);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Internal error fetching");
  }

  const data = await res.json();

  if (!data.response) {
    notFound();
  }

  return data.response;
}
