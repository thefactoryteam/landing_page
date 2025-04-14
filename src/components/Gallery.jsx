// import React from "react";
// import { motion } from "framer-motion";
// import Img1 from "../assets/Rectangle 23.png";
// import Img2 from "../assets/Rectangle 24.png";
// import Img3 from "../assets/Rectangle 25.png";
// import Img4 from "../assets/Rectangle 26.png";
// import Img5 from "../assets/Rectangle 27.png";
// import Img6 from "../assets/Rectangle 28.png";
// import Img7 from "../assets/Rectangle 29.png";
// import Img8 from "../assets/Rectangle 30.png";
// import Img9 from "../assets/Rectangle 31.png";
// import Img10 from "../assets/Rectangle 32.png";

// const images = [
//     { src: Img1, height: "h-48", animation: { opacity: 0, y: 50 }, hoverEffect: { scale: 1.15, rotate: 3 } },
//     { src: Img2, height: "h-64", colSpan: "col-span-2", animation: { opacity: 0, scale: 0.5, rotateX: 20 }, hoverEffect: { scale: 1.1, rotateX: 5 } },
//     { src: Img3, height: "h-48", animation: { opacity: 0, rotate: -10, y: -50 }, hoverEffect: { rotate: 5, scale: 1.08 } },
//     { src: Img4, height: "h-56", animation: { opacity: 0, x: -100 }, hoverEffect: { scale: 1.1, rotateY: 5 } },
//     { src: Img6, height: "h-40", animation: { opacity: 0, y: 70 }, hoverEffect: { scale: 1.15, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" } },
//     { src: Img5, height: "h-60", colSpan: "col-span-2", animation: { opacity: 0, scale: 0.7, y: 40 }, hoverEffect: { scale: 1.05, rotateY: 8 } },
//     { src: Img7, height: "h-48", animation: { opacity: 0, rotate: 15, x: -50 }, hoverEffect: { scale: 1.12, rotate: -5 } },
//     { src: Img8, height: "h-40", animation: { opacity: 0, scale: 0.5, rotateX: -20 }, hoverEffect: { scale: 1.1, rotateX: 10 } },
//     { src: Img9, height: "h-48", animation: { opacity: 0, y: -60, scale: 1.2 }, hoverEffect: { scale: 1.05, rotateY: 5 } },
//     { src: Img10, height: "h-40", animation: { opacity: 0, x: 100 }, hoverEffect: { scale: 1.1, rotateX: 8 } },
// ];

// export const Gallery = () => {
//     return (
//         <motion.div
//             className="w-4/5 mx-auto overflow-hidden pb-20 relative mt-20"
            
//             // Entire Section Entrance Animation (Up and Down)
//             initial={{ opacity: 0, y: 100 }} // Starts lower
//             whileInView={{ opacity: 1, y: 0 }} // Moves to normal position
//             exit={{ opacity: 0, y: -100 }} // Scrolls out upward
//             transition={{ duration: 1, ease: "easeOut" }}
            
//             viewport={{ once: false, amount: 0.2 }} // Re-triggers when scrolled into view
//         >
//             <div className="grid grid-cols-4 gap-6">
//                 {images.map((img, index) => (
//                     <motion.div
//                         key={index}
//                         className={`${img.height} ${img.colSpan || ""} relative overflow-hidden`}
//                         initial={img.animation}
//                         whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
//                         whileHover={{
//                             ...img.hoverEffect,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                         viewport={{ once: false, amount: 0.1 }}
//                     >
//                         <motion.div
//                             className="absolute inset-0 bg-white opacity-0 rounded-lg"
//                             whileHover={{ opacity: 0.1, scale: 1.2 }}
//                             transition={{ duration: 0.3 }}
//                         />
                        
//                         <motion.img
//                             src={img.src}
//                             alt=""
//                             className="w-full h-full object-cover rounded-lg shadow-lg"
//                             transition={{ duration: 0.3 }}
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// };


