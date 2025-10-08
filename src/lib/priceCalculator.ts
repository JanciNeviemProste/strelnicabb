import type { Package } from '../data/packages';
import type { PricingItem } from '../data/pricing';

export interface BookingPrice {
  rangePrice: number;
  packagesPrice: number;
  storagePrice: number;
  totalPrice: number;
  duration: number;
}

/**
 * Vypočíta celkovú cenu rezervácie
 */
export const calculateBookingPrice = (
  rangePricing: PricingItem,
  duration: number,
  selectedPackages: Package[] = [],
  shortGunStorage: number = 0,
  longGunStorage: number = 0
): BookingPrice => {
  // Cena za strelisko
  const rangePrice = rangePricing.price * duration;

  // Cena za balíčky
  const packagesPrice = selectedPackages.reduce((total, pkg) => total + pkg.price, 0);

  // Cena za uskladnenie
  const shortStoragePrice = shortGunStorage * 7;
  const longStoragePrice = longGunStorage * 10;
  const storagePrice = shortStoragePrice + longStoragePrice;

  // Celková cena
  const totalPrice = rangePrice + packagesPrice + storagePrice;

  return {
    rangePrice,
    packagesPrice,
    storagePrice,
    totalPrice,
    duration
  };
};

/**
 * Formátuje cenu do slovenského formátu
 */
export const formatPrice = (price: number): string => {
  return `${price.toFixed(2)}€`;
};

/**
 * Vypočíta zľavu
 */
export const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice * (discountPercent / 100);
};

/**
 * Aplikuje zľavu na cenu
 */
export const applyDiscount = (price: number, discountPercent: number): number => {
  const discount = calculateDiscount(price, discountPercent);
  return price - discount;
};
