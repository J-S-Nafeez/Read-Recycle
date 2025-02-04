import React from 'react';
const Home = () => {
  return (
    <div style={{ backgroundColor: "#E8F5E9", marginTop: "80px" }}>
      <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
        {/* Background with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#4CAF50", stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: "#81C784", stopOpacity: 0.1 }} />
          </linearGradient>
          {/* Book shape */}
          <path id="bookPath" d="M0,0 h60 v80 h-60 q5,-40 0,-80" />
        </defs>

        {/* Main background */}
        <rect width="800" height="300" fill="url(#bgGradient)" />

        {/* Decorative circle elements */}
        <circle cx="100" cy="150" r="140" fill="#4CAF50" opacity="0.1" />
        <circle cx="700" cy="150" r="140" fill="#81C784" opacity="0.1" />

        {/* Stack of books on the left */}
        <g transform="translate(50,100)">
          <use xlinkHref="#bookPath" fill="#2E7D32" transform="rotate(-10)" />
          <use xlinkHref="#bookPath" fill="#388E3C" transform="translate(10,-10) rotate(-5)" />
          <use xlinkHref="#bookPath" fill="#43A047" transform="translate(20,-20)" />
        </g>

        {/* Recycling symbol */}
        <g transform="translate(650,150) scale(0.8)">
          <path d="M0,-40 L20,-20 L-20,-20 Z" fill="#4CAF50" transform="rotate(0)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,-40 L20,-20 L-20,-20 Z" fill="#4CAF50" transform="rotate(120)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="120 0 0"
              to="480 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,-40 L20,-20 L-20,-20 Z" fill="#4CAF50" transform="rotate(240)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="240 0 0"
              to="600 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Main title */}
        <text x="400" y="130" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#1B5E20" textAnchor="middle">
          Read & Recycle
        </text>

        {/* Subtitle */}
        <text x="400" y="180" fontFamily="Arial, sans-serif" fontSize="24" fill="#2E7D32" textAnchor="middle">
          Buy • Sell • Exchange
        </text>

        {/* Tagline */}
        <text x="400" y="220" fontFamily="Arial, sans-serif" fontSize="24" fill="#FF8C00" fontStyle="italic" textAnchor="middle">
          Lovely Professional University
        </text>

      </svg>
    </div>
  );
};

export default Home;
