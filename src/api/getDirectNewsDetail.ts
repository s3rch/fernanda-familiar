import { NewsDetailProps, NewsDetailResponse } from "@/components/details";
import { getExternaUrl } from "@/utils/getUrlBase";
import { notFound } from "next/navigation";

export const getDirectNewsDetail = async (slug = ''): Promise<NewsDetailProps> => {
  const url = getExternaUrl(`/wp-json/wp/v2/posts/?slug=${slug}`);
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`External error fetching: ${res.status} - ${res.statusText}`);
  }

  const data: NewsDetailResponse[] = await res.json();

  if (data.length === 0) {
    notFound();
  }

  const detailNews = data.map(newsItem => ({
    content: newsItem.content.rendered,
    date: newsItem.date.toString(),
    id: newsItem.id,
    image: newsItem.jetpack_featured_media_url,
    modified: newsItem.modified.toString(),
    title: newsItem.title.rendered,
  }));

  return detailNews[0];
}
