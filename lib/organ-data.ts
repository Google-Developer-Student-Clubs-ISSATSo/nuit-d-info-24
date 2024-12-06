import { ReactNode } from "react";
import heartImage from "@/public/images/Heart.svg";
import liverImage from "@/public/images/Liver.svg";
// lib/organs-data.ts
export interface Organ {
  id: string;
  name: string;
  description: string;
  function: string;
  location: string;
  funFacts: string[];
  position: {
    x: number; // X coordinate (percentage from left)
    y: number; // Y coordinate (percentage from top)
    width: number; // Width of the organ image (percentage)
    height: number; // Height of the organ image (percentage)
    rotation?: number; // Optional rotation in degrees
  };
  svgImportPath?: any;
}

export const ORGANS: Organ[] = [
  {
    id: "heart",
    name: "Heart",
    description:
      "A muscular organ that pumps blood through the circulatory system",
    function: "Circulate blood and supply oxygen to the body",
    location: "Chest cavity, slightly left of center",
    funFacts: [
      "Beats about 100,000 times per day",
      "Can continue beating even when disconnected from the body",
      "Roughly the size of a closed fist",
    ],
    position: {
      x: 50, // 48% from left
      y: 20, // 30% from top
      width: 15, // 15% of container width
      height: 15, // 15% of container height
      rotation: 45,
    },
    svgImportPath: heartImage,
  },
  {
    id: "liver",
    name: "Liver",
    description:
      "A muscular organ that pumps blood through the circulatory system",
    function: "Circulate blood and supply oxygen to the body",
    location: "Chest cavity, slightly left of center",
    funFacts: [
      "Beats about 100,000 times per day",
      "Can continue beating even when disconnected from the body",
      "Roughly the size of a closed fist",
    ],
    position: {
      x: 40, // 48% from left
      y: 30, // 30% from top
      width: 18, // 15% of container width
      height: 18, // 15% of container height
      rotation: 45,
    },
    svgImportPath: liverImage,
  },
];
