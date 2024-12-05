'use client';
import React, { useState } from 'react';
import { OrganModal } from './OrganModal';
import { ORGANS, Organ } from '@/lib/organ-data';

export function AnatomyDiagram() {
  const [selectedOrgan, setSelectedOrgan] = useState<Organ | null>(null);

  const handleOrganClick = (organ: Organ) => {
    setSelectedOrgan(organ);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 500 800" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Head */}
        <ellipse 
          cx="250" 
          cy="120" 
          rx="60" 
          ry="80" 
          fill="rgba(220,220,220,0.2)" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Neck */}
        <path 
          d="M230,200 Q250,220 270,200" 
          fill="none" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Shoulders */}
        <path 
          d="M200,240 Q250,220 300,240" 
          fill="rgba(220,220,220,0.1)" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Torso */}
        <path 
          d="M200,240 
             Q180,300 200,370 
             Q220,440 250,470 
             Q280,440 300,370 
             Q320,300 300,240" 
          fill="rgba(220,220,220,0.2)" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Arms */}
        <path 
          d="M200,240 Q150,300 160,380 L140,450" 
          fill="none" 
          stroke="#666" 
          strokeWidth="1"
        />
        <path 
          d="M300,240 Q350,300 340,380 L360,450" 
          fill="none" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Legs */}
        <path 
          d="M200,620 
             Q180,680 200,750 
             M300,620 
             Q320,680 300,750" 
          fill="none" 
          stroke="#666" 
          strokeWidth="1"
        />

        {/* Organ Clickable Areas */}
        {ORGANS.map((organ) => (
          <g 
            key={organ.id}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => handleOrganClick(organ)}
          >
            {organ.svgPath && (
              <path
                d={organ.svgPath.d}
                transform={organ.svgPath.transform}
                fill="rgba(255,0,0,0.3)"
                stroke="red"
                strokeWidth="2"
              />
            )}
          </g>
        ))}
      </svg>

      <OrganModal 
        organ={selectedOrgan}
        open={!!selectedOrgan}
        onOpenChange={() => setSelectedOrgan(null)}
      />
    </div>
  );
}