// import { useState, useEffect, useRef } from 'react';
// import Img1 from "../assets/Rectangle 23.png";
// import Img2 from "../assets/Rectangle 24.png";
// import Img3 from "../assets/Rectangle 25.png";
// import Img4 from "../assets/Rectangle 26.png";
// import Img5 from "../assets/Rectangle 27.png";
// import Img6 from "../assets/Rectangle 28.png";
// import Img7 from "../assets/Rectangle 29.png";
// import Img8 from "../assets/Rectangle 30.png";
// import Img9 from "../assets/Rectangle 31.png";
// import Img10 from "../assets/Rectangle 32.png";

// export const Gallery = () => {
//   const [isInView, setIsInView] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [viewMode, setViewMode] = useState('featured'); // 'featured', 'grid', 'showcase'
//   const sectionRef = useRef(null);
  
  
//   // Sample portfolio images - replace with your actual images
//   const portfolioImages = [
//     { id: 1, src: Img1, alt: "Project 1", title: "Brand Design", category: "Design", size: "large" },
//     { id: 2, src: Img2, alt: "Project 2", title: "Mobile App UI", category: "UI/UX", size: "medium" },
//     { id: 3, src: Img3, alt: "Project 3", title: "Web Development", category: "Development", size: "medium" },
//     { id: 4, src: Img4, alt: "Project 4", title: "E-commerce", category: "Design", size: "small" },
//     { id: 5, src: Img5, alt: "Project 5", title: "Landing Page", category: "Development", size: "large" },
//     { id: 6, src: Img6, alt: "Project 6", title: "Dashboard", category: "UI/UX", size: "small" },
//     { id: 7, src: Img7, alt: "Project 7", title: "Brand Identity", category: "Design", size: "medium" },
//     { id: 8, src: Img8, alt: "Project 8", title: "Web App", category: "Development", size: "large" },
//     { id: 9, src: Img9, alt: "Project 9", title: "Mobile UI", category: "UI/UX", size: "medium" },
//     { id: 10, src: Img10, alt: "Project 10", title: "Portfolio Site", category: "Development", size: "small" },
//   ];

//   // Update view mode based on scroll progress
//   useEffect(() => {
//     if (scrollProgress < 0.3) {
//       setViewMode('featured');
//     } else if (scrollProgress < 0.7) {
//       setViewMode('grid');
//     } else {
//       setViewMode('showcase');
//     }
//   }, [scrollProgress]);

//   // Set up intersection observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const sectionTop = rect.top;
//         const sectionHeight = rect.height;
//         const viewportHeight = window.innerHeight;
        
//         let progress = 0;
        
//         if (sectionTop <= 0) {
//           progress = Math.min(1, Math.abs(sectionTop) / (sectionHeight - viewportHeight));
//         }
        
//         setScrollProgress(progress);
        
//         // Update active index based on scroll position
//         const newIndex = Math.min(
//           portfolioImages.length - 1, 
//           Math.floor(progress * portfolioImages.length * 1.2)
//         );
//         setActiveIndex(newIndex);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [portfolioImages.length]);

//   // Track mouse position
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Generate a random position for each image in the grid
//   const getRandomPosition = (index) => {
//     // Use a seeded random based on index for consistency
//     const seedX = Math.sin(index * 541) * 10000;
//     const seedY = Math.cos(index * 749) * 10000;
    
//     const x = (seedX - Math.floor(seedX)) * 80 - 40; // -40% to 40%
//     const y = (seedY - Math.floor(seedY)) * 80 - 40; // -40% to 40%
    
//     return { x, y };
//   };

//   // Hero image transformations based on scroll
//   const heroScale = Math.max(0.5, 1 - scrollProgress * 1.5);
//   const heroOpacity = Math.max(0, 1 - scrollProgress * 2.5);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative min-h-screen py-8 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
//     >
//       {/* Dynamic background */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
//           style={{
//             transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
//             transition: 'transform 0.5s ease-out'
//           }}
//         ></div>
        
