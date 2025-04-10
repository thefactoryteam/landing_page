import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClipImage from "../assets/madagascar-image.png";
import BlackMarker from "../assets/Black-marker-arrow.png";
import BlackArrow from "../assets/Black-arrow.png";

const words = ["Africa", "Naija"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-w-lg justify-center items-center h-5/6 overflow-hidden">
      {/* <motion.div
        className="h-96 w-96 bg-[#2BE028] rounded-full absolute -left-64"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
      />

      <motion.div
        className="h-96 w-96 bg-[#373737] rounded-full absolute -right-64"
        animate={{ scale: [1, 0.9, 1], rotate: [0, -20, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
      /> */}

      <div className="relative text-center">
        <motion.h1
          className="primary-font font-black uppercase text-6xl md:text-[121px] text-center leading-[1]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
          }}
        >
          Nesting{" "}
          {/* <span className="inline-block md:w-[250px] text-center" >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWord]}
                className="meriwether-font lowercase italic text-[#2BE028] inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8 }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span> */}
          <br />

          <motion.span className="flex items-center justify-center">
            Inn
            <motion.img
              src={ClipImage}
              alt="O"
              className="w-[90px] h-[90px] rounded-full inline-block mx-2 object-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
            />
            vations
          </motion.span>
        </motion.h1>

        {/* <motion.p
          className="text-center text-[46px] lowercase text-[#2BE028] meriwether-font italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Don’t just predict the future, build it!
        </motion.p>

        <motion.div
          className="absolute left-[2%] top-[65%] w-[170px] h-[128px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlackMarker})` }}
          animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        /> */}

        {/* <div className="flex justify-center gap-8 mt-4">
          <motion.button
            className="bg-[#2BE028] text-[#231F20] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(43, 224, 40, 0.3)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Become a global talent
          </motion.button>

          <motion.button
            className="bg-[#231F20] text-[#ECFBEB] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Join Jukebox Incubator Program
          </motion.button>
        </div> */}

        {/* <motion.div
          className="absolute -right-[5%] top-[65%] w-[170px] h-[167px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlackArrow})` }}
          animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        /> */}
      </div>
    </div>
  );
};

export default Hero;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ClipImage from "../assets/madagascar-image.png";
// import BlackMarker from "../assets/Black-marker-arrow.png";
// import BlackArrow from "../assets/Black-arrow.png";

// const words = ["Africa", "Naija"];

// const Hero = () => {
//   const [currentWord, setCurrentWord] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex min-w-full justify-center items-center h-[60vh] sm:h-[80vh] overflow-hidden">
//       <motion.div
//         className="h-48 w-48 sm:h-96 sm:w-96 bg-[#2BE028] rounded-full absolute -left-1/3 sm:-left-64"
//         animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
//       />
      
//       <motion.div
//         className="h-48 w-48 sm:h-96 sm:w-96 bg-[#373737] rounded-full absolute -right-1/3 sm:-right-64"
//         animate={{ scale: [1, 0.9, 1], rotate: [0, -20, 20, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
//       />

//       <div className="relative text-center px-4">
//         <motion.h1
//           className="primary-font font-black uppercase text-4xl sm:text-6xl md:text-[121px] text-center leading-[1]"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
//           }}
//         >
//           Nesting{" "}
//           <span className="inline-block" style={{ width: "250px", textAlign: "center" }}>
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={words[currentWord]}
//                 className="meriwether-font lowercase italic text-[#2BE028] inline-block"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 {words[currentWord]}
//               </motion.span>
//             </AnimatePresence>
//           </span>
//           <br />
//           <motion.span className="flex items-center justify-center">
//             Inn
//             <motion.img
//               src={ClipImage}
//               alt="O"
//               className="w-[60px] sm:w-[90px] h-[60px] sm:h-[90px] rounded-full inline-block mx-2 object-cover"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
//             />
//             vations
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="text-center text-3xl sm:text-4xl lowercase text-[#2BE028] meriwether-font italic"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Don’t just predict the future, build it!
//         </motion.p>

//         <motion.div
//           className="absolute left-[2%] top-[65%] w-[120px] sm:w-[170px] h-[90px] sm:h-[128px] bg-contain bg-no-repeat"
//           style={{ backgroundImage: `url(${BlackMarker})` }}
//           animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="flex justify-center gap-8 mt-4 flex-wrap">
//           <motion.button
//             className="bg-[#2BE028] text-[#231F20] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
//             whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(43, 224, 40, 0.3)" }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             Become a global talent
//           </motion.button>

//           <motion.button
//             className="bg-[#231F20] text-[#ECFBEB] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
//             whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             Join Jukebox Incubator Program
//           </motion.button>
//         </div>

//         <motion.div
//           className="absolute -right-[5%] top-[65%] w-[120px] sm:w-[170px] h-[128px] sm:h-[167px] bg-contain bg-no-repeat"
//           style={{ backgroundImage: `url(${BlackArrow})` }}
//           animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
