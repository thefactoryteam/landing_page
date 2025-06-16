import React from 'react'
import { motion } from 'framer-motion'
import HeroImgMobile from '../../assets/Jukebox/heroImgMobile.png'
import JukeImg from '../../assets/Jukebox/jukeBox.png'
import ButtonComponent from '../shared/ButtonComponent'

const Hero = ({ HeroImg, title, jukeboxLogo = false, desc }) => {
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

                <div className={`max-w-xl px-7 md:px-0 text-white ${jukeboxLogo ? "md:mt-36" : ""}  md:ms-52 relative z-10`}>
                    { jukeboxLogo && <img src={JukeImg} alt="Jukebox" className='h-8 md:h-auto' />}
                    <h2 className={`text-xl ${jukeboxLogo ? "md:text-4xl" : "md:text-6xl leading-20"} font-bold py-4`}>{title} </h2>
                    <p className={`text-[17px] md:text-2xl ${!jukeboxLogo && "leading-10"}`}>{desc} </p>

                    {jukeboxLogo && <ButtonComponent
                        text="Apply Now"
                        jukebox={true}
                        fullWidth="w-auto"
                        href='/jukebox/apply'
                    />}
                    
                    
                </div>
            </motion.div>
        </section>
    )
}

export default Hero