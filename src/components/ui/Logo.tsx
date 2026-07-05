import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
  textPosition?: 'bottom' | 'right';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  light = false,
  textPosition = 'right' 
}) => {
  return (
    <div className={`inline-flex items-center ${textPosition === 'bottom' ? 'flex-col gap-2' : 'gap-3'} ${className}`}>
      {/* SVG Logo Mark */}
      <svg 
        viewBox="0 0 300 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 shrink-0 select-none"
      >
        {/* Grey background circle */}
        <circle cx="150" cy="100" r="75" fill={light ? '#3d4a45' : '#e4dfd6'} />

        {/* Green leaves - Top Left */}
        <g transform="translate(45, 30) rotate(-15)">
          <path 
            d="M25 40 C35 15, 65 20, 75 40 C55 60, 30 55, 25 40 Z" 
            fill="#84cc16" 
          />
          <path 
            d="M25 40 Q50 38, 75 40" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </g>
        <g transform="translate(75, 45) rotate(-35) scale(0.75)">
          <path 
            d="M25 40 C35 15, 65 20, 75 40 C55 60, 30 55, 25 40 Z" 
            fill="#84cc16" 
          />
          <path 
            d="M25 40 Q50 38, 75 40" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </g>

        {/* Green leaves - Bottom Right */}
        <g transform="translate(200, 95) rotate(15) scale(0.9)">
          <path 
            d="M25 40 C35 15, 65 20, 75 40 C55 60, 30 55, 25 40 Z" 
            fill="#84cc16" 
          />
          <path 
            d="M25 40 Q50 38, 75 40" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </g>
        <g transform="translate(225, 110) rotate(-5) scale(0.65)">
          <path 
            d="M25 40 C35 15, 65 20, 75 40 C55 60, 30 55, 25 40 Z" 
            fill="#84cc16" 
          />
          <path 
            d="M25 40 Q50 38, 75 40" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
        </g>

        {/* Rooftop Overlaps (Double gable roof "M" structure) */}
        {/* Left Roof */}
        <path 
          d="M50 130 L125 65 L175 110" 
          stroke={light ? '#ffffff' : '#14231f'} 
          strokeWidth="15" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Right Roof */}
        <path 
          d="M125 130 L200 65 L250 110" 
          stroke={light ? '#ffffff' : '#14231f'} 
          strokeWidth="15" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Windows */}
        {/* Left Window */}
        <g transform="translate(100, 95)">
          <rect 
            x="0" 
            y="0" 
            width="22" 
            height="22" 
            fill="none" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
            strokeLinejoin="round"
          />
          <line 
            x1="11" 
            y1="0" 
            x2="11" 
            y2="22" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
          />
          <line 
            x1="0" 
            y1="11" 
            x2="22" 
            y2="11" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
          />
        </g>
        
        {/* Right Window */}
        <g transform="translate(178, 95)">
          <rect 
            x="0" 
            y="0" 
            width="22" 
            height="22" 
            fill="none" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
            strokeLinejoin="round"
          />
          <line 
            x1="11" 
            y1="0" 
            x2="11" 
            y2="22" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
          />
          <line 
            x1="0" 
            y1="11" 
            x2="22" 
            y2="11" 
            stroke={light ? '#ffffff' : '#14231f'} 
            strokeWidth="3.5" 
          />
        </g>
      </svg>

      {/* Logo Typography */}
      {showText && (
        <span 
          className={`font-display font-extrabold tracking-tight text-xl leading-none select-none ${
            light ? 'text-paper-raised' : 'text-ink'
          }`}
        >
          Any<span className="text-verified-500">DomesticHelp</span>
        </span>
      )}
    </div>
  );
};
