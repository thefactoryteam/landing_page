// import React, { useState } from 'react'
// import SectionHeaders from '../shared/SectionHeaders'
// import { motion } from "framer-motion";
// import FactoryGray from "../../assets/getToKnowUs/factoryGray.png"
// import Elavating from "../../assets/getToKnowUs/elevatingTech.png"
// import CreatingOpportu from "../../assets/getToKnowUs/creatingOpportu.png"
// import Nurturing from "../../assets/getToKnowUs/nurturing.png"
// import Unlocking from "../../assets/getToKnowUs/unlocking.png"
// import Amplifying from "../../assets/getToKnowUs/amplifying.png"
// import Cultivating from "../../assets/getToKnowUs/cultivating.png"
// import { FadeInUp } from '../../utils/animations';

// // Shared animation variants
// const cardVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 20,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//       duration: 0.6,
//     }
//   }
// }; 

// // Direction-based variants
// const fromLeft = {
//   offscreen: { opacity: 0, x: -50 },
//   onscreen: { 
//     opacity: 1, 
//     x: 0,
//     transition: { 
//       type: "spring", 
//       stiffness: 50, 
//       damping: 20, 
//       duration: 0.8 
//     }
//   }
// };

// const fromRight = {
//   offscreen: { opacity: 0, x: 50 },
//   onscreen: { 
//     opacity: 1, 
//     x: 0,
//     transition: { 
//       type: "spring", 
//       stiffness: 50, 
//       damping: 20, 
//       duration: 0.8 
//     }
//   }
// };

// const scaleUp = {
//   offscreen: { opacity: 0, scale: 0.8 },
//   onscreen: { 
//     opacity: 1, 
//     scale: 1,
//     transition: { 
//       type: "spring", 
//       stiffness: 50, 
//       damping: 20, 
//       duration: 0.8 
//     }
//   }
// };

// const Card = ({ img, title, imgHeight = "h-72", textWidth = "w-sm", animationVariant = cardVariants, viewport = { once: true, amount: 0.3 }, classs = "inline-block col-span-1" }) => {
//   const [isHovered, setIsHovered] = useState(false)

//   const overlayBackground = isHovered 
//     ? "linear-gradient(to top, #2BE028, transparent)" 
//     : "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";

//   return (
//     <motion.div
//       className={`relative ${classs}`}
//       variants={animationVariant}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={viewport}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       layout
//     >
//       <div className="relative">
//         <img
//           src={img}
//           alt={title}
//           className={`block w-full object-cover rounded-2xl ${imgHeight}`}
//         />

//         <motion.div
//           className="absolute bottom-0 left-0 w-full h-48 rounded-b-2xl pointer-events-none overflow-hidden"
//           animate={{ 
//             background: overlayBackground 
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className={`absolute bottom-4 left-4 text-3xl font-extrabold p-4 text-white ${textWidth} pointer-events-auto`}>
//             {title}
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }

// const OurValues = () => {
//   return (
//     <section className='bg-[#F4F4F4]'>
//       <div className="relative max-w-6xl mx-auto py-0 md:py-20 px-4 overflow-hidden">
//         <div className='text-center'>
//           <SectionHeaders
//             title="Our Values"
//             desc="Empowering Africa Through Innovation, Opportunity, and Excellence"
//             fadeInUp={FadeInUp}
//           />
//         </div>

//         <motion.div 
//           className='flex flex-col lg:flex-row gap-4 mt-8 max-h-[620px] h-[620px]'
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className='w-full h-full lg:w-[75%]'>
//             <div className="grid gap-4 mt-4">
//               <div className='grid grid-flow-col grid-rows-2 gap-4 h-72'>
//                 <div>
//                   <Card
//                   img={Elavating}
//                   title="Elevating Tech Innovators"
//                   animationVariant={fromRight}
//                   viewport={{ once: true, amount: 0.4 }}
//                 />
//                 </div>
                

//                 <motion.div
//                   className="col-span-1 row-span-2"
//                   variants={fromLeft}
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   <div className='relative'>
//                     <img src={FactoryGray} alt="Festus Enang" className='h-72 w-auto block' />
//                   </div>
//                 </motion.div>
//               </div>

