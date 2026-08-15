import React from 'react';

interface BrandLogoProps {
  variant?: 'badge' | 'compact' | 'horizontal' | 'monogram';
  size?: number | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'badge',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Dimension resolver
  let dimension = 120;
  if (typeof size === 'number') {
    dimension = size;
  } else {
    switch (size) {
      case 'sm':
        dimension = 44;
        break;
      case 'md':
        dimension = 72;
        break;
      case 'lg':
        dimension = 140;
        break;
      case 'xl':
        dimension = 220;
        break;
      case 'hero':
        dimension = 320;
        break;
    }
  }

  // The Master Vector Emblem directly reflecting the uploaded logo
  const MasterEmblem = ({ width, height }: { width: number; height: number }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl select-none"
    >
      <defs>
        {/* Metallic Gold Gradients */}
        <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcedb4" />
          <stop offset="25%" stopColor="#dfba73" />
          <stop offset="50%" stopColor="#966d1f" />
          <stop offset="75%" stopColor="#f5e1a4" />
          <stop offset="100%" stopColor="#c59838" />
        </linearGradient>

        <linearGradient id="goldLetterGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#fae7b9" />
          <stop offset="30%" stopColor="#dca946" />
          <stop offset="60%" stopColor="#996e19" />
          <stop offset="85%" stopColor="#ebd79c" />
          <stop offset="100%" stopColor="#b8892d" />
        </linearGradient>

        <linearGradient id="goldHangerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c59838" />
          <stop offset="50%" stopColor="#fae7b9" />
          <stop offset="100%" stopColor="#966d1f" />
        </linearGradient>

        <radialGradient id="marbleTexture" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#faf7f0" />
          <stop offset="75%" stopColor="#f2ede2" />
          <stop offset="100%" stopColor="#e5ded0" />
        </radialGradient>

        {/* Subtle Drop Shadows */}
        <filter id="goldBevel" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1.5" dy="2.5" stdDeviation="2" floodColor="#4a350a" floodOpacity="0.45" />
        </filter>
        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Glow Ring */}
      <circle cx="250" cy="250" r="242" stroke="#dfba73" strokeWidth="1" strokeOpacity="0.3" fill="none" />

