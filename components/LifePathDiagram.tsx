import React from 'react';
import { COORDS, ELEMENT_MAP, DEFAULT_ELEMENT } from '../constants';
import { NumerologyResult } from '../types';

interface LifePathDiagramProps {
  data: NumerologyResult;
}

const Node = ({ 
  x, 
  y, 
  val, 
  label, 
  isSpecial = false 
}: { 
  x: number; 
  y: number; 
  val: number; 
  label?: string; 
  isSpecial?: boolean;
}) => {
  const info = ELEMENT_MAP[val] || DEFAULT_ELEMENT;
  
  return (
    <g className="transition-all duration-500 hover:scale-110" style={{ transformOrigin: `${x}px ${y}px` }}>
      {/* Outer Glow for Special Nodes */}
      {isSpecial && (
        <circle cx={x} cy={y} r="20" fill={info.hex} className="opacity-20 animate-pulse" />
      )}
      
      {/* Main Circle */}
      <circle 
        cx={x} 
        cy={y} 
        r="14" 
        fill="white" 
        stroke={isSpecial ? info.hex : '#cbd5e1'} 
        strokeWidth={isSpecial ? 2.5 : 2}
        className="transition-colors duration-300"
      />
      
      {/* Number */}
      <text 
        x={x} 
        y={y} 
        dy=".35em" 
        textAnchor="middle" 
        className={`text-sm font-bold select-none ${isSpecial ? '' : 'fill-slate-700'}`}
        style={{ fill: isSpecial ? info.hex : undefined }}
      >
        {val}
      </text>

      {/* Label (Below) */}
      {label && (
        <text 
          x={x} 
          y={y + 28} 
          textAnchor="middle" 
          className="text-[10px] fill-slate-400 font-medium select-none"
        >
          {label}
        </text>
      )}

      {/* Element Label (Above - only for special nodes) */}
      {isSpecial && (
        <text 
          x={x} 
          y={y - 20} 
          textAnchor="middle" 
          className="text-[9px] font-bold fill-current select-none"
          style={{ fill: info.hex }}
        >
          {info.element}
        </text>
      )}
    </g>
  );
};

const Line = ({ from, to, dashed = false }: { from: {x: number, y: number}, to: {x: number, y: number}, dashed?: boolean }) => (
  <line 
    x1={from.x} 
    y1={from.y} 
    x2={to.x} 
    y2={to.y} 
    className="stroke-slate-300 stroke-2" 
    strokeDasharray={dashed ? "4" : "0"} 
    strokeLinecap="round"
  />
);

export const LifePathDiagram: React.FC<LifePathDiagramProps> = ({ data }) => {
  const { inner, outer } = data;

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] aspect-square relative select-none">
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg bg-white rounded-2xl">
          {/* Background Grid Pattern (Optional) */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
          </pattern>
          <rect width="400" height="400" fill="url(#grid)" />

          {/* Lines - Inner Triangle */}
          <Line from={COORDS.I} to={COORDS.M} />
          <Line from={COORDS.J} to={COORDS.M} />
          <Line from={COORDS.K} to={COORDS.N} />
          <Line from={COORDS.L} to={COORDS.N} />
          <Line from={COORDS.M} to={COORDS.O} />
          <Line from={COORDS.N} to={COORDS.O} />
          
          {/* Lines - Outer Extension Connections */}
          <Line from={COORDS.M} to={COORDS.P} dashed />
          <Line from={COORDS.O} to={COORDS.P} dashed />
          <Line from={COORDS.N} to={COORDS.Q} dashed />
          <Line from={COORDS.O} to={COORDS.Q} dashed />
          <Line from={COORDS.P} to={COORDS.R} dashed />
          <Line from={COORDS.Q} to={COORDS.R} dashed />

          <Line from={COORDS.I} to={COORDS.T} dashed />
          <Line from={COORDS.M} to={COORDS.T} dashed />
          <Line from={COORDS.M} to={COORDS.S} dashed /> 
          <Line from={COORDS.J} to={COORDS.S} dashed /> 
          <Line from={COORDS.T} to={COORDS.U} dashed />
          <Line from={COORDS.S} to={COORDS.U} dashed />

          <Line from={COORDS.K} to={COORDS.V} dashed />
          <Line from={COORDS.N} to={COORDS.V} dashed />
          <Line from={COORDS.L} to={COORDS.W} dashed />
          <Line from={COORDS.N} to={COORDS.W} dashed />
          <Line from={COORDS.V} to={COORDS.X} dashed />
          <Line from={COORDS.W} to={COORDS.X} dashed />

          {/* Nodes */}
          {/* Base */}
          <Node {...COORDS.I} val={inner.I} label="日" />
          <Node {...COORDS.J} val={inner.J} label="月" />
          <Node {...COORDS.K} val={inner.K} label="年1" />
          <Node {...COORDS.L} val={inner.L} label="年2" />
          
          {/* Parents */}
          <Node {...COORDS.M} val={inner.M} label="父" />
          <Node {...COORDS.N} val={inner.N} label="母" />
          
          {/* Apex - Main Character */}
          <Node {...COORDS.O} val={inner.O} label="主命" isSpecial />

          {/* Outer Triangles */}
          <Node {...COORDS.P} val={outer.top.left} />
          <Node {...COORDS.Q} val={outer.top.right} />
          <Node {...COORDS.R} val={outer.top.top} label="中年" isSpecial />

          <Node {...COORDS.T} val={outer.left.left} />
          <Node {...COORDS.S} val={outer.left.right} />
          <Node {...COORDS.U} val={outer.left.top} label="青年" isSpecial />

          <Node {...COORDS.V} val={outer.right.left} />
          <Node {...COORDS.W} val={outer.right.right} />
          <Node {...COORDS.X} val={outer.right.top} label="晚年" isSpecial />
          
        </svg>
      </div>
    </div>
  );
};