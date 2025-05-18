export interface BrewStep {
  time: string;
  water: number;
  detail: string;
}

export interface BrewMethod {
  id: string;
  name: string;
  ratio: number;
  guide: (beans: number) => BrewStep[];
  tips: {
    bitter: string;
    acidic: string;
  };
  ice: (beans: number) => number;
}

export interface ProcesMethod {
  id: string;
  name: string;
  temperature: string;
}

export const procesMethods: ProcesMethod[] = [
  { id: 'washed', name: 'Washed', temperature: '90–94°C' },
  { id: 'natural', name: 'Natural', temperature: '88–90°C' },
  { id: 'honey', name: 'Honey', temperature: '88–90°C' },
  { id: 'experimental', name: 'Experimental', temperature: '86-88°C' },
  { id: 'wethulled', name: 'Wet-Hulled', temperature: '90-92°C' },
  { id: 'natural-anaerobic', name: 'Natural Anaerobic', temperature: '86-88°C' },
];

export const brewMethods: BrewMethod[] = [
  {
    id: '1-10',
    name: '1:10 Ratio',
    ratio: 10,
    guide: (beans) => [
      { time: '0:00', water: beans * 2, detail: 'Bloom for 30s with swirl' },
      { time: '0:30', water: beans * 4, detail: 'Steady spiral pour' },
      { time: '1:30', water: beans * 4, detail: 'Top off remaining water and let drain' },
    ],
    tips: {
      bitter: 'Reduce temperature or coarsen grind.',
      acidic: 'Use finer grind or extend extraction time.',
    },
    ice: (beans) => beans * 0,
  },
  {
    id: '1-15',
    name: '1:15 Ratio',
    ratio: 15,
    guide: (beans) => [
      { time: '0:00', water: beans * 3, detail: 'Blooming with swirl' },
      { time: '0:30', water: beans * 5, detail: 'Slow spiral pour' },
      { time: '1:30', water: beans * 7, detail: 'Finish pour and wait to drain' },
    ],
    tips: {
      bitter: 'Grind coarser or reduce brew time.',
      acidic: 'Grind finer or increase water temperature.',
    },
    ice: (beans) => beans * 0,
  },
  {
    id: '1-16',
    name: '1:16 Ratio',
    ratio: 16,
    guide: (beans) => [
      { time: '0:00', water: beans * 3, detail: 'Bloom with gentle swirl' },
      { time: '0:45', water: beans * 6, detail: 'Slow continuous pour' },
      { time: '1:45', water: beans * 7, detail: 'Finish and drain' },
    ],
    tips: {
      bitter: 'Use cooler water or faster pour.',
      acidic: 'Pour slower or use hotter water.',
    },
    ice: (beans) => beans * 0,
  },
  {
    id: 'tetsu-46',
    name: 'Tetsu Katsuya 4:6 Method',
    ratio: 15,
    guide: (beans) => {
      const totalWater = beans * 15;
      const stepWater = totalWater / 5;
      return [
        { time: '0:00', water: stepWater, detail: 'First pour - affects sweetness' },
        { time: '0:45', water: stepWater, detail: 'Second pour - affects acidity' },
        { time: '1:30', water: stepWater, detail: 'Third pour - adjust strength' },
        { time: '2:15', water: stepWater, detail: 'Fourth pour - balance' },
        { time: '3:00', water: stepWater, detail: 'Final pour - complete brew' },
      ];
    },
    tips: {
      bitter: 'Use cooler water or reduce final pour.',
      acidic: 'Pour faster in second step or use hotter water.',
    },
    ice: (beans) => beans * 0,
  },
  {
    id: 'jeff-hoffman',
    name: 'Jeff Hoffman Method',
    ratio: 15,
    guide: (beans) => [
      { time: '0:00', water: beans * 2.5, detail: 'Bloom with gentle agitation' },
      { time: '0:40', water: beans * 5, detail: 'Quick circular pour to center' },
      { time: '1:20', water: beans * 7.5, detail: 'Pulse pour with 3x 10s intervals' },
    ],
    tips: {
      bitter: 'Use pulse pour to slow extraction.',
      acidic: 'Add gentle swirl at end of bloom.',
    },
    ice: (beans) => beans * 0,
  },
  {
    id: 'japanese-v60',
    name: 'Japanese V60 Ice Method',
    ratio: 12.5,
    guide: (beans) => [
      { time: '0:00', water: beans * 2, detail: 'Bloom with swirl' },
      { time: '0:30', water: beans * 5.5, detail: 'Continue pouring in slow circular pulses' },
      { time: '2:00', water: beans * 0, detail: 'Let the remaining water finish dripping' },
    ],
    tips: {
      bitter: 'Pour slower to control extraction.',
      acidic: 'Extend bloom time or increase temp.',
    },
    ice: (beans) => beans * 5,
  },
  {
    id: 'rao-spin',
    name: 'Rao Spin Method',
    ratio: 15,
    guide: (beans) => [
      { time: '0:00', water: beans * 3, detail: 'Bloom 45s, spin carafe after' },
      { time: '0:45', water: beans * 5, detail: 'Pulse pour and spin after each' },
      { time: '1:45', water: beans * 7, detail: 'Final pour and spin before drain' },
    ],
    tips: {
      bitter: 'Spin less or pour slower.',
      acidic: 'Spin more or use hotter water.',
    },
    ice: (beans) => beans * 0,
  },
];