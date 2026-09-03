import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title, actionButton }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
      <div className="flex items-baseline gap-3">
        <span className="text-amber-500 font-extrabold text-2xl sm:text-3xl font-mono tracking-tight">
          {number}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>

      {actionButton && (
        <button
          id={`btn-heading-${number.replace(/[^a-zA-Z0-9]/g, '')}`}
          onClick={actionButton.onClick}
          className="self-start sm:self-auto px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-300 bg-neutral-800/90 hover:bg-neutral-700 hover:text-white border border-neutral-700 rounded-md transition-all duration-200 shadow-sm"
        >
          {actionButton.label}
        </button>
      )}
    </div>
  );
};
