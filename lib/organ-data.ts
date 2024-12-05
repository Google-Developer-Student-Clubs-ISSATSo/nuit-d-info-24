// lib/organs-data.ts
export interface Organ {
    id: string;
    name: string;
    description: string;
    function: string;
    location: string;
    funFacts: string[];
    svgPath?: {
      d: string;
      transform?: string;
    };
  }
  
  export const ORGANS: Organ[] = [
    {
      id: 'heart',
      name: 'Heart',
      description: 'A muscular organ that pumps blood through the circulatory system',
      function: 'Circulate blood and supply oxygen to the body',
      location: 'Chest cavity, slightly left of center',
      funFacts: [
        'Beats about 100,000 times per day',
        'Can continue beating even when disconnected from the body',
        'Roughly the size of a closed fist'
      ],
      svgPath: {
        d: 'M250 300a50 50 0 1 0 100 0 50 50 0 1 0 -100 0z',
        transform: 'rotate(45 300 350)'
      }
    },
    {
      id: 'liver',
      name: 'Liver',
      description: 'Large organ that performs hundreds of vital functions',
      function: 'Detoxification, protein synthesis, and production of biochemicals',
      location: 'Upper right quadrant of the abdomen',
      funFacts: [
        'Can regenerate itself',
        'Largest internal organ in the human body',
        'Processes almost everything you eat, drink, and breathe'
      ],
      svgPath: {
        d: 'M300 400h100v80H300z',
      }
    }
  ];