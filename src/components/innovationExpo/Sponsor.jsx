import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import Gold from '../../assets/innovationExpo/gold.png'
import Platinum from '../../assets/innovationExpo/platinum.png'
import Silver from '../../assets/innovationExpo/silver.png'
import Gold2 from '../../assets/innovationExpo/Gold2.png'
import Platinum2 from '../../assets/innovationExpo/Platinum2.png'

const Sponsor = () => {
    return (
        <section className='w-full bg-gradient-to-b  from-white to-gray-50 py-8 px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl mx-auto '>
                <div className='text-center'>
                    <SectionHeaders
                        title="Sponsorship Tiers"
                        desc="Join us in shaping the future of innovation by partnering at one of our exclusive sponsorship tiers:"
                        fadeInUp={FadeInUp}
                    />
                </div>

                <div className='text-center md:hidden'>
                    {[Platinum2, Silver, Gold2].map((card, idx) => (
                        <img
                        src={card}
                        alt="Sponsor card"
                        className="h-80 inline-block py-2"
                    />
                    ))}
                </div>
                
                <div className='hidden md:block'>
                    <div className="flex flex-col sm:flex-row justify-center items-center relative">
                        <img
                            src={Platinum}
                            alt="Platinum"
                            className="h-80 absolute left-20 -bottom-5"
                        />
                        <img
                            src={Silver}
                            alt="Silver"
                            className="h-80 z-10 absoldute"
                        />
                        <img
                            src={Gold}
                            alt="Gold"
                            className="h-80 absolute right-20 -bottom-5"
                        />
                    </div>
                </div>
                

            </div>
        </section>
    )
}

export default Sponsor