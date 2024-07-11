import { NewsItem, NewsResponse } from "@/components/home";
import { getExternaUrl } from "@/utils/getUrlBase";
import { notFound } from "next/navigation";

export const getDirectNewsRecent = async (limit = 8, offset = 1): Promise<NewsItem[]> => {
  const url = getExternaUrl(`/wp-json/wp/v2/posts/?per_page=${limit}&offset=${offset}`);
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`External error fetching: ${res.status} - ${res.statusText}`);
  }

  const data: NewsResponse[] = await res.json();

  if (data.length === 0) {
    notFound();
  }

  const allNews = data.map(newsItem => ({
    excerpt: newsItem.excerpt.rendered,
    id: newsItem.id,
    image: newsItem.jetpack_featured_media_url,
    slug: newsItem.slug,
    title: newsItem.title.rendered,
  }));

  return allNews;
}
