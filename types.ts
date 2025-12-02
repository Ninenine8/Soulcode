export interface ElementInfo {
  element: string;
  color: string; // Tailwind text class
  bg: string; // Tailwind bg class
  borderColor: string; // Tailwind border class
  hex: string; // Main hex color for SVG
  crystals: string;
  crystalColors: string[];
}

export interface NumerologyInner {
  I: number; // Day reduced
  J: number; // Month reduced
  K: number; // Year part 1 reduced
  L: number; // Year part 2 reduced
  M: number; // I + J
  N: number; // K + L
  O: number; // M + N (Main Character)
}

export interface NumerologyOuterTriangle {
  top: number; // Apex of the sub-triangle
  left: number; // Base left
  right: number; // Base right
  numbers: number[]; // Array for easy mapping
}

export interface NumerologyOuter {
  left: NumerologyOuterTriangle; // Youth
  right: NumerologyOuterTriangle; // Late
  top: NumerologyOuterTriangle; // Middle
}

export interface NumerologyResult {
  dateDetails: {
    day: string;
    month: string;
    year: string;
  };
  inner: NumerologyInner;
  outer: NumerologyOuter;
}

export type Coordinate = { x: number; y: number };