export type GunCategory = 'pistol' | 'revolver' | 'rifle' | 'submachine' | 'shotgun';

export interface Gun {
  id: string;
  name: string;
  fullName: string;
  category: GunCategory;
  caliber: string;
  price: number;
  image: string;
  description?: string;
  available: boolean;
}

export interface AmmoPackage {
  id: string;
  caliber: string;
  quantity: number;
  price: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  includes: string[];
  popular?: boolean;
}

export interface OpeningHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export type ReservationType = 'individual' | 'full_range' | 'package';
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Reservation {
  id: string;
  type: ReservationType;
  date: Date;
  timeSlot: string;
  lane?: number;
  guns: string[];
  ammunition: { caliber: string; boxes: number }[];
  needsSupervision: boolean;
  customer: {
    name: string;
    email: string;
    phone: string;
    numberOfPeople: number;
    hasLicense: boolean;
    notes?: string;
  };
  pricing: {
    lanePrice: number;
    gunsPrice: number;
    ammoPrice: number;
    totalPrice: number;
  };
  status: ReservationStatus;
  createdAt: Date;
}

export interface BookingState {
  currentStep: number;
  reservationType: ReservationType | null;
  selectedDate: Date | null;
  selectedTimeSlot: string | null;
  selectedLane: number | null;
  selectedGuns: string[];
  selectedAmmunition: { caliber: string; boxes: number }[];
  needsSupervision: boolean;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    numberOfPeople: number;
    hasLicense: boolean;
    notes: string;
  };
}
