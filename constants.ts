import { ElementInfo } from './types';

export const ELEMENT_MAP: Record<number, ElementInfo> = {
  1: { 
    element: '金', 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50', 
    borderColor: 'border-yellow-200',
    hex: '#CA8A04',
    crystals: '白水晶、月光石、鈦晶', 
    crystalColors: ['#F5F5F5', '#FFD700'] 
  },
  2: { 
    element: '水', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50', 
    borderColor: 'border-blue-200',
    hex: '#2563EB',
    crystals: '黑曜石、藍玉髓、海藍寶', 
    crystalColors: ['#000000', '#3B82F6'] 
  },
  3: { 
    element: '火', 
    color: 'text-red-600', 
    bg: 'bg-red-50', 
    borderColor: 'border-red-200',
    hex: '#DC2626',
    crystals: '紫水晶、粉晶、紅紋石', 
    crystalColors: ['#EF4444', '#A855F7', '#EC4899'] 
  },
  4: { 
    element: '木', 
    color: 'text-green-600', 
    bg: 'bg-green-50', 
    borderColor: 'border-green-200',
    hex: '#16A34A',
    crystals: '綠幽靈、葡萄石、孔雀石', 
    crystalColors: ['#22C55E'] 
  },
  5: { 
    element: '土', 
    color: 'text-amber-700', 
    bg: 'bg-amber-50', 
    borderColor: 'border-amber-200',
    hex: '#B45309',
    crystals: '黃水晶、虎眼石', 
    crystalColors: ['#D97706', '#92400E'] 
  },
  6: { 
    element: '金', 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50', 
    borderColor: 'border-yellow-200',
    hex: '#CA8A04',
    crystals: '白水晶、月光石、金髮晶', 
    crystalColors: ['#F5F5F5', '#FFD700'] 
  },
  7: { 
    element: '水', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50', 
    borderColor: 'border-blue-200',
    hex: '#2563EB',
    crystals: '黑曜石、藍碧璽', 
    crystalColors: ['#000000', '#3B82F6'] 
  },
  8: { 
    element: '火', 
    color: 'text-red-600', 
    bg: 'bg-red-50', 
    borderColor: 'border-red-200',
    hex: '#DC2626',
    crystals: '紅髮晶、草莓晶、紫黃晶', 
    crystalColors: ['#EF4444', '#A855F7'] 
  },
  9: { 
    element: '木', 
    color: 'text-green-600', 
    bg: 'bg-green-50', 
    borderColor: 'border-green-200',
    hex: '#16A34A',
    crystals: '綠髮晶、捷克隕石', 
    crystalColors: ['#22C55E'] 
  },
};

export const DEFAULT_ELEMENT: ElementInfo = { 
  element: '?', 
  color: 'text-gray-500', 
  bg: 'bg-gray-50', 
  borderColor: 'border-gray-200',
  hex: '#9CA3AF',
  crystals: 'N/A', 
  crystalColors: [] 
};

// SVG Coordinates
export const COORDS = {
  // Base Line
  I: { x: 130, y: 350 }, J: { x: 170, y: 350 }, K: { x: 230, y: 350 }, L: { x: 270, y: 350 },
  // Parents
  M: { x: 150, y: 280 }, N: { x: 250, y: 280 }, 
  // Main
  O: { x: 200, y: 200 }, 
  // Youth (Left)
  T: { x: 90, y: 280 }, S: { x: 120, y: 230 }, U: { x: 60, y: 230 },
  // Late (Right)
  V: { x: 280, y: 230 }, W: { x: 310, y: 280 }, X: { x: 340, y: 230 },
  // Middle (Top)
  P: { x: 160, y: 130 }, Q: { x: 240, y: 130 }, R: { x: 200, y: 80 },
};