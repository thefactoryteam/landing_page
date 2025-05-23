// import React from 'react'
// import { motion } from 'framer-motion'
// import HeroImg from '../../assets/Jukebox/heroImg.webp'
// import HeroImgMobile from '../../assets/Jukebox/heroImgMobile.png'
// import JukeImg from '../../assets/Jukebox/jukeBox.png'
// import ButtonComponent from '../shared/ButtonComponent'

// const Hero = () => {
//     return (
//         <section className="w-full h-screcen h-[110vh] overflow-hiddden relative bg-white primary-font">
//             <motion.div
//                 className="relative w-full h-full bg-cover bg-top top-0 flex items-center"
//                 style={{
//                     backgroundImage: `url(${HeroImg})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                 }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//             >

//                 <div className='max-w-xl text-white mt-36 ms-52'>
//                     <img src={JukeImg} alt="Jukebox" />
//                     <h2 className='text-4xl font-bold py-4'>JukeBox is The Factory's flagship 3-month incubator program</h2>
//                     <p className='text-2xl'>We identify, nurture, and invest in early-stage startups in exchange for 10% equity.  Our goal is to help startups refine their business models, achieve market readiness, and foster innovation by connecting them with a network of investors, mentors, and strategic partners.</p>

//                     <ButtonComponent
//                         text="Apply Now"
//                         jukebox={true}
//                     />
//                 </div>
//             </motion.div>
            
//         </section>
//     )
// }

// export default Hero


import React from 'react'
import { motion } from 'framer-motion'
import HeroImg from '../../assets/Jukebox/heroImg.webp'
import HeroImgMobile from '../../assets/Jukebox/heroImgMobile.png'
import JukeImg from '../../assets/Jukebox/jukeBox.png'
import ButtonComponent from '../shared/ButtonComponent'

const Hero = () => {
    return (
        <section className="w-full h-scrjeen h-[110vh] overflow-hiddjen relative bg-white primary-font">
            <motion.div
                className="relative w-full h-full flex items-center"
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Mobile background overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center md:hidden"
                    style={{
                        backgroundImage: `url(${HeroImgMobile})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className='max-w-xl px-7 md:px-0 text-white md:mt-36 md:ms-52 relative z-10'>
                    <img src={JukeImg} alt="Jukebox" className='h-8 md:h-auto' />
                    <h2 className='text-xl md:text-4xl font-bold py-4'>JukeBox is The Factory's flagship <span className='text-[#71BF44]'>3-month</span> incubator program</h2>
                    <p className='text-[17px] md:text-2xl'>We identify, nurture, and invest in early-stage startups in exchange for 10% equity. Our goal is to help startups refine their business models, achieve market readiness, and foster innovation by connecting them with a network of investors, mentors, and strategic partners.</p>

                    <ButtonComponent
                        text="Apply Now"
                        jukebox={true}
                        fullWidth="w-auto"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero