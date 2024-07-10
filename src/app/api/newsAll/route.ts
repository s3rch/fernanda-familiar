import { NextRequest, NextResponse } from "next/server";
import { NewsResponse } from "@/components/home";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/?per_page=${limit}&offset=${offset}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`External error fetching: ${res.status} - ${res.statusText}`);
  }

  const data: NewsResponse[] = await res.json();

  const allNews = data.map(newsItem => ({
    excerpt: newsItem.excerpt.rendered,
    id: newsItem.id,
    image: newsItem.jetpack_featured_media_url,
    slug: newsItem.slug,
    title: newsItem.title.rendered,
  }));

  return NextResponse.json({
    method: 'GET',
    response: allNews,
  });
}
