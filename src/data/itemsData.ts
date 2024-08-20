// src/data/itemsData.ts
export type Item = {
    id: string;
    name: string;
    basePrice: number;
    discountedPrice: number;
  };
  
  export const itemsData: { [key: string]: Item[] } = {
    'Animal Feed': [
      { id: '1', name: 'Animal Feed 1', basePrice: 100, discountedPrice: 70 },
      { id: '2', name: 'Animal Feed 2', basePrice: 200, discountedPrice: 140 },
      { id: '3', name: 'Animal Feed 3', basePrice: 150, discountedPrice: 105 },
      { id: '4', name: 'Animal Feed 4', basePrice: 250, discountedPrice: 175 },
      { id: '5', name: 'Animal Feed 5', basePrice: 300, discountedPrice: 210 },
      { id: '6', name: 'Animal Feed 6', basePrice: 350, discountedPrice: 245 },
      { id: '7', name: 'Animal Feed 7', basePrice: 400, discountedPrice: 280 },
      { id: '8', name: 'Animal Feed 8', basePrice: 450, discountedPrice: 315 },
      { id: '9', name: 'Animal Feed 9', basePrice: 500, discountedPrice: 350 },
      { id: '10', name: 'Animal Feed 10', basePrice: 550, discountedPrice: 385 },
    ],
    'Human Food': [
      { id: '1', name: 'Human Food 1', basePrice: 150, discountedPrice: 105 },
      { id: '2', name: 'Human Food 2', basePrice: 250, discountedPrice: 175 },
      { id: '3', name: 'Human Food 3', basePrice: 200, discountedPrice: 140 },
      { id: '4', name: 'Human Food 4', basePrice: 300, discountedPrice: 210 },
      { id: '5', name: 'Human Food 5', basePrice: 350, discountedPrice: 245 },
      { id: '6', name: 'Human Food 6', basePrice: 400, discountedPrice: 280 },
      { id: '7', name: 'Human Food 7', basePrice: 450, discountedPrice: 315 },
      { id: '8', name: 'Human Food 8', basePrice: 500, discountedPrice: 350 },
      { id: '9', name: 'Human Food 9', basePrice: 550, discountedPrice: 385 },
      { id: '10', name: 'Human Food 10', basePrice: 600, discountedPrice: 420 },
    ],
    'Fertilizers': [
      { id: '1', name: 'Fertilizer 1', basePrice: 300, discountedPrice: 210 },
      { id: '2', name: 'Fertilizer 2', basePrice: 350, discountedPrice: 245 },
      { id: '3', name: 'Fertilizer 3', basePrice: 400, discountedPrice: 280 },
      { id: '4', name: 'Fertilizer 4', basePrice: 450, discountedPrice: 315 },
      { id: '5', name: 'Fertilizer 5', basePrice: 500, discountedPrice: 350 },
      { id: '6', name: 'Fertilizer 6', basePrice: 550, discountedPrice: 385 },
      { id: '7', name: 'Fertilizer 7', basePrice: 600, discountedPrice: 420 },
      { id: '8', name: 'Fertilizer 8', basePrice: 650, discountedPrice: 455 },
      { id: '9', name: 'Fertilizer 9', basePrice: 700, discountedPrice: 490 },
      { id: '10', name: 'Fertilizer 10', basePrice: 750, discountedPrice: 525 },
    ],
    'Miscellaneous Items': [
      { id: '1', name: 'Misc Item 1', basePrice: 400, discountedPrice: 280 },
      { id: '2', name: 'Misc Item 2', basePrice: 450, discountedPrice: 315 },
      { id: '3', name: 'Misc Item 3', basePrice: 500, discountedPrice: 350 },
      { id: '4', name: 'Misc Item 4', basePrice: 550, discountedPrice: 385 },
      { id: '5', name: 'Misc Item 5', basePrice: 600, discountedPrice: 420 },
      { id: '6', name: 'Misc Item 6', basePrice: 650, discountedPrice: 455 },
      { id: '7', name: 'Misc Item 7', basePrice: 700, discountedPrice: 490 },
      { id: '8', name: 'Misc Item 8', basePrice: 750, discountedPrice: 525 },
      { id: '9', name: 'Misc Item 9', basePrice: 800, discountedPrice: 560 },
      { id: '10', name: 'Misc Item 10', basePrice: 850, discountedPrice: 595 },
    ],
  };