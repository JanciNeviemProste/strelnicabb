export interface PricingItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  category: 'range' | 'storage';
}

export const pricing: PricingItem[] = [
  {
    id: 'single-lane',
    name: 'Strelisko (1 dráha)',
    price: 13,
    unit: 'hod',
    description: 'Prenájom jednej streľby pre individuálny tréning',
    category: 'range'
  },
  {
    id: 'full-range',
    name: 'Prenájom celej strelnice (4 dráhy)',
    price: 45,
    unit: 'hod',
    description: 'Exkluzívny prenájom celej strelnice pre skupiny alebo akcie',
    category: 'range'
  },
  {
    id: 'short-gun-storage',
    name: 'Zverenie krátkej zbrane',
    price: 7,
    unit: 'zbraň',
    description: 'Bezpečné uskladnenie krátkej zbrane v našom trezore',
    category: 'storage'
  },
  {
    id: 'long-gun-storage',
    name: 'Zverenie dlhej zbrane',
    price: 10,
    unit: 'zbraň',
    description: 'Bezpečné uskladnenie dlhej zbrane v našom trezore',
    category: 'storage'
  }
];

export const getPricingByCategory = (category: 'range' | 'storage'): PricingItem[] => {
  return pricing.filter(item => item.category === category);
};

export const getPricingById = (id: string): PricingItem | undefined => {
  return pricing.find(item => item.id === id);
};