//         <div className="absolute w-full h-full overflow-hidden opacity-30">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>
//       </div>

//       {/* Section title */}
//       <div 
//         className={`px-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
//         style={{ 
//           zIndex: 10, 
//           position: 'relative',
//           transform: `translate(${(mousePosition.x - 0.5) * -10}px, ${(mousePosition.y - 0.5) * -10}px)`,
//           transition: 'transform 0.5s ease-out'
//         }}
//       >
//         <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Portfolio
//         </h2>
//         <p className="text-xl mb-8 max-w-2xl">A curated collection of my finest work showcasing creativity and technical expertise.</p>
//       </div>

//       {/* Main content area */}
//       <div className="relative min-h-screen z-10">
//         {/* Featured hero image */}
//         <div 
//           className="fixed top-0 left-0 w-full h-screen flex items-center justify-center px-8 transition-all duration-500"
//           style={{ 
//             opacity: heroOpacity,
//             zIndex: 20,
//             visibility: heroOpacity > 0.1 ? 'visible' : 'hidden'
//           }}
//         >
//           <div 
//             className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-xl shadow-2xl"
//             style={{
//               transform: `perspective(1000px) scale(${heroScale}) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * -10}deg)`,
//               transition: 'transform 0.3s ease-out',
//               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
//             }}
//           >
//             <img 
//               src={portfolioImages[0].src} 
//               alt="Featured Project" 
//               className="w-full h-full object-cover"
//               style={{
//                 transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
//                 transition: 'transform 0.3s ease-out'
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
//             {/* Animated spotlight effect */}
//             <div 
//               className="absolute inset-0 opacity-60 pointer-events-none"
//               style={{
//                 background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3), transparent 50%)`,
//                 mixBlendMode: 'overlay'
//               }}
//             ></div>
            
//             <div className="absolute bottom-0 left-0 p-10">
//               <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-4">
//                 FEATURED WORK
//               </div>
//               <h3 className="text-5xl font-bold">Featured Project</h3>
//               <p className="text-xl mt-4 mb-6 max-w-lg opacity-80">An innovative solution delivering exceptional results and driving business growth.</p>
              
//               <button className="mr-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/30">
//                 View Details
//               </button>
              
//               <div className="inline-flex items-center mt-8 text-sm">
//                 <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
//                 <span>Scroll to explore more projects</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Grid Layout */}
//         <div 
//           className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center transition-all duration-700`}
//           style={{ 
//             opacity: viewMode === 'grid' ? 1 : 0,
//             visibility: viewMode === 'grid' ? 'visible' : 'hidden',
//             zIndex: 30
//           }}
//         >
//           <div className="relative w-full h-full max-w-7xl mx-auto perspective-effect">
//             {portfolioImages.map((image, index) => {
//               const position = getRandomPosition(index);
//               const isActive = index === activeIndex;
//               const distanceFromActive = Math.abs(index - activeIndex);
//               const scale = isActive ? 1.2 : Math.max(0.6, 1 - distanceFromActive * 0.1);
//               const zIndex = isActive ? 50 : 10 - distanceFromActive;
              
//               // Calculate position based on size and activeIndex
//               let posX = position.x;
//               let posY = position.y;
              
//               // Pull the active one to center
//               if (isActive) {
//                 posX = 0;
//                 posY = 0;
//               } else if (distanceFromActive <= 2) {
//                 // Slightly pull nearby images toward active one
//                 posX = posX * 0.7;
//                 posY = posY * 0.7;
//               }
              
//               // Size classes based on image.size property
//               const sizeClasses = {
//                 small: "w-48 h-36",
//                 medium: "w-64 h-48",
//                 large: "w-80 h-64"
//               };
              
