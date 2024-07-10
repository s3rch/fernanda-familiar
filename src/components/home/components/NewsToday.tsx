import { getNewsRecent } from "@/components/api";
import { NewsTodayItem } from "./NewsTodayItem";

export const NewsToday = async () => {
  const newsToday = await getNewsRecent(1, 0);

  return (
    <div>
      <h2 className="text-3xl pb-10 font-bold">Noticia destacada</h2>
      <NewsTodayItem {...newsToday[0]} />
    </div>
  )
}
