// src/components/RoutePulse.jsx

export default function RoutePulse() {
  return (
    <div className="flex justify-center py-8">
      <svg
        width="280"
        height="80"
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto"
        aria-hidden="true"
      >
        {/* Dashed route path */}
        <path
          d="M 20 40 Q 70 20, 140 40 T 260 40"
          stroke="#002B36"
          strokeWidth="2"
          strokeDasharray="8 6"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Stop 1 - Animated circle */}
        <g className="animate-pulse-slow">
          <circle cx="20" cy="40" r="8" fill="#00CC6F" />
          <circle cx="20" cy="40" r="8" fill="#00CC6F" opacity="0.3">
            <animate
              attributeName="r"
              from="8"
              to="16"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Stop 2 - Animated circle with delay */}
        <g className="animate-pulse-slow" style={{ animationDelay: '0.7s' }}>
          <circle cx="140" cy="40" r="8" fill="#FFD166" />
          <circle cx="140" cy="40" r="8" fill="#FFD166" opacity="0.3">
            <animate
              attributeName="r"
              from="8"
              to="16"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="2s"
              begin="0.7s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Stop 3 - Animated circle with delay */}
        <g className="animate-pulse-slow" style={{ animationDelay: '1.4s' }}>
          <circle cx="260" cy="40" r="8" fill="#00CC6F" />
          <circle cx="260" cy="40" r="8" fill="#00CC6F" opacity="0.3">
            <animate
              attributeName="r"
              from="8"
              to="16"
              dur="2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