//               return (
//                 <div 
//                   key={image.id} 
//                   className={`absolute ${sizeClasses[image.size]} rounded-xl shadow-lg overflow-hidden group perspective-card-container`}
//                   style={{ 
//                     top: `calc(50% + ${posY}vh)`,
//                     left: `calc(50% + ${posX}vw)`,
//                     transform: `translate(-50%, -50%) scale(${scale}) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
//                     zIndex,
//                     transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
//                   }}
//                 >
//                   <img 
//                     src={image.src} 
//                     alt={image.alt} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Category color overlay */}
//                   <div 
//                     className="absolute inset-0 mix-blend-color opacity-30 group-hover:opacity-40 transition-opacity"
//                     style={{ 
//                       background: image.category === 'Design' ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)' :
//                                 image.category === 'UI/UX' ? 'linear-gradient(45deg, #ec4899, #8b5cf6)' :
//                                 'linear-gradient(45deg, #10b981, #3b82f6)'
//                     }}
//                   ></div>
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
//                   {/* Info overlay - only show on hover or if active */}
//                   <div 
//                     className="absolute inset-0 p-4 flex flex-col justify-end transition-opacity duration-300"
//                     style={{ opacity: isActive ? 1 : 0.7 }}
//                   >
//                     <div className="transform group-hover:translate-y-0 translate-y-8 transition-transform duration-500">
//                       <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-xs font-medium rounded-md mb-2">
//                         {image.category}
//                       </div>
//                       <h3 className="text-lg sm:text-xl font-bold leading-tight">{image.title}</h3>
                      
//                       {isActive && (
//                         <button 
//                           className="mt-3 px-3 py-1 bg-white text-black text-xs font-bold rounded-md hover:bg-blue-50 transition-all duration-300 shadow-lg"
//                         >
//                           View
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
        
//         {/* Showcase View - Final layout */}
//         <div 
//           className={`fixed top-0 left-0 w-full h-screen transition-all duration-700`}
//           style={{ 
//             opacity: viewMode === 'showcase' ? 1 : 0,
//             visibility: viewMode === 'showcase' ? 'visible' : 'hidden',
//             zIndex: 40
//           }}
//         >
//           <div className="flex flex-col h-full">
//             <div className="flex-1 flex items-center justify-center p-8">
//               {/* Main showcase image */}
//               <div className="relative w-full max-w-5xl mx-auto perspective-effect">
//                 {/* Large featured image */}
//                 <div 
//                   className="relative aspect-video overflow-hidden rounded-xl shadow-2xl mx-auto"
//                   style={{
//                     transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
//                   }}
//                 >
//                   <img 
//                     src={portfolioImages[activeIndex].src} 
//                     alt={portfolioImages[activeIndex].title} 
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
//                   <div className="absolute bottom-0 left-0 p-8">
//                     <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">
//                       {portfolioImages[activeIndex].category}
//                     </div>
//                     <h3 className="text-4xl font-bold">{portfolioImages[activeIndex].title}</h3>
//                     <p className="text-lg mt-3 mb-6 max-w-lg opacity-80">Explore this project in detail and discover the creative process behind it.</p>
                    
//                     <div className="flex space-x-4">
//                       <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300">
//                         View Project
//                       </button>
//                       <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg transition-colors duration-300">
//                         Next Project
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Circular indicators */}
//                 <div className="flex justify-center mt-8 space-x-2">
//                   {portfolioImages.map((_, index) => (
//                     <div 
//                       key={index}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-500 scale-150' : 'bg-white/30'}`}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Thumbnail strip at bottom */}
//             <div className="h-32 w-full overflow-hidden">
//               <div className="flex h-full items-center px-4 gap-4">
//                 {portfolioImages.map((image, index) => (
//                   <div 
//                     key={image.id}
//                     className={`h-20 w-32 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${index === activeIndex ? 'border-2 border-blue-500' : 'opacity-60'}`}
//                   >
//                     <img 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Spacer to ensure enough scroll area */}
//       <div style={{ height: '300vh' }}></div>
      
