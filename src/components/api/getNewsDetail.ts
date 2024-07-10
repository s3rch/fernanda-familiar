import getUrl from "@/utils/getUrlBase";
import { notFound } from "next/navigation";
import { NewsDetailProps } from "../details";

export const getNewsDetail = async (slug = ''): Promise<NewsDetailProps> => {
  const url = getUrl(`/api/newsDetail?slug=${slug}`);
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
