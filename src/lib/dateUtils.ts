import { format, addHours, isBefore, isAfter, startOfDay, endOfDay } from 'date-fns';
import { sk } from 'date-fns/locale';

/**
 * Formátuje dátum do slovenského formátu
 */
export const formatDate = (date: Date, formatStr: string = 'dd.MM.yyyy'): string => {
  return format(date, formatStr, { locale: sk });
};

/**
 * Formátuje dátum a čas do slovenského formátu
 */
export const formatDateTime = (date: Date): string => {
  return format(date, 'dd.MM.yyyy HH:mm', { locale: sk });
};

/**
 * Formátuje len čas
 */
export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm', { locale: sk });
};

/**
 * Pridá hodiny k dátumu
 */
export const addHoursToDate = (date: Date, hours: number): Date => {
  return addHours(date, hours);
};

/**
 * Kontroluje či je dátum v minulosti
 */
export const isPastDate = (date: Date): boolean => {
  return isBefore(date, new Date());
};

/**
 * Kontroluje či je dátum v budúcnosti
 */
export const isFutureDate = (date: Date): boolean => {
  return isAfter(date, new Date());
};

/**
 * Vráti začiatok dňa
 */
export const getStartOfDay = (date: Date): Date => {
  return startOfDay(date);
};

/**
 * Vráti koniec dňa
 */
export const getEndOfDay = (date: Date): Date => {
  return endOfDay(date);
};

/**
 * Kontroluje či sú dve časové úseky v konflikte
 */
export const hasTimeConflict = (
  start1: Date,
  end1: Date,
  start2: Date,
  end2: Date
): boolean => {
  return (
    (isAfter(start1, start2) && isBefore(start1, end2)) ||
    (isAfter(end1, start2) && isBefore(end1, end2)) ||
    (isBefore(start1, start2) && isAfter(end1, end2)) ||
    (start1.getTime() === start2.getTime())
  );
};

/**
 * Vypočíta dĺžku rezervácie v hodinách
 */
export const calculateDuration = (start: Date, end: Date): number => {
  const diffMs = end.getTime() - start.getTime();
  return diffMs / (1000 * 60 * 60);
};

/**
 * Generuje časové sloty pre daný deň
 */
export const generateTimeSlots = (
  date: Date,
  startHour: number,
  endHour: number,
  intervalMinutes: number = 60
): Date[] => {
  const slots: Date[] = [];
  const baseDate = new Date(date);
  baseDate.setHours(startHour, 0, 0, 0);

  const endDate = new Date(date);
  endDate.setHours(endHour, 0, 0, 0);

  let currentSlot = baseDate;
  while (currentSlot < endDate) {
    slots.push(new Date(currentSlot));
    currentSlot = new Date(currentSlot.getTime() + intervalMinutes * 60 * 1000);
  }

  return slots;
};