//               <div className='grid grid-flow-col grid-rows-2 gap-4'>
//                 <Card
//                   img={Nurturing}
//                   title="Nurturing Local Talent"
//                   classs="col-span-1 row-span-2"
//                   textWidth="w-xds"
//                   animationVariant={fromRight}
//                   viewport={{ once: true, amount: 0.3 }}
//                 />

//                 <Card
//                   img={CreatingOpportu}
//                   title="Creating Opportunity Pathways"
//                   animationVariant={scaleUp}
//                   viewport={{ once: true, amount: 0.4 }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className='w-full lg:w-[25%] flex flex-col h-full'>
//             <motion.div
//               className="h-full w-full flex items-center justify-center"
//               variants={scaleUp}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <div className='p-2 w-full h-full'>
//                 <Card
//                   img={Unlocking}
//                   title="Unlocking African Potentials"
//                   imgHeight="h-full"
//                   textWidth=""
//                   animationVariant={{}} // Empty to prevent duplicate animations
//                   viewport={{ once: true, amount: 0 }} // Disabled viewport animation
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div 
//           className='grid grid-cols-1 gap-4 md:grid-cols-2'
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <Card
//             img={Amplifying}
//             title="Amplifying African Tech Voice"
//             classs=''
//             imgHeight="h-full"
//             animationVariant={fromLeft}
//             viewport={{ once: true, amount: 0.3 }}
//           />
//           <Card
//             img={Cultivating}
//             title="Cultivating Homegrown Excellence"
//             classs=''
//             imgHeight="h-full"
//             animationVariant={fromRight}
//             viewport={{ once: true, amount: 0.3 }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default OurValues


import React, { useState } from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { motion } from "framer-motion";
import FactoryGray from "../../assets/getToKnowUs/factoryGray.png"
import Elavating from "../../assets/getToKnowUs/elevatingTech.png"
import CreatingOpportu from "../../assets/getToKnowUs/creatingOpportu.png"
import Nurturing from "../../assets/getToKnowUs/nurturing.png"
import Unlocking from "../../assets/getToKnowUs/unlocking.png"
import Amplifying from "../../assets/getToKnowUs/amplifying.png"
import Cultivating from "../../assets/getToKnowUs/cultivating.png"
import { FadeInUp } from '../../utils/animations';

// Shared animation variants
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    }
  }
}; 

// Direction-based variants
const fromLeft = {
  offscreen: { opacity: 0, x: -50 },
  onscreen: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring", 
      stiffness: 50, 
      damping: 20, 
      duration: 0.8 
    }
  }
};

const fromRight = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring", 
      stiffness: 50, 
      damping: 20, 
      duration: 0.8 
    }
  }
};

const scaleUp = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 50, 
      damping: 20, 
      duration: 0.8 
    }
  }
};

