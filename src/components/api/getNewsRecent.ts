import getUrl from "@/utils/getUrlBase";
import { notFound } from "next/navigation";
import { NewsItem } from "../home";

export const getNewsRecent = async (limit = 5, offset = 1): Promise<NewsItem[]> => {
  const url = getUrl(`/api/newsAll?limit=${limit}&offset=${offset}`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Internal error fetching");
  }

  const data = await response.json();

  if (!data.response) {
    notFound();
  }

  return data.response;
}
