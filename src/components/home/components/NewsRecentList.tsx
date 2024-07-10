import { NewsItem } from '../interfaces/news-item';
import { NewsRecentItem } from './NewsRecentItem';

interface Props {
  newsList: NewsItem[];
}

export const NewsRecentList = ({ newsList }: Props) => {
  return (
    <ul>
      {newsList.map((newsItem: NewsItem) => (
        <NewsRecentItem
          key={newsItem.id}
          {...newsItem}
        />
      ))}
    </ul>
  )
}
