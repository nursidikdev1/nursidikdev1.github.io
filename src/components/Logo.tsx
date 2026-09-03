import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "flex items-center gap-3", 
  iconClassName = "w-10 h-8 sm:w-11 sm:h-9",
  showText = true,
  showSubtitle = true
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`group cursor-pointer select-none ${className}`}>
      {/* Precision Vector / PNG Image Logo */}
      <div className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${iconClassName}`}>
        {!imgError ? (
          <img
            src="/logo.png"
            alt="Dikdev Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_16px_rgba(245,158,11,0.55)]"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 1024 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_16px_rgba(245,158,11,0.55)]"
          >
            <defs>
              <linearGradient id="dikdev-gold-base" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAB800" />
                <stop offset="50%" stopColor="#E6A000" />
                <stop offset="100%" stopColor="#D48E00" />
              </linearGradient>
            </defs>

            {/* Left Main 'D' */}
            <path
              d="M 160 0 C 80 0, 40 40, 26 120 L 26 350 C 40 410, 75 440, 140 470 L 350 470 L 490 320 C 530 270, 570 190, 570 130 L 450 0 Z M 160 95 L 390 95 L 480 200 C 490 230, 480 280, 440 330 L 350 420 L 155 420 C 120 420, 100 395, 100 330 L 100 160 C 100 115, 120 95, 160 95 Z"
              fill="url(#dikdev-gold-base)"
              fillRule="evenodd"
            />

            {/* Right Main 'D' */}
            <path
              d="M 600 0 C 560 0, 520 20, 485 70 L 590 190 L 540 250 L 470 330 C 440 370, 440 420, 470 470 L 790 470 L 930 320 C 980 260, 1010 180, 1010 120 L 890 0 Z M 600 95 L 830 95 L 920 200 C 930 230, 920 280, 880 330 L 790 420 L 595 420 L 535 345 L 600 270 L 550 200 Z"
              fill="url(#dikdev-gold-base)"
              fillRule="evenodd"
            />

            {/* Left Lower Chamfer Wing */}
            <path
              d="M 120 415 C 40 415, 0 455, 0 535 C 0 615, 40 655, 120 655 L 350 655 L 490 505 L 400 415 Z"
              fill="url(#dikdev-gold-base)"
            />

            {/* Right Lower Chamfer Wing */}
            <path
              d="M 560 415 C 480 415, 440 455, 440 535 C 440 615, 480 655, 560 655 L 790 655 L 930 505 L 840 415 Z"
              fill="url(#dikdev-gold-base)"
            />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-extrabold text-xl tracking-wider text-white font-mono group-hover:text-amber-400 transition-colors">
              DIKDEV
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          </div>
          {showSubtitle && (
            <span className="text-[10px] text-amber-400/90 uppercase tracking-widest font-semibold mt-0.5 font-sans">
              AI Web Designer
            </span>
          )}
        </div>
      )}
    </div>
  );
};
