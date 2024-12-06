import { CirclePlay } from "lucide-react";
import Image from "next/image";

interface PodcastCardProps {
  episode: {
    thumbail: string;
    title: string;
    description: string;
  };
}

export default function PodcastCard({ episode }: PodcastCardProps) {
  return (
    <div className="box w-[300px] bg-[#F5F5DD] rounded-[20px] overflow-hidden">
      <Image
        src={episode.thumbail}
        width={300}
        height={300}
        alt={`${episode.title} logo`}
      />
      <div className="textContent">
        <h1 className="title my-2 pl-7 text-xl   text-[black] font-bold">
          {episode.title}
        </h1>
        <div className="description pb-4 px-7 flex w-full items-center gap-1 justify-between">
          <p className="paragraph w-full text-[black]  block">
            {episode.description}
          </p>

          <CirclePlay className="inline" size={48} color="black" />
        </div>
      </div>
    </div>
  );
}
