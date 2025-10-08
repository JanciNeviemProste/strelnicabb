export interface Package {
  id: string;
  name: string;
  price: number;
  caliber: string;
  rounds: number;
  description: string;
  image?: string;
  gunType: 'pistol' | 'revolver' | 'rifle' | 'shotgun';
}

export const packages: Package[] = [
  {
    id: 'strelba-22lr',
    name: 'Streľba .22lr',
    price: 33,
    caliber: '.22 LR',
    rounds: 50,
    description: 'Skvelý balíček pre začiatočníkov. Nízky spätný ráz, ideálny na tréning presnosti.',
    gunType: 'pistol'
  },
  {
    id: 'strelba-9mm',
    name: 'Streľba 9mm Luger',
    price: 36,
    caliber: '9mm Luger',
    rounds: 50,
    description: 'Najobľúbenejšia ráža pre zábavu aj tréning. Perfektný pomer výkonu a kontroly.',
    gunType: 'pistol'
  },
  {
    id: 'strelba-45acp',
    name: 'Streľba .45ACP',
    price: 44,
    caliber: '.45 ACP',
    rounds: 50,
    description: 'Výkonná ráža s pôsobivým spätným rázom. Pre pokročilých strelcov.',
    gunType: 'pistol'
  },
  {
    id: 'revolver-38',
    name: 'Revolver .38 Special',
    price: 36,
    caliber: '.38 Special',
    rounds: 50,
    description: 'Klasický revolver s plynulým spúšťaním. Retro zážitok so modernou presnosťou.',
    gunType: 'revolver'
  },
  {
    id: 'revolver-45lc',
    name: 'Revolver .45 LC',
    price: 44,
    caliber: '.45 Long Colt',
    rounds: 50,
    description: 'Legendárna westernová ráža. Silný a autentický strelecký zážitok.',
    gunType: 'revolver'
  },
  {
    id: 'ar15-22lr',
    name: 'AR15 .22LR',
    price: 38,
    caliber: '.22 LR',
    rounds: 50,
    description: 'Taktická puška AR15 v ekonomickej ráži. Zábava s taktickým nástrojom.',
    gunType: 'rifle'
  },
  {
    id: 'stribog',
    name: 'Samopal STRIBOG',
    price: 41,
    caliber: '9mm',
    rounds: 50,
    description: 'Moderný samopal s rýchlou kadencou. Adrenalínový zážitok pre náročných.',
    gunType: 'rifle'
  },
  {
    id: 'brokovnica',
    name: 'Brokovnica 12Ga',
    price: 36,
    caliber: '12 Gauge',
    rounds: 25,
    description: 'Výkonná brokovnica pre skutočný zážitok. Sila a presnosť v jednom.',
    gunType: 'shotgun'
  }
];

export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};

export const getPackagesByGunType = (gunType: string): Package[] => {
  if (gunType === 'all') return packages;
  return packages.filter(pkg => pkg.gunType === gunType);
};
