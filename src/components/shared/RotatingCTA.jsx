import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa6";

export default function CircularButton() {
  const [arrowDirection, setArrowDirection] = useState('up');
  const [isRotating, setIsRotating] = useState(true);
  
  // Toggle arrow direction every 3 seconds
  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setArrowDirection(prev => prev === 'up' ? 'down' : 'up');
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isRotating]);
  
  const toggleRotation = () => {
    setIsRotating(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div 
        className="relative w-40 h-40 bg-[#2BE028] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        {/* Circular text container */}
        <motion.div 
          className="absolute w-full h-full"
          animate={{ 
            rotate: arrowDirection === 'up' ? 360 : -360 
          }}
          initial={false}
          transition={{ 
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            direction: arrowDirection === 'up' ? 'normal' : 'reverse'
          }}
        >
          {/* Text path - using SVG for perfect circular text */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <path 
                id="textCirclePath" 
                d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                fill="transparent"
              />
            </defs>
            
            <text fill="white" fontSize="12" fontWeight="bold" letterSpacing="1">
              <textPath xlinkHref="#textCirclePath" startOffset="0%">
                get started · get started · get started ·  get started .
              </textPath>
            </text>
          </svg>
        </motion.div>
        
        {/* The arrow */}
        <motion.div 
          className="w-8 h-8 text-white"
          animate={{ 
            rotate: arrowDirection === 'up' ? 0 : 180 
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </motion.div>
      </div>
      
    </div>
  );
}