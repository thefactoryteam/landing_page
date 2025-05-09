// 'use client';
// import { useState, useEffect, useCallback } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import './NeonCursor.css';

// const NeonCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   const trailControls = useAnimation();
//   const glowControls = useAnimation();

//   // Mouse move event
//   const handleMouseMove = useCallback((e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   }, []);

//   // Click effects
//   const handleMouseDown = () => setIsClicking(true);
//   const handleMouseUp = () => setIsClicking(false);

//   // Hover effects
//   const handleMouseOver = useCallback((e) => {
//     const target = e.target;
//     if (target.matches('a, button, input, [data-hover="true"]')) {
//       setIsHovering(true);
//       void trailControls.start({
//         scale: 1.6,
//         borderColor: 'rgb(255, 150, 50)',
//         borderWidth: '3px',
//       });
//       void glowControls.start({
//         scale: 2.5,
//         opacity: 0.8,
//       });
//     }
//   }, [trailControls, glowControls]);

//   const handleMouseOut = useCallback(() => {
//     setIsHovering(false);
//     void trailControls.start({
//       scale: 1,
//       borderColor: 'rgb(236, 101, 23)',
//       borderWidth: '2px',
//     });
//     void glowControls.start({
//       scale: 1,
//       opacity: 0.4,
//     });
//   }, [trailControls, glowControls]);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);
//     window.addEventListener('mouseover', handleMouseOver);
//     window.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       window.removeEventListener('mouseover', handleMouseOver);
//       window.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, [handleMouseMove, handleMouseOver, handleMouseOut]);

//   return (
//     <div className="neon-cursor-container">
//       {/* Main Cursor */}
//       <motion.div
//         className="cursor-main"
//         animate={{
//           x: position.x - 9,  // Adjusted for larger size
//           y: position.y - 9,
//           scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 20,
//           stiffness: 400,
//           mass: 0.5,
//         }}
//       />

//       {/* Cursor Trail */}
//       <motion.div
//         className="cursor-trail"
//         animate={{
//           x: position.x - 19,  // Adjusted for larger size
//           y: position.y - 19,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 30,
//           stiffness: 200,
//           mass: 0.8,
//         }}
//         initial={false}
//       />

//       {/* Cursor Glow */}
//       <motion.div
//         className="cursor-glow"
//         animate={{
//           x: position.x - 30,  // Adjusted for larger size
//           y: position.y - 30,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 40,
//           stiffness: 150,
//           mass: 1,
//         }}
//         initial={false}
//       />
//     </div>
//   );
// };

// export default NeonCursor;



'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './NeonCursor.css';

const NeonCursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile after component has mounted
    setIsMobile(window.innerWidth < 768);
  }, []);

  // 💡 All hooks MUST be called unconditionally
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const trailControls = useAnimation();
  const glowControls = useAnimation();

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    if (target.matches('a, button, input, [data-hover="true"]')) {
      setIsHovering(true);
      void trailControls.start({
        scale: 1.6,
        borderColor: 'rgb(255, 150, 50)',
        borderWidth: '3px',
      });
      void glowControls.start({
        scale: 2.5,
        opacity: 0.8,
      });
    }
  }, [trailControls, glowControls]);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    void trailControls.start({
      scale: 1,
      borderColor: 'rgb(236, 101, 23)',
      borderWidth: '2px',
    });
    void glowControls.start({
      scale: 1,
      opacity: 0.4,
    });
  }, [trailControls, glowControls]);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile, handleMouseMove, handleMouseOver, handleMouseOut]);


  if (isMobile) return null;

  return (
    <div className="neon-cursor-container">
      {/* Neon cursor layers here */}
      <motion.div
        className="cursor-main"
        animate={{
          x: position.x - 9,
          y: position.y - 9,
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />
      <motion.div
        className="cursor-trail"
        animate={{
          x: position.x - 19,
          y: position.y - 19,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 150,
          mass: 1,
        }}
      />
    </div>
  );
};

export default NeonCursor;