//       {/* Mode indicators + scroll progress */}
//       <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
//         <div className="flex items-center justify-center space-x-2 px-6 py-3 bg-black/30 backdrop-blur-lg rounded-full">
//           <div className={`w-3 h-3 rounded-full ${viewMode === 'featured' ? 'bg-blue-500' : 'bg-white/30'}`}></div>
//           <div className={`w-3 h-3 rounded-full ${viewMode === 'grid' ? 'bg-blue-500' : 'bg-white/30'}`}></div>
//           <div className={`w-3 h-3 rounded-full ${viewMode === 'showcase' ? 'bg-blue-500' : 'bg-white/30'}`}></div>
//           <div className="mx-2 w-px h-4 bg-white/20"></div>
//           <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
//               style={{ width: `${scrollProgress * 100}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Custom styles */}
//       <style jsx>{`
//         .perspective-effect {
//           perspective: 1000px;
//         }
        
//         .perspective-card-container {
//           transform-style: preserve-3d;
//           backface-visibility: hidden;
//         }
        
//         @media (max-width: 768px) {
//           .perspective-effect {
//             perspective: 600px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import Img1 from "../assets/Rectangle 23.png";
import Img2 from "../assets/Rectangle 24.png";
import Img3 from "../assets/Rectangle 25.png";
import Img4 from "../assets/Rectangle 26.png";
import Img5 from "../assets/Rectangle 27.png";
import Img6 from "../assets/Rectangle 28.png";
import Img7 from "../assets/Rectangle 29.png";
import Img8 from "../assets/Rectangle 30.png";
import Img9 from "../assets/Rectangle 31.png";
import Img10 from "../assets/Rectangle 32.png";

