'use client';
import React, { useState } from 'react';
import { OrganModal } from './OrganModal';
import { ORGANS, Organ } from '@/lib/organ-data';
import { Button } from '@/components/ui/button';

export function AnatomyDiagram() {
  const [selectedOrgan, setSelectedOrgan] = useState<Organ | null>(null);

  const handleOrganClick = (organ: Organ) => {
    setSelectedOrgan(organ);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg 
        viewBox="0 0 500 800" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full"
      >
<ellipse 
  cx="250" 
  cy="90" 
  rx="50" 
  ry="40" 
  fill="rgba(220,220,220,0.2)"
  stroke="#666"
/>        <path 
          d="M250 50 L200 750 L300 750 Z" 
          fill="#f0f0f0" 
          stroke="#333" 
          strokeWidth="2"
        />

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