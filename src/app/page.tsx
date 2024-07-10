import { NewsRecent, NewsToday } from "@/components/home";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-3">
        <div className="lg:flex pt-20 pb-14">
          <div className="lg:basis-1/3 lg:pr-4 pb-10">
            <NewsToday />
          </div>

          <div className="lg:basis-2/3 lg:pl-4">
            <NewsRecent />
          </div>
        </div>
      </div>
    </main>
  );
}
