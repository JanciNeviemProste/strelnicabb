export interface OpeningHour {
  day: string;
  dayEn: string;
  hours: string;
  isOpen: boolean;
}

export const openingHours: OpeningHour[] = [
  {
    day: 'Pondelok',
    dayEn: 'monday',
    hours: '17:00 - 20:00',
    isOpen: true
  },
  {
    day: 'Utorok',
    dayEn: 'tuesday',
    hours: 'Po dohode',
    isOpen: false
  },
  {
    day: 'Streda',
    dayEn: 'wednesday',
    hours: '17:00 - 20:00',
    isOpen: true
  },
  {
    day: 'Štvrtok',
    dayEn: 'thursday',
    hours: '17:00 - 20:00',
    isOpen: true
  },
  {
    day: 'Piatok',
    dayEn: 'friday',
    hours: 'Po dohode',
    isOpen: false
  },
  {
    day: 'Sobota',
    dayEn: 'saturday',
    hours: '15:00 - 18:00',
    isOpen: true
  },
  {
    day: 'Nedeľa',
    dayEn: 'sunday',
    hours: 'Po dohode',
    isOpen: false
  }
];

export const getOpeningHoursForDay = (dayEn: string): OpeningHour | undefined => {
  return openingHours.find(oh => oh.dayEn === dayEn.toLowerCase());
};

export const getTodayOpeningHours = (): OpeningHour => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1; // Convert Sunday (0) to 6, Monday (1) to 0, etc.
  return openingHours[dayIndex];
};

export const isOpenNow = (): boolean => {
  const today = getTodayOpeningHours();
  if (!today.isOpen) return false;

  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Parse hours like "17:00 - 20:00"
  const hoursMatch = today.hours.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
  if (!hoursMatch) return false;

  const openTime = parseInt(hoursMatch[1]) * 60 + parseInt(hoursMatch[2]);
  const closeTime = parseInt(hoursMatch[3]) * 60 + parseInt(hoursMatch[4]);

  return currentTime >= openTime && currentTime <= closeTime;
};
