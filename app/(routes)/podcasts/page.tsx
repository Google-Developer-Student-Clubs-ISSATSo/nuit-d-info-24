import PodcastCard from "@/components/PodcastCard";
import Link from "next/link";

const episodes = [
  {
    id: 1,
    thumbail: "/images/episode1.jpg",
    title: "Episode 1",
    description: "Les océans et le climat avec Florian Sévellec",
    videoLink : "https://youtu.be/zsPxyx53QTY"
  },
  {
    id: 2,
    thumbail: "/images/episode1.jpg",
    title: "Episode 2",
    description: "Race For Water - Episode 2 avec Frederic Le Moigne",
    videoLink:"https://youtu.be/2wkiIpw9jdA",
  },
];

export default function PodcastsPage() {
  return (
    <div className="container py-4">
      <h1 className="text-4xl text-center my-8">Toutes les episodes</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 px-[100px]">
        {episodes.map((episode) => (
          <Link href={`${episode.videoLink}`} target="_blank" key={episode.id}>
            <PodcastCard key={episode.id} episode={episode} />
          </Link>
        ))}
      </div>
    </div>
  );
}
