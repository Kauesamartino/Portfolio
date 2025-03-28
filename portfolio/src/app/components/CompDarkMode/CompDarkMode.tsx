'use client';
import { useState } from 'react';

const CompDarkMode = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`cursor-pointer relative h-5 w-9 rounded-full transition-colors duration-300 ease-in-out
          ${isOn ? 'bg-green-500' : 'bg-gray-200'}
        `}
        aria-label="Toggle Dark Mode"
      >
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 ease-in-out
            ${isOn ? 'left-[calc(100%-1.1rem)]' : 'left-0.5'}
          `}
        />
      </button>
      <span className="text-xs font-medium text-white opacity-80">
        {isOn ? 'Dark' : 'Light'}
      </span>
    </div>
  );
};

export default CompDarkMode;
