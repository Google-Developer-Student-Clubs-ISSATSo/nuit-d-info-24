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
    name: 'Cœur',
    description: 'Un organe musculaire qui pompe le sang à travers le système circulatoire. Il fonctionne de manière similaire à la circulation thermohaline de l\'océan, où les courants profonds sont entraînés par les variations de température et de salinité, agissant comme une pompe pour distribuer l\'eau autour du globe.',
    function: 'Faire circuler le sang et fournir de l\'oxygène au corps',
    location: 'Cavité thoracique, légèrement à gauche du centre',
    funFacts: [
      'Bat environ 100 000 fois par jour',
      'Peut continuer à battre même lorsqu\'il est déconnecté du corps',
      'Environ de la taille d\'un poing fermé'
    ],
    svgPath: {
      d: 'M250 300a50 50 0 1 0 100 0 50 50 0 1 0 -100 0z',
      transform: 'rotate(45 300 350)'
    }
  },
  {
    id: 'liver',
    name: 'Foie',
    description: 'Un organe de grande taille qui accomplit des centaines de fonctions vitales, comparable au rôle de l\'océan dans le traitement et la filtration des nutriments et des produits chimiques. Le foie filtre les toxines et produit des protéines essentielles, de la même manière que l\'océan filtre les nutriments et les minéraux pour la vie marine.',
    function: 'Détoxification, synthèse des protéines et production de biochimiques',
    location: 'Quadrant supérieur droit de l\'abdomen',
    funFacts: [
      'Peut se régénérer',
      'Plus grand organe interne du corps humain',
      'Traite presque tout ce que vous mangez, buvez et respirez'
    ],
    svgPath: {
      d: 'M300 400h100v80H300z',
    }
  },
  {
    id: 'lungs',
    name: 'Poumons',
    description: 'Une paire d\'organes spongieux et remplis d\'air essentiels à la respiration, tout comme le rôle de l\'océan dans les échanges gazeux. Tout comme l\'océan absorbe et libère le CO2 et l\'oxygène, les poumons gèrent l\'échange de gaz pour maintenir l\'équilibre.',
    function: 'Échange de gaz - apporter de l\'oxygène dans le corps et éliminer le dioxyde de carbone',
    location: 'Cavité thoracique, protégée par la cage thoracique',
    funFacts: [
      'S\'ils étaient étalés, les poumons couvriraient une superficie d\'environ un terrain de tennis',
      'Nous respirons environ 22 000 fois par jour',
      'Le poumon droit est légèrement plus grand que le poumon gauche'
    ],
    svgPath: {
      d: 'M250 350 Q200 300, 250 250 T300 350 M350 350 Q400 300, 350 250 T300 350z',
    }
  },
  {
    id: 'brain',
    name: 'Cerveau',
    description: 'L\'organe central du système nerveux humain, comparé à l\'écosystème de l\'océan en termes de complexité. Tout comme les courants marins et la vie marine interagissent pour créer un système dynamique, le cerveau coordonne les fonctions et les pensées du corps à travers ses réseaux complexes de neurones.',
    function: 'Centre de contrôle de toutes les fonctions corporelles, de la pensée et du traitement de l\'information',
    location: 'À l\'intérieur du crâne',
    funFacts: [
      'Contient environ 86 milliards de neurones',
      'Utilise 20 % de l\'énergie totale du corps',
      'Peut générer environ 70 000 pensées par jour'
    ],
    svgPath: {
      d: 'M280 250 Q350 200, 420 250 T500 250 Q450 300, 350 300 T280 250z',
      transform: 'rotate(10 390 275)'
    }
  },
  {
    id: 'kidneys',
    name: 'Reins',
    description: 'Des organes en forme de haricot qui filtrent le sang et éliminent les déchets, en miroir avec les processus naturels de filtration de l\'océan. Les reins purifient le sang, tout comme les marées et les courants marins aident à distribuer les nutriments et à éliminer les impuretés.',
    function: 'Élimination des déchets, régulation de la pression artérielle et équilibre électrolytique',
    location: 'Bas du dos, un de chaque côté de la colonne vertébrale',
    funFacts: [
      'Filtrent environ 180 litres de sang chaque jour',
      'Capables de filtrer les toxines et l\'eau excédentaire',
      'Chaque rein contient environ 1 million d\'unités filtrantes'
    ],
    svgPath: {
      d: 'M280 400 Q250 380, 250 350 T280 420 M420 400 Q450 380, 450 350 T420 420z',
    }
  },
  {
    id: 'skin',
    name: 'Peau',
    description: 'Le plus grand organe du corps, formant une barrière protectrice, semblable à la couche de surface de l\'océan qui protège contre les éléments extérieurs. Tout comme la surface de l\'océan gère la chaleur, les conditions météorologiques et soutient la vie, la peau aide à réguler la température corporelle, protège contre les agents pathogènes et synthétise la vitamine D.',
    function: 'Protection, régulation de la température, sensation et synthèse de la vitamine D',
    location: 'Couvre l\'ensemble de la surface externe du corps',
    funFacts: [
      'Un adulte moyen a environ 2 mètres carrés de peau',
      'Se renouvelle complètement tous les 27 jours',
      'Contient plus de 11 miles de vaisseaux sanguins'
    ],
    svgPath: {
      d: 'M200 200 L400 200 L400 500 L200 500 Z',
      transform: 'scale(0.8)'
    }
  },
  {
    id: 'eyes',
    name: 'Yeux',
    description: 'Des organes responsables de la vision, comparables à la profondeur et à la clarté de l\'océan qui permettent à la vie marine de naviguer et de percevoir leur environnement. Tout comme la surface de l\'océan reflète la lumière, les yeux captent la lumière et envoient des signaux au cerveau.',
    function: 'Vision et perception de la lumière',
    location: 'Devant la tête, à l\'intérieur des orbites',
    funFacts: [
      'Peuvent détecter des millions de couleurs',
      'S\'adaptent aux conditions lumineuses variables',
      'Chaque œil contient plus de 2 millions de pièces fonctionnelles'
    ],
    svgPath: {
      d: 'M280 180 Q320 150, 360 180 T400 180',
    }
  },
  {
    id: 'stomach',
    name: 'Estomac',
    description: 'Un organe qui décompose les aliments, comparable au rôle de l\'océan dans le traitement des nutriments et de la matière organique. Tout comme l\'océan a le phytoplancton pour décomposer la matière organique, l\'estomac utilise des acides et des enzymes pour digérer les aliments.',
    function: 'Digestion des aliments et absorption des nutriments',
    location: 'Quadrant supérieur gauche de l\'abdomen',
    funFacts: [
      'Peut se dilater pour contenir jusqu\'à 1,5 litre de nourriture',
      'Libère des sucs gastriques pour aider à la digestion',
      'A un revêtement protecteur pour éviter l\'auto-digestion'
    ],
    svgPath: {
      d: 'M250 350 C300 300, 350 300, 400 350 C350 400, 300 400, 250 350',
    }
  }
];
