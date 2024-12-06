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
    },
    {
      id: 'lungs',
      name: 'Lungs',
      description: 'Pair of spongy, air-filled organs crucial for respiration',
      function: 'Gas exchange - bringing oxygen into the body and removing carbon dioxide',
      location: 'Chest cavity, protected by the ribcage',
      funFacts: [
        'If spread out, lungs would cover an area roughly the size of a tennis court',
        'We breathe about 22,000 times per day',
        'The right lung is slightly larger than the left lung'
      ],
      svgPath: {
        d: 'M250 350 Q200 300, 250 250 T300 350 M350 350 Q400 300, 350 250 T300 350z',
      }
    },
    {
      id: 'brain',
      name: 'Brain',
      description: 'The central organ of the human nervous system',
      function: 'Control center for all body functions, thinking, and processing information',
      location: 'Inside the skull',
      funFacts: [
        'Contains approximately 86 billion neurons',
        'Uses 20% of the body\'s total energy',
        'Can generate about 70,000 thoughts per day'
      ],
      svgPath: {
        d: 'M280 250 Q350 200, 420 250 T500 250 Q450 300, 350 300 T280 250z',
        transform: 'rotate(10 390 275)'
      }
    },
    {
      id: 'kidneys',
      name: 'Kidneys',
      description: 'Bean-shaped organs that filter blood and remove waste',
      function: 'Waste removal, blood pressure regulation, and electrolyte balance',
      location: 'Lower back, one on each side of the spine',
      funFacts: [
        'Filter about 180 liters of blood every day',
        'Capable of filtering out toxins and excess water',
        'Each kidney contains about 1 million filtering units'
      ],
      svgPath: {
        d: 'M280 400 Q250 380, 250 350 T280 420 M420 400 Q450 380, 450 350 T420 420z',
      }
    },
    {
      id: 'skin',
      name: 'Skin',
      description: 'The body\'s largest organ, forming a protective barrier',
      function: 'Protection, temperature regulation, sensation, and vitamin D synthesis',
      location: 'Covers the entire external surface of the body',
      funFacts: [
        'An average adult has about 2 square meters of skin',
        'Completely renews itself every 27 days',
        'Contains more than 11 miles of blood vessels'
      ],
      svgPath: {
        d: 'M200 200 L400 200 L400 500 L200 500 Z',
        transform: 'scale(0.8)'
      }
    }
  ];