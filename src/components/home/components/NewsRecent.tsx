import { getDirectNewsRecent } from "@/api";
import { NewsRecentList } from "./NewsRecentList";

export const NewsRecent = async () => {
  const newsList = await getDirectNewsRecent();

  return (
    <div>
      <h2 className="text-3xl pb-10 font-bold">Noticias recientes</h2>
      <NewsRecentList newsList={newsList} />
    </div>
  )
}