export const Gallery = () => {
  // States
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [viewMode, setViewMode] = useState('featured'); // 'featured', 'grid'
  
  // Refs
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  
  // Portfolio images data
  const portfolioImages = [
    { id: 1, src: Img1, alt: "Project 1", title: "Brand Design", category: "Design", size: "large" },
    { id: 2, src: Img2, alt: "Project 2", title: "Mobile App UI", category: "UI/UX", size: "medium" },
    { id: 3, src: Img3, alt: "Project 3", title: "Web Development", category: "Development", size: "medium" },
    { id: 4, src: Img4, alt: "Project 4", title: "E-commerce", category: "Design", size: "small" },
    { id: 5, src: Img5, alt: "Project 5", title: "Landing Page", category: "Development", size: "large" },
    { id: 6, src: Img6, alt: "Project 6", title: "Dashboard", category: "UI/UX", size: "small" },
    { id: 7, src: Img7, alt: "Project 7", title: "Brand Identity", category: "Design", size: "medium" },
    { id: 8, src: Img8, alt: "Project 8", title: "Web App", category: "Development", size: "large" },
    { id: 9, src: Img9, alt: "Project 9", title: "Mobile UI", category: "UI/UX", size: "medium" },
    { id: 10, src: Img10, alt: "Project 10", title: "Portfolio Site", category: "Development", size: "small" },
  ];

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Track scroll position within gallery section
  useEffect(() => {
    const handleScroll = () => {
      if (!isInView || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress only when section is in view
      let progress = 0;
      
      if (sectionTop <= 0) {
        // Calculate progress based on how far we've scrolled into the section
        progress = Math.min(1, Math.abs(sectionTop) / (sectionHeight - viewportHeight));
      }
      
      setScrollProgress(progress);
      
      // Update view mode based on scroll progress
      if (progress < 0.4) {
        setViewMode('featured');
      } else {
        setViewMode('grid');
      }
      
      // Update active index based on scroll position
      const newIndex = Math.min(
        portfolioImages.length - 1, 
        Math.floor(progress * portfolioImages.length * 1.2)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView, portfolioImages.length]);

  // Track mouse position only when gallery is in view
  useEffect(() => {
    if (!isInView) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInView]);

  // Calculate grid layout positions with depth
  const getGridPosition = (index, total) => {
    // More dynamic and interesting positioning
    const radius = 35; // Controls how spread out the items are
    const angleStep = (2 * Math.PI) / Math.min(9, total);
    const angle = index * angleStep;
    
    // Create a spiral effect
    const spiralFactor = index * 0.05;
    const adjustedRadius = radius * (1 + spiralFactor);
    
    // Calculate position using polar coordinates
    const x = Math.sin(angle) * adjustedRadius;
    const y = Math.cos(angle) * adjustedRadius * 0.6; // Flatten the circle to an oval
    
    // Add some z-depth (used for scaling and other effects)
    const z = index % 3 === 0 ? 0.2 : index % 3 === 1 ? 0 : -0.2;
    
    return { x, y, z };
  };

  // Calculate transforms for the hero image
  const heroScale = Math.max(0.8, 1 - scrollProgress * 1.5);
  const heroOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  
  // Calculate a dynamic spotlight effect based on mouse position
  const spotlightX = mousePosition.x * 100;
  const spotlightY = mousePosition.y * 100;

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Dynamic background with gradient and grid */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -10}px, ${(mousePosition.y - 0.5) * -10}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        ></div>
        
        <div className="absolute w-full h-full overflow-hidden opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Dynamic spotlight effect */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(59, 130, 246, 0.3), transparent 70%)`,
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Section title */}
      <div 
        className={`px-8 mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        style={{ 
          zIndex: 10, 
          position: 'relative',
          transform: `translate(${(mousePosition.x - 0.5) * -5}px, ${(mousePosition.y - 0.5) * -5}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Portfolio
        </h2>
        <p className="text-xl mb-8 max-w-2xl">A curated collection of my finest work showcasing creativity and technical expertise.</p>
      </div>

      {/* Gallery container */}
      <div 
        ref={galleryRef} 
        className="relative z-10 min-h-screen"
      >
        {/* Featured hero image */}
        <div 
          className={`relative w-full flex items-center justify-center px-8 mb-16 transition-all duration-700`}
          style={{ 
            opacity: heroOpacity,
            height: '75vh',
            visibility: heroOpacity > 0.1 ? 'visible' : 'hidden',
            transform: `translateY(${scrollProgress * -50}px)`
          }}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl shadow-2xl"
            style={{
              transform: `perspective(1000px) scale(${heroScale}) rotateX(${(mousePosition.y - 0.5) * 8}deg) rotateY(${(mousePosition.x - 0.5) * -8}deg)`,
              transition: 'transform 0.5s ease-out',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
            }}
          >
            <img 
              src={portfolioImages[0].src} 
              alt="Featured Project" 
              className="w-full h-full object-cover"
              style={{
                transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px)`,
                transition: 'transform 0.7s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            {/* Animated spotlight effect */}
            <div 
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.4), transparent 50%)`,
                mixBlendMode: 'overlay'
              }}
            ></div>
            
            <div className="absolute bottom-0 left-0 p-10">
              <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-4 shadow-lg shadow-blue-500/30">
                FEATURED WORK
              </div>
              <h3 className="text-4xl font-bold text-white">Featured Project</h3>
              <p className="text-xl mt-4 mb-6 max-w-lg text-gray-200">An innovative solution delivering exceptional results.</p>
              
              <button className="mr-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/30">
                View Details
              </button>
              
              <div className="inline-flex items-center mt-8 text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
                <span>Scroll to explore more projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Grid Layout */}
        <div 
          className={`w-full transition-all duration-1000 relative ${viewMode === 'grid' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ 
            height: '90vh',
            visibility: viewMode === 'grid' ? 'visible' : 'hidden',
            zIndex: 30,
            transformStyle: 'preserve-3d',
            perspective: '1200px'
          }}
        >
          <div className="relative w-full h-full max-w-6xl mx-auto">
            {portfolioImages.map((image, index) => {
              const position = getGridPosition(index, portfolioImages.length);
              const isActive = index === activeIndex;
              const distanceFromActive = Math.abs(index - activeIndex);
              
              // Enhanced animations and scaling
              const baseScale = 0.8 + position.z * 0.5;
              const scale = isActive ? baseScale * 1.3 : baseScale - (distanceFromActive * 0.05);
              const zIndex = isActive ? 50 : 10 - distanceFromActive;
              
              // Rotate images slightly based on position for a more dynamic look
              const rotateX = position.y * 0.8;
              const rotateY = position.x * -0.8;
              
              // Dynamic opacity - items further from active fade more
              const opacity = isActive ? 1 : Math.max(0.5, 1 - distanceFromActive * 0.15);
              
              // Size classes with enhanced dimensions
              const sizeClasses = {
                small: "w-56 h-40",
                medium: "w-64 h-48",
                large: "w-72 h-56"
              };
              
              // Colors for category tags
              const categoryColors = {
                'Design': 'from-blue-500 to-indigo-600',
                'UI/UX': 'from-pink-500 to-purple-600',
                'Development': 'from-emerald-500 to-blue-600'
              };
              
              return (
                <div 
                  key={image.id} 
                  className={`absolute ${sizeClasses[image.size]} rounded-xl shadow-2xl overflow-hidden group`}
                  style={{ 
                    top: `calc(50% + ${position.y}vh)`,
                    left: `calc(50% + ${position.x}vw)`,
                    transform: `translate(-50%, -50%) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    zIndex,
                    opacity,
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: isActive ? 
                      '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.5)' : 
                      '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced category color overlay with animated gradient */}
                  <div 
                    className={`absolute inset-0 mix-blend-color opacity-40 group-hover:opacity-50 transition-all duration-700 bg-gradient-to-br ${categoryColors[image.category]}`}
                    style={{ 
                      animation: isActive ? 'gradientShift 8s ease infinite' : 'none'
                    }}
                  ></div>
                  
                  {/* Darker gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Enhanced hover effect - glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
                    image.category === 'Design' ? 'bg-blue-500/20' : 
                    image.category === 'UI/UX' ? 'bg-purple-500/20' : 
                    'bg-emerald-500/20'
                  }`}></div>
                  
                  {/* Info overlay with enhanced animations */}
                  <div 
                    className="absolute inset-0 p-5 flex flex-col justify-end transition-all duration-500"
                  >
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                      <div className={`inline-block px-3 py-1 backdrop-blur-sm text-xs font-medium rounded-lg mb-2 shadow-md bg-gradient-to-r ${categoryColors[image.category]} text-white`}>
                        {image.category}
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-white">{image.title}</h3>
                      
                      <div className={`w-12 h-0.5 mt-2 mb-2 bg-gradient-to-r ${categoryColors[image.category]} transition-all duration-500 group-hover:w-24`}></div>
                      
                      <p className="text-sm text-gray-300 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {index % 3 === 0 ? "A stunning visual experience" : 
                         index % 3 === 1 ? "Creative solutions that inspire" : 
                         "Innovative design with purpose"}
                      </p>
                      
                      <button 
                        className={`mt-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 shadow-lg transform group-hover:translate-y-0 translate-y-4 bg-white text-gray-900 hover:bg-gray-100`}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center justify-center space-x-3 px-5 py-3 bg-black/40 backdrop-blur-lg rounded-full shadow-lg">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${viewMode === 'featured' ? 'bg-blue-500 scale-125' : 'bg-white/30'}`}></div>
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-blue-500 scale-125' : 'bg-white/30'}`}></div>
              <div className="mx-2 w-px h-4 bg-white/20"></div>
              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                  style={{ width: `${scrollProgress * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to ensure enough scroll height for animations */}
      <div style={{ height: '100vh' }}></div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-gradient-to-br {
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};