      {/* Double Concentric Gold Border */}
      <circle cx="250" cy="250" r="236" fill="url(#goldRimGrad)" filter="url(#goldBevel)" />
      <circle cx="250" cy="250" r="230" fill="#0d0d0e" stroke="url(#goldRimGrad)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="226" fill="url(#marbleTexture)" stroke="url(#goldRimGrad)" strokeWidth="4" />
      <circle cx="250" cy="250" r="218" fill="none" stroke="url(#goldRimGrad)" strokeWidth="1.5" strokeOpacity="0.75" />

      {/* Marble Subtle Organic Veins */}
      <path
        d="M90,180 Q160,210 210,170 T350,140 Q400,160 420,110"
        stroke="#dcd2be"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M70,300 Q150,330 240,290 T390,340"
        stroke="#dcd2be"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M180,90 Q220,150 200,240 T320,380"
        stroke="#dcd2be"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
      />

      {/* ======================= MONOGRAM AREA ======================= */}
      <g filter="url(#goldBevel)">
        
        {/* Capital 'F' */}
        {/* Main Stem of F */}
        <path
          d="M 178,60 L 202,60 L 202,235 C 196,244 186,252 165,254 L 160,250 C 182,246 186,236 186,220 L 186,85 L 178,85 Z"
          fill="url(#goldLetterGrad)"
        />
        {/* Top Serif and Horizontal Bar of F */}
        <path
          d="M 152,68 C 160,67 172,65 178,60 L 312,60 C 318,65 316,78 308,85 L 292,85 C 298,75 294,69 285,69 L 202,69 L 202,142 L 246,142 C 255,142 258,136 256,128 L 264,128 L 264,166 L 256,166 C 258,158 254,152 246,152 L 202,152 L 202,228 L 186,228 L 186,68 Z"
          fill="url(#goldLetterGrad)"
        />
        {/* Decorative flourish spur on F middle left */}
        <path
          d="M 186,146 C 165,152 144,170 144,170 C 152,160 166,154 186,152 Z"
          fill="url(#goldLetterGrad)"
        />

        {/* Interlocking 'S' */}
        {/* Upper curve of S */}
        <path
          d="M 314,120 C 314,92 290,75 258,75 C 242,75 228,82 220,90 C 228,88 238,94 238,104 C 238,114 230,122 220,122 C 210,122 202,114 202,102 C 202,80 226,62 262,62 C 304,62 344,88 344,128 C 344,162 316,192 272,216 C 252,227 236,242 224,258 C 242,246 268,236 295,236 C 336,236 348,272 342,305 L 324,305 C 330,278 320,252 288,252 C 254,252 230,270 205,296 C 182,319 164,324 145,315 C 130,308 122,294 122,274 C 122,242 148,212 186,192 C 220,174 278,146 298,130 C 310,120 314,112 314,120 Z"
          fill="url(#goldLetterGrad)"
        />

        {/* S Lower Circular Loop framing 47 */}
        <path
          d="M 285,250 C 335,270 348,310 338,348 C 322,400 256,428 198,422 C 150,416 120,380 120,340 C 120,296 156,256 200,240 C 182,248 168,266 168,290 C 168,336 210,380 262,380 C 308,380 336,346 332,310 C 328,278 302,260 274,254 Z"
          fill="url(#goldLetterGrad)"
        />

        {/* ================= 47 Inset Medallion ================= */}
        <circle cx="230" cy="275" r="46" fill="none" stroke="url(#goldLetterGrad)" strokeWidth="3" />
        
        {/* Roman/Serif "47" */}
        {/* Digit 4 */}
        <path
          d="M 216,296 L 216,282 L 192,282 L 192,274 L 214,244 L 224,244 L 224,274 L 234,274 L 234,282 L 224,282 L 224,296 Z M 216,274 L 216,258 L 202,274 Z"
          fill="url(#goldLetterGrad)"
        />
        {/* Digit 7 */}
        <path
          d="M 238,246 L 270,246 L 270,252 L 254,296 L 244,296 L 258,254 L 238,254 Z"
          fill="url(#goldLetterGrad)"
        />

        {/* ================= CLOTHES HANGER ON S ================= */}
        <g transform="translate(295, 162)">
          {/* Hanger Hook */}
          <path
            d="M 32,8 C 32,0 24,-6 18,-6 C 12,-6 8,0 12,6 C 14,8 18,12 20,18"
            fill="none"
            stroke="url(#goldHangerGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Hanger Triangular Body */}
          <path
            d="M 20,18 L 56,42 C 58,44 56,48 52,48 L -14,48 C -18,48 -20,44 -18,42 L 20,18 Z"
            fill="none"
            stroke="url(#goldHangerGrad)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Crossbar */}
          <line x1="-14" y1="47" x2="52" y2="47" stroke="url(#goldHangerGrad)" strokeWidth="2.5" />
        </g>
      </g>

      {/* ================= MID DIVIDER ORNAMENT ================= */}
      <g transform="translate(145, 348)" filter="url(#goldBevel)">
        <line x1="0" y1="5" x2="75" y2="5" stroke="url(#goldRimGrad)" strokeWidth="1.2" />
        <circle cx="2" cy="5" r="2.5" fill="url(#goldRimGrad)" />
        
        {/* Central Diamond Star */}
        <g transform="translate(105, 5)">
          <path d="M 0,-8 L 3,-2 L 9,0 L 3,2 L 0,8 L -3,2 L -9,0 L -3,-2 Z" fill="url(#goldRimGrad)" />
          <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
        </g>

        <circle cx="208" cy="5" r="2.5" fill="url(#goldRimGrad)" />
        <line x1="135" y1="5" x2="210" y2="5" stroke="url(#goldRimGrad)" strokeWidth="1.2" />
      </g>

      {/* ================= BRAND TEXT ================= */}
      <text
        x="250"
        y="390"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', 'Cinzel', 'Playfair Display', Georgia, serif"
        fontSize="29"
        fontWeight="700"
        letterSpacing="1.2"
        fill="url(#goldLetterGrad)"
        filter="url(#goldBevel)"
      >
        fashion_studio_47_
      </text>

      {/* ================= SUBTITLE ================= */}
      <text
        x="250"
        y="418"
        textAnchor="middle"
        fontFamily="'Manrope', -apple-system, sans-serif"
        fontSize="12.5"
        fontWeight="800"
        letterSpacing="3.8"
        fill="#8a6218"
      >
        STYLE  |  QUALITY  |  CONFIDENCE
      </text>

      {/* ================= BOTTOM ROYAL FILIGREE / CROWN ================= */}
      <g transform="translate(160, 442)" filter="url(#goldBevel)">
        {/* Left Scroll */}
        <path
          d="M 5,8 C 25,2 50,15 65,5 C 72,0 80,10 75,14 C 68,18 45,12 25,18 C 15,20 0,16 5,8 Z"
          fill="url(#goldRimGrad)"
        />
        {/* Right Scroll */}
        <path
          d="M 175,8 C 155,2 130,15 115,5 C 108,0 100,10 105,14 C 112,18 135,12 155,18 C 165,20 180,16 175,8 Z"
          fill="url(#goldRimGrad)"
        />
        {/* Center Crown / Fleur Motif */}
        <g transform="translate(90, 8)">
          <path
            d="M 0,-10 L 4,-3 L 8,-8 L 6,2 L -6,2 L -8,-8 L -4,-3 Z"
            fill="url(#goldRimGrad)"
          />
          <circle cx="0" cy="5" r="2" fill="url(#goldRimGrad)" />
        </g>
      </g>
    </svg>
  );

  // Variant: Full Circular Badge
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <MasterEmblem width={dimension} height={dimension} />
      </div>
    );
  }

  // Variant: Compact (for Navbar & Mobile Header)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
        <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
          <MasterEmblem width={dimension} height={dimension} />
        </div>
        <div className="flex flex-col text-left">
          <div className="font-luxury text-base sm:text-lg font-bold tracking-[0.2em] text-white uppercase leading-tight group-hover:text-[#dfba73] transition-colors">
            FASHION STUDIO 47
          </div>
          <div className="text-[10px] tracking-[0.25em] text-[#dfba73] uppercase font-sans font-semibold mt-0.5">
            STYLE • QUALITY • CONFIDENCE
          </div>
        </div>
      </div>
    );
  }

  // Variant: Horizontal Showcase
  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-5 ${className}`}>
        <div className="shrink-0 transition-transform duration-500 hover:scale-105">
          <MasterEmblem width={dimension} height={dimension} />
        </div>
        <div className="text-center sm:text-left">
          <span className="text-[11px] tracking-[0.3em] text-[#dfba73] uppercase font-sans font-bold block mb-1">
            OFFICIAL DIGITAL SHOWROOM
          </span>
          <h2 className="font-luxury text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
            FASHION STUDIO 47
          </h2>
          {showTagline && (
            <p className="text-xs tracking-[0.28em] text-white/70 uppercase font-sans font-medium mt-1">
              STYLE | QUALITY | CONFIDENCE
            </p>
          )}
        </div>
      </div>
    );
  }

  // Monogram Only
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <MasterEmblem width={dimension} height={dimension} />
    </div>
  );
};
