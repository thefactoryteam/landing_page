import React from 'react'
import { motion } from 'framer-motion'
import { FadeInUp } from '../../utils/animations'
import Marquee from 'react-fast-marquee'
import Img1 from '../../assets/innovationExpo/img1.png'
import Img2 from '../../assets/innovationExpo/img2.png'
import Img3 from '../../assets/innovationExpo/img3.png'
import Img4 from '../../assets/innovationExpo/img4.png'
import Img5 from '../../assets/innovationExpo/img5.png'
import Img6 from '../../assets/innovationExpo/img6.png'
import Img7 from '../../assets/innovationExpo/img7.png'
import Img8 from '../../assets/innovationExpo/img8.png'
import Img9 from '../../assets/innovationExpo/img9.png'
import Img10 from '../../assets/innovationExpo/img10.png'

const Exhibitors = () => {

    const carouselImg = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]
    
    return (
        <section className='w-full bg-gradient-to-b from-white to-gray-50 py-8 pxd-4 md:px-d8 lg:px-1d6'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <motion.h2 
                        variants={FadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="meriwether-font text-4xl !font-semibold mb-4 relative z-10"
                    >
                        Exhibitors/Booth
                    </motion.h2>

                    <motion.h3
                        variants={FadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`text-[#231F20] mx-auto mb-5 text-lg primary-font font-bold md:text-3xl relative z-10 max-w-2xl`}
                    >
                        Showcase Your Innovation at <br /> The Factory Innovation Expo
                    </motion.h3>
                    <motion.p
                        variants={FadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`text-[#231F20] mx-auto mb-10 text-lg primary-font md:text-xl relative z-10 max-w-3xl`}
                    >
                       Elevate your startup or business by securing a prime exhibition booth. Connect with investors, industry leaders, and potential partners while presenting your groundbreaking solutions to a dynamic tech ecosystem.
                    </motion.p>
                </div>
            </div>

            <div>
                <Marquee
                    speed={30}
                    gradient={false}
                    pauseOnHover={true}
                    className="w-full -rotate-2"
                >
                    { carouselImg.map((img, idx) => (
                        <div key={idx} className='mx-3 flex-shrink-0'>
                            <img src={img} alt="The factory" className='h-60 w-auto object-contain'/>
                        </div>
                    )) }
                </Marquee>
            </div>
        </section>
    )
}

export default Exhibitors