const Card = ({ img, title, imgHeight = "h-72", textWidth = "w-sm", animationVariant = cardVariants, viewport = { once: true, amount: 0.3 }, classs = "inline-block" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const overlayBackground = isHovered 
    ? "linear-gradient(to top, #2BE028, transparent)" 
    : "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";

  return (
    <motion.div
      className={`relative ${classs} mb-4`}
      variants={animationVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewport}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <div className="relative">
        <img
          src={img}
          alt={title}
          className={`block w-full object-cover rounded-2xl ${imgHeight}`}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full h-48 rounded-b-2xl pointer-events-none overflow-hidden"
          animate={{ 
            background: overlayBackground 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute bottom-4 left-4 w-xs md:w-auto text-2xl md:text-3xl font-extrabold p-4 text-white ${textWidth} pointer-events-auto`}>
            {title}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const FactoryImage = () => (
  <motion.div
    variants={fromLeft}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    className="mb-4"
  >
    <div className='relative'>
      <img 
        src={FactoryGray} 
        alt="The Factory" 
        className='w-full h-7c2 object-cover rounded-2xl' 
      />
      
    </div>
  </motion.div>
);

const OurValues = () => {
  // Define all cards data
  const cardsData = [
    {
      id: 1,
      img: Elavating,
      title: "Elevating Tech Innovators",
      animation: fromRight,
      heightClass: "h-72"
    },
    {
      id: 2,
      img: Nurturing,
      title: "Nurturing Local Talent",
      animation: fromRight,
      heightClass: "h-72"
    },
    {
      id: 3,
      img: CreatingOpportu,
      title: "Creating Opportunity Pathways",
      animation: scaleUp,
      heightClass: "h-72"
    },
    {
      id: 4,
      img: Unlocking,
      title: "Unlocking African Potentials",
      animation: scaleUp,
      heightClass: "h-72"
    },
    {
      id: 5,
      img: Amplifying,
      title: "Amplifying African Tech Voice",
      animation: fromLeft,
      heightClass: "h-72"
    },
    {
      id: 6,
      img: Cultivating,
      title: "Cultivating Homegrown Excellence",
      animation: fromRight,
      heightClass: "h-72"
    }
  ];

  return (
    <section className='bg-[#F4F4F4]'>
      <div className="relative max-w-6xl mx-auto py-0 md:py-20 px-4 overflow-hidden">
        <div className='text-center'>
          <SectionHeaders
            title="Our Values"
            desc="Empowering Africa Through Innovation, Opportunity, and Excellence"
            fadeInUp={FadeInUp}
          />
        </div>

        <div className="mt-8">
          {/* Small screens - show one card per row in a simple linear layout */}
          <div className="block lg:hidden">
            <div className="space-y-4">
              {/* First card */}
              <Card
                img={Elavating}
                title="Elevating Tech Innovators"
                animationVariant={fromRight}
                viewport={{ once: true, amount: 0.4 }}
                imgHeight="h-72"
              />
              
              {/* Factory Logo Image */}
              <FactoryImage />
              
              {/* Rest of the cards in vertical list */}
              {cardsData.slice(1).map((card) => (
                <Card
                  key={card.id}
                  img={card.img}
                  title={card.title}
                  animationVariant={card.animation}
                  viewport={{ once: true, amount: 0.3 }}
                  imgHeight={card.heightClass}
                  classs="block"
                />
              ))}
            </div>
          </div>

          {/* Large screens - keep original complex layout */}
          <div className="hidden lg:block">
            <motion.div 
              className='flex flex-row gap-4 mt-8 max-h-[620px] h-[620px]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='w-[75%]'>
                <div className="grid gap-4 mt-4">
                  <div className='grid grid-flow-col grid-rows-2 gap-4 h-72'>
                    <div>
                      <Card
                        img={Elavating}
                        title="Elevating Tech Innovators"
                        animationVariant={fromRight}
                        viewport={{ once: true, amount: 0.4 }}
                      />
                    </div>
                    
                    <motion.div
                      className="col-span-1 row-span-2"
                      variants={fromLeft}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className='relative'>
                        <img src={FactoryGray} alt="The Factory" className='h-72 w-auto block' />
                      </div>
                    </motion.div>
                  </div>

                  <div className='grid grid-flow-col grid-rows-2 gap-4'>
                    <Card
                      img={Nurturing}
                      title="Nurturing Local Talent"
                      classs="col-span-1 row-span-2"
                      textWidth="w-xds"
                      animationVariant={fromRight}
                      viewport={{ once: true, amount: 0.3 }}
                    />

                    <Card
                      img={CreatingOpportu}
                      title="Creating Opportunity Pathways"
                      animationVariant={scaleUp}
                      viewport={{ once: true, amount: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              <div className='w-[25%] flex flex-col h-full'>
                <motion.div
                  className="h-full w-full flex items-center justify-center"
                  variants={scaleUp}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className='p-2 w-full h-full'>
                    <Card
                      img={Unlocking}
                      title="Unlocking African Potentials"
                      imgHeight="h-full"
                      textWidth=""
                      animationVariant={{}} // Empty to prevent duplicate animations
                      viewport={{ once: true, amount: 0 }} // Disabled viewport animation
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className='grid grid-cols-2 gap-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card
                img={Amplifying}
                title="Amplifying African Tech Voice"
                classs=''
                imgHeight="h-full"
                animationVariant={fromLeft}
                viewport={{ once: true, amount: 0.3 }}
              />
              <Card
                img={Cultivating}
                title="Cultivating Homegrown Excellence"
                classs=''
                imgHeight="h-full"
                animationVariant={fromRight}
                viewport={{ once: true, amount: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValues