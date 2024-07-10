import { Metadata } from "next";
import { getNewsDetail, getNewsRecent } from "@/components/api";
import { NewsDetail } from "@/components/details";

interface Props {
  params: { slug: string };
}

// Build all static pages
export async function generateStaticParams() {
  const allNews = await getNewsRecent();

  return allNews.map(news => ({
    slug: news.slug,
  }));
}

// Generate Meta data per page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { title, id } = await getNewsDetail(params.slug);

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
  const detail = await getNewsDetail(params.slug);

  return (
    <main className="page-detail">
      <div className="container mx-auto px-3">
        <NewsDetail {...detail} />
      </div>
    </main>
  );
}
