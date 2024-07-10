import { NextRequest, NextResponse } from "next/server";
import { NewsDetailResponse } from "@/components/details";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');

  const response = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/?slug=${slug}`);

  if (!response.ok) {
    throw new Error("External error fetching");
  }

  const data: NewsDetailResponse[] = await response.json();

  const detailNews = data.map(newsItem => ({
    content: newsItem.content.rendered,
    date: newsItem.date,
    id: newsItem.id,
    image: newsItem.jetpack_featured_media_url,
    modified: newsItem.modified,
    title: newsItem.title.rendered,
  }));

  return NextResponse.json({
    method: 'GET',
    response: detailNews[0],
  });
}
