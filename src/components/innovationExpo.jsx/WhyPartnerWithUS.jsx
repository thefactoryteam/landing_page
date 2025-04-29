import React from 'react'
import SectionHeaders from '../SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import EllipseShape from '../../assets/innovationExpo/ellipseShape.png'
import { div } from 'motion/react-client'

const WhyPartnerWithUS = () => {
    return (
        <section className='w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Why Partner With Us?"
                        desc=""
                        fadeInUp={FadeInUp}
                    />
                </div>


                <div className=''>
                    {["Reach 500+ tech innovators and decision-makers", "Position your brand at the forefront of technological advancement", "Access a curated network of startups, investors, and industry leaders", "Demonstrate tough leadership in Africa's evolving tech ecosystem"].map((why, idx) => {
                        return (
                            <div key={idx} className='flex gap-8'>
                                <div>
                                    <img src={EllipseShape} alt="" className='h-10' />
                                </div>
                                <div>{why} </div>
                            </div>
                        )
                    })}

                </div>


            </div>
        </section>
    )
}

export default WhyPartnerWithUS