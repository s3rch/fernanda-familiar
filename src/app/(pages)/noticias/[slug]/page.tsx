import { Metadata } from "next";
import { getDirectNewsDetail, getDirectNewsRecent } from "@/api";
import { NewsDetail } from "@/components/details";

interface Props {
  params: { slug: string };
}

// Build all static pages
export async function generateStaticParams() {
  const allNews = await getDirectNewsRecent();

  return allNews.map(news => ({
    slug: news.slug,
  }));
}

// Generate Meta data per page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { title, id } = await getDirectNewsDetail(params.slug);

    return {
      title,
      description: `${id} - ${title}`
    }
  } catch (error) {
    return {
      title: 'Página detalle noticia',
      description: 'Esta noticia no fue encontrada.'
    }
  }
}

export default async function NewsLayout({ params }: Props) {
  const detail = await getDirectNewsDetail(params.slug);

  return (
    <main className="page-detail">
      <div className="container mx-auto px-3">
        <NewsDetail {...detail} />
      </div>
    </main>
  );
}
