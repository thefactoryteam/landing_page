import React from "react";
import { FaArrowUp } from "react-icons/fa6";


const RotatingCTA = () => {
  return (
    <div className="relative w-[90px] h-[90px]">
      {/* Rotating Circular Text */}
      <div className="absolute inset-0 animate-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 50, 50
                 m -45, 0
                 a 45,45 0 1,1 90,0
                 a 45,45 0 1,1 -90,0"
              fill="none"
            />
          </defs>
          <text
            fill="#10FF46"
            fontSize="8"
            fontWeight="bold"
            letterSpacing="1"
          >
            <textPath href="#textCircle" startOffset="0%">
              Get Started · Get Started · Get Started · Get Started ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Static Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-[#10FF46] rounded-full flex items-center justify-center">
          <FaArrowUp className="text-black text-sm" />
        </div>
      </div>
    </div>
  );
};

export default RotatingCTA;
