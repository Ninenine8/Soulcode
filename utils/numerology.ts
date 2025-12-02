import { NumerologyResult } from '../types';

export const reduceToSingleDigit = (num: number): number => {
  let n = Math.abs(num);
  while (n > 9) {
    n = n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return n === 0 ? 0 : n;
};

export const calculateNumerology = (dateString: string): NumerologyResult | null => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return null;

  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();

  const dayStr = day.toString().padStart(2, '0');
  const monthStr = month.toString().padStart(2, '0');
  const yearStr = year.toString();
  
  // --- Inner Triangle Calculation (Bottom Up) ---
  const val_I = reduceToSingleDigit(day);
  const val_J = reduceToSingleDigit(month);
  const val_K = reduceToSingleDigit(parseInt(yearStr.substring(0, 2))); // Century
  const val_L = reduceToSingleDigit(parseInt(yearStr.substring(2, 4))); // Year

  const val_M = reduceToSingleDigit(val_I + val_J);
  const val_N = reduceToSingleDigit(val_K + val_L);
  const val_O = reduceToSingleDigit(val_M + val_N);

  // --- Outer Triangles Calculation (Extensions) ---
  
  // Left (Youth 21-40)
  const val_T = reduceToSingleDigit(val_I + val_M);
  const val_S = reduceToSingleDigit(val_J + val_M);
  const val_U = reduceToSingleDigit(val_T + val_S);

  // Right (Late 61+)
  const val_V = reduceToSingleDigit(val_K + val_N);
  const val_W = reduceToSingleDigit(val_L + val_N);
  const val_X = reduceToSingleDigit(val_V + val_W);

  // Top (Middle 41-60)
  const val_P = reduceToSingleDigit(val_M + val_O);
  const val_Q = reduceToSingleDigit(val_N + val_O);
  const val_R = reduceToSingleDigit(val_P + val_Q);

  return {
    dateDetails: { day: dayStr, month: monthStr, year: yearStr },
    inner: { I: val_I, J: val_J, K: val_K, L: val_L, M: val_M, N: val_N, O: val_O },
    outer: { 
      left: { top: val_U, left: val_T, right: val_S, numbers: [val_T, val_S, val_U] },
      right: { top: val_X, left: val_V, right: val_W, numbers: [val_V, val_W, val_X] },
      top: { top: val_R, left: val_P, right: val_Q, numbers: [val_P, val_Q, val_R] }
    }
  };
};