import { NextRequest, NextResponse } from "next/server";
import { NewsResponse } from "@/components/home";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  const data: NewsResponse[] = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/?per_page=${limit}&offset=${offset}`)
    .then(res => res.json());

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
