"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Episode {
  id: number;
  title: string;
  thumbnail: string;
}

const episodes: Episode[] = Array(5).fill({
  id: 1,
  title: "Whale is whaling part 1",
  thumbnail: "/images/heart.png",
});

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(50);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Video Player */}
          <div className="relative rounded-3xl overflow-hidden bg-black aspect-video">
            <Image
              src="/images/heart.png"
              alt="Whale breaching"
              width={1280}
              height={720}
              className="object-cover"
              priority
            />
            {/* Video Controls */}
            {/* change it with a video */}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex flex-col gap-2">
                <div className="w-full bg-white/30 rounded-full h-1">
                  <div
                    className="bg-white h-1 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <SkipBack className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <SkipForward className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">
                Titre episode n°1
              </h1>
              <Button variant="secondary">Sauvegarde</Button>
            </div>
            <Card className="p-4 bg-[#007396] text-white border-none">
              <p className="font-medium">
                dans cette episode on va parler de............exemple exemple
                exemple
              </p>
              <p className="text-white/70 mt-2">
                jkhsqkdhuqhsqdhjkbhxvc,jwnckljqlgdyqfusdjmoqhbch,vwjxckjsfculqjsdj
                uiquqdhbqkdqsgqlqskdmqjisdgqdzydkqknxnhwhvcwkqpiduiscjmqsoudu
                ksbcnkjqsikadhskgchgfchj
              </p>
            </Card>
            <h2 className="text-xl font-bold text-white">Comments</h2>
            <Card className="p-4 bg-[#007396] text-white border-none">
              <p className="font-medium text-center">
                Aucun commentaire ajouté.
              </p>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="flex border-2  rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={episode.thumbnail}
                alt={episode.title}
                width={200}
                height={200}
                className="object-cover aspect-video"
              />
              <div className=" bg-black/50 flex items-center justify-end p-4">
                <h3 className="text-white font-bold text-lg text-right">
                  {episode.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
