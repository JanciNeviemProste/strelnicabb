import { create } from 'zustand';
import { Package } from '../data/packages';
import { PricingItem } from '../data/pricing';

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  lanes: number;
  rangePricing: PricingItem;
  selectedPackages: Package[];
  shortGunStorage: number;
  longGunStorage: number;
  totalPrice: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

interface BookingState {
  bookings: Booking[];
  currentBooking: Partial<Booking> | null;

  // Actions
  setCurrentBooking: (booking: Partial<Booking> | null) => void;
  updateCurrentBooking: (updates: Partial<Booking>) => void;
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  cancelBooking: (id: string) => void;
  getBookingById: (id: string) => Booking | undefined;
  getBookingsByDate: (date: Date) => Booking[];
  clearCurrentBooking: () => void;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  bookings: [],
  currentBooking: null,

  setCurrentBooking: (booking) => {
    set({ currentBooking: booking });
  },

  updateCurrentBooking: (updates) => {
    set((state) => ({
      currentBooking: state.currentBooking
        ? { ...state.currentBooking, ...updates }
        : updates
    }));
  },

  addBooking: (booking) => {
    set((state) => ({
      bookings: [...state.bookings, booking]
    }));
  },

  updateBooking: (id, updates) => {
    set((state) => ({
      bookings: state.bookings.map((booking) =>
        booking.id === id ? { ...booking, ...updates } : booking
      )
    }));
  },

  cancelBooking: (id) => {
    set((state) => ({
      bookings: state.bookings.map((booking) =>
        booking.id === id ? { ...booking, status: 'cancelled' as const } : booking
      )
    }));
  },

  getBookingById: (id) => {
    return get().bookings.find((booking) => booking.id === id);
  },

  getBookingsByDate: (date) => {
    const dateStr = date.toDateString();
    return get().bookings.filter(
      (booking) => booking.date.toDateString() === dateStr
    );
  },

  clearCurrentBooking: () => {
    set({ currentBooking: null });
  }
}));
