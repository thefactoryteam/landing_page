// import React from 'react'
// import { motion } from 'framer-motion';
// import Nelson from '../../assets/getToKnowUs/nelson.png'
// import Festus1 from '../../assets/getToKnowUs/festusback.png'
// import Festus2 from '../../assets/getToKnowUs/festusfront.png'
// import Learners from '../../assets/getToKnowUs/learners.png'

// import Fellows from '../../assets/getToKnowUs/fellows.png'
// import Okod from '../../assets/getToKnowUs/okod.png'
// import Roland from '../../assets/getToKnowUs/roland.png'
// import Factory from '../../assets/getToKnowUs/factory.png'

// const GallerySection = () => {
//     return (
//         <div className='max-w-4/5 mx-auto py-10'>
//             <h1 className='meriwether-font text-3xl !font-semibold text-center'>Get To Know Us</h1>

//             <div className='flex flex-col lg:flex-row gap-4 mt-8'>
//                 <div className='w-full lg:w-[55%] flex flex-col'>
//                     <motion.div
//                         className='col-span-full'
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, ease: 'easeOut' }}
//                     >
//                         <div>
//                             <img src={Nelson} alt="Nelson" />
//                         </div>
//                     </motion.div>

//                     <div className="grid grid-flow-col grid-rows-2 gap-4 mt-4">
//                         <motion.div
//                             className="col-span-1"
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, ease: 'easeOut' }}
//                         >
//                             <div>
//                                 <img src={Festus2} alt="Festus" />
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             className="col-span-1 row-span-2"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, ease: 'easeOut' }}
//                         >
//                             <div>
//                                 <img src={Festus1} alt="Festus Enang" />
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             className="row-span-3"
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 1.2, ease: 'easeOut' }}
//                         >
//                             <div className='md:h-[390px]'>
//                                 <img src={Learners} alt="The factory learners" className='w-full h-full' />
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>

//                 <div className='w-full lg:w-[45%] flex flex-col'>
//                     <div className="grid grid-flow-col grid-rows-2 gap-4">

//                         <motion.div
//                             className="row-span-3"
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 1.2, ease: 'easeOut' }}
//                         >
//                             <div className='md:h-[390px]'>
//                                 <img src={Factory} alt="The factory learners" className='w-full h-full' />
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             className="col-span-1"
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, ease: 'easeOut' }}
//                         >
//                             <div>
//                                 <img src={Okod} alt="Festus" />
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             className="col-span-1 row-span-2"
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1, ease: 'easeOut' }}
//                         >
//                             <div>
//                                 <img src={Roland} alt="Festus Enang" />
//                             </div>
//                         </motion.div>

//                     </div>

//                     <motion.div
//                         className="col-span-full mt-4"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1, ease: 'easeOut' }}
//                     >
//                         <div>
//                             <img src={Fellows} alt="Fellows" className="w-full object-cover" />
//                         </div>
//                     </motion.div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GallerySection





import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import images dynamically to improve initial load time
const importImage = (src) => {
  const image = new Image();
  image.src = src;
  return src;
};

// Prefetch these images asynchronously 
const Nelson = () => import('../../assets/getToKnowUs/nelson.png').then(m => m.default);
const Festus1 = () => import('../../assets/getToKnowUs/festusback.png').then(m => m.default);
const Festus2 = () => import('../../assets/getToKnowUs/festusfront.png').then(m => m.default);
const Learners = () => import('../../assets/getToKnowUs/learners.png').then(m => m.default);
const Fellows = () => import('../../assets/getToKnowUs/fellows.png').then(m => m.default);
const Okod = () => import('../../assets/getToKnowUs/okod.png').then(m => m.default);
const Roland = () => import('../../assets/getToKnowUs/roland.png').then(m => m.default);
const Factory = () => import('../../assets/getToKnowUs/factory.png').then(m => m.default);

// Enhanced Image component with lazy loading
const OptimizedImage = ({ src, alt, className = '', priority = false }) => {
  const [imageSrc, setImageSrc] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    // Load high priority images immediately, others when component mounts
    if (priority) {
      // Simulate a placeholder until real image loads
      setImageSrc('/api/placeholder/400/300');
      src().then(imgSrc => {
        if (isMounted) setImageSrc(imgSrc);
      });
    } else {
      // For non-priority images, delay loading slightly
      const timer = setTimeout(() => {
        if (isMounted) {
          src().then(imgSrc => {
            if (isMounted) setImageSrc(imgSrc);
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
    
    return () => {
      isMounted = false;
    };
  }, [src, priority]);
  
  return (
    <LazyLoadImage
      src={imageSrc || '/api/placeholder/400/300'} // Use placeholder while loading
      alt={alt}
      effect="blur"
      className={`w-full h-full object-cover ${className}`}
      threshold={100}
      placeholderSrc="/api/placeholder/400/300"
    />
  );
};

const GallerySection = () => {
  // Stagger animations to reduce CPU load
  const staggerConfig = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8 }
  };
  
  // Only animate when in viewport
  const fadeInUp = {
    ...staggerConfig,
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };
  
  const fadeInLeft = {
    ...staggerConfig,
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  };
  
  const fadeInRight = {
    ...staggerConfig,
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
  };
  
  const fadeInScale = {
    ...staggerConfig,
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  };

  return (
    <div className='max-w-4/5 mx-auto py-10'>
      <h1 className='meriwether-font text-3xl !font-semibold text-center'>Get To Know Us</h1>

      <div className='flex flex-col lg:flex-row gap-4 mt-8'>
        <div className='w-full lg:w-[55%] flex flex-col'>
          <motion.div
            className='col-span-full'
            {...fadeInUp}
          >
            <div>
              <OptimizedImage src={Nelson} alt="Nelson" priority={true} />
            </div>
          </motion.div>

          <div className="grid grid-flow-col grid-rows-2 gap-4 mt-4">
            <motion.div
              className="col-span-1"
              {...fadeInLeft}
            >
              <div>
                <OptimizedImage src={Festus2} alt="Festus" />
              </div>
            </motion.div>

            <motion.div
              className="col-span-1 row-span-2"
              {...fadeInRight}
            >
              <div>
                <OptimizedImage src={Festus1} alt="Festus Enang" />
              </div>
            </motion.div>

            <motion.div
              className="row-span-3"
              {...fadeInScale}
            >
              <div className='md:h-[390px] flex '>
                <OptimizedImage src={Learners} alt="The factory learners" className='w-full h-full rounded-2xl'/>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='w-full lg:w-[45%] flex flex-col'>
          <div className="grid grid-flow-col grid-rows-2 gap-4">

            <motion.div
              className="row-span-3"
              {...fadeInScale}
            >
              <div className='md:h-[390px]'>
                <OptimizedImage src={Factory} alt="The factory learners" priority={true} />
              </div>
            </motion.div>

            <motion.div
              className="col-span-1"
              {...fadeInLeft}
            >
              <div>
                <OptimizedImage src={Okod} alt="Festus" />
              </div>
            </motion.div>

            <motion.div
              className="col-span-1 row-span-2"
              {...fadeInRight}
            >
              <div>
                <OptimizedImage src={Roland} alt="Festus Enang" />
              </div>
            </motion.div>

          </div>

          <motion.div
            className="col-span-full mt-4"
            {...fadeInScale}
          >
            <div>
              <OptimizedImage src={Fellows} alt="Fellows" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default GallerySection