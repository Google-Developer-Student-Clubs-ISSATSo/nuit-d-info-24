import PodcastCard from "@/components/PodcastCard";

const episodes = [
  {
    imageSrc: "/images/ocean1.png",
    title: "Episode 1",
    description: "Description for Episode 1.",
  },
  {
    imageSrc: "/images/ocean2.jpg",
    title: "Episode 2",
    description: "Description for Episode 2.",
  },
  {
    imageSrc: "/images/ocean1.png",
    title: "Episode 3",
    description: "Description for Episode 3.",
  },
  {
    imageSrc: "/images/ocean2.jpg",
    title: "Episode 4",
    description: "Description for Episode 4.",
  },
  {
    imageSrc: "/images/ocean1.png",
    title: "Episode 5",
    description: "Description for Episode 5.",
  },
  {
    imageSrc: "/images/ocean2.jpg",
    title: "Episode 6",
    description: "Description for Episode 6.",
  },
  {
    imageSrc: "/images/ocean1.png",
    title: "Episode 7",
    description: "Description for Episode 7.",
  },
  {
    imageSrc: "/images/ocean2.jpg",
    title: "Episode 8",
    description: "Description for Episode 8.",
  },
];

export default function PodcastsPage() {
  return (
    <div className="container py-4 bg-[#1F86AA]">
      <h1 className="text-4xl text-center my-8 font-bold">
        Toutes les episodes
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 px-[100px]">
        {episodes.map((episode, index) => (
          <PodcastCard key={index} episode={episode} />
        ))}
      </div>
    </div>
  );
}
