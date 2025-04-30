import React from 'react'
import SectionHeaders from '../SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import BeneftsComponent from '../shared/BeneftsComponent'

const WhyPartnerWithUS = () => {
    const partnerReasons = [
        <span><span className='font-bold'>Reach 500+ </span>tech innovators and decision-makers</span>,
        <span><span className='font-bold'>Position your brand </span>at the forefront of technological advancement</span>,
        <span><span className='font-bold'>Access a curated network </span>of startups, investors, and industry leaders</span>,
        <span><span className='font-bold'>Demonstrate thought leadership </span>in Africa's evolving tech ecosystem</span>,
    ]

    return (
        <section className='w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 lg:px-16'>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-12'>
                    <SectionHeaders
                        title="Why Partner With Us?"
                        desc=""
                        fadeInUp={FadeInUp}
                    />
                </div>

                <BeneftsComponent 
                    benefits={partnerReasons}
                />
            </div>
        </section>
    )
}

export default WhyPartnerWithUS