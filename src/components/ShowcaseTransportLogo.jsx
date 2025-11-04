// src/components/ShowcaseTransportLogo.jsx

export default function ShowcaseTransportLogo({ className = '', size = 'large' }) {
  const sizes = {
    small: { width: 120, height: 120, fontSize: 32 },
    medium: { width: 180, height: 180, fontSize: 48 },
    large: { width: 240, height: 240, fontSize: 64 }
  };

  const { width, height, fontSize } = sizes[size] || sizes.large;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00A854" />
        </linearGradient>
        
        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle background */}
      <circle cx="120" cy="120" r="115" fill="#1a2332" stroke="url(#greenGradient)" strokeWidth="3"/>

      {/* Road/highway element at bottom */}
      <g>
        <path
          d="M 40 160 Q 120 180 200 160 L 200 200 Q 120 220 40 200 Z"
          fill="url(#roadGradient)"
          opacity="0.6"
        />
        {/* Road lines */}
        <line x1="80" y1="170" x2="85" y2="190" stroke="#FFD166" strokeWidth="2" opacity="0.8"/>
        <line x1="110" y1="175" x2="115" y2="195" stroke="#FFD166" strokeWidth="2" opacity="0.8"/>
        <line x1="140" y1="175" x2="145" y2="195" stroke="#FFD166" strokeWidth="2" opacity="0.8"/>
        <line x1="170" y1="170" x2="175" y2="190" stroke="#FFD166" strokeWidth="2" opacity="0.8"/>
      </g>

      {/* Stylized truck silhouette */}
      <g transform="translate(60, 80)">
        {/* Trailer */}
        <rect x="0" y="20" width="70" height="30" rx="2" fill="url(#greenGradient)" filter="url(#glow)"/>
        <rect x="2" y="22" width="66" height="26" rx="1" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
        
        {/* Cab */}
        <path
          d="M 70 25 L 70 50 L 100 50 L 100 35 L 90 25 Z"
          fill="url(#greenGradient)"
          filter="url(#glow)"
        />
        <polygon points="90,25 100,35 100,30 95,25" fill="#FFFFFF" opacity="0.4"/>
        
        {/* Wheels */}
        <circle cx="15" cy="52" r="5" fill="#2a2a2a" stroke="#FFD166" strokeWidth="1.5"/>
        <circle cx="15" cy="52" r="2.5" fill="#FFD166"/>
        
        <circle cx="55" cy="52" r="5" fill="#2a2a2a" stroke="#FFD166" strokeWidth="1.5"/>
        <circle cx="55" cy="52" r="2.5" fill="#FFD166"/>
        
        <circle cx="85" cy="52" r="5" fill="#2a2a2a" stroke="#FFD166" strokeWidth="1.5"/>
        <circle cx="85" cy="52" r="2.5" fill="#FFD166"/>

        {/* Headlight detail */}
        <circle cx="98" cy="40" r="2" fill="#FFD700" opacity="0.8"/>
      </g>

      {/* "ST" letters - modern geometric style */}
      <g transform="translate(70, 110)">
        {/* S - Fixed to not be backwards */}
        <path
          d="M 45 0 L 20 0 Q 10 0 10 10 Q 10 17 20 17 L 35 17 Q 45 17 45 27 Q 45 35 35 35 L 10 35"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* T */}
        <line x1="60" y1="0" x2="100" y2="0" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round"/>
        <line x1="80" y1="0" x2="80" y2="35" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round"/>
      </g>

      {/* Motion lines for speed effect */}
      <g opacity="0.4">
        <line x1="30" y1="100" x2="50" y2="100" stroke="url(#greenGradient)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="25" y1="115" x2="50" y2="115" stroke="url(#greenGradient)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="130" x2="50" y2="130" stroke="url(#greenGradient)" strokeWidth="2" strokeLinecap="round"/>
      </g>

      {/* Decorative corner accents */}
      <path d="M 20 20 L 40 20 L 40 22 L 22 22 L 22 40 L 20 40 Z" fill="url(#greenGradient)" opacity="0.6"/>
      <path d="M 220 20 L 200 20 L 200 22 L 218 22 L 218 40 L 220 40 Z" fill="url(#greenGradient)" opacity="0.6"/>
      <path d="M 220 220 L 200 220 L 200 218 L 218 218 L 218 200 L 220 200 Z" fill="url(#greenGradient)" opacity="0.6"/>
      <path d="M 20 220 L 40 220 L 40 218 L 22 218 L 22 200 L 20 200 Z" fill="url(#greenGradient)" opacity="0.6"/>
    </svg>
  );
}

