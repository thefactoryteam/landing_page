import React from 'react';
import metricsImage from '../../assets/innovationExpo/shininglogo.png';
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations';
import ButtonComponent from '../shared/ButtonComponent'

const ImpactMetrics = () => {
    return (
        <section className="w-full bg-gradient-to-b  from-gray-50 to-white py-20 px-4 md:px-8 lg:px-16">
            <div className='text-center'>
                <SectionHeaders
                    title="Impact Metrics"
                    desc="We’re not just creating an event — we’re building a platform where innovation thrives
        and connections spark real change. Here’s a snapshot of the value our sponsors help unlock:"
                    fadeInUp={FadeInUp}
                />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Image Box */}
                <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
                    <img src={metricsImage} alt="Impact" className="w-full h-auto object-contain" />
                </div>

                {/* Metrics Box */}
                <div className="bg-[#F4F4F4] border-2 border-dashed border-gray-300 rounded-xl p-6 text-left max-w-xs w-full meriwether-font flex justify-center max-h-[450px] h-[450px]">
                    <div className=''>
                        <div className="mb-10">
                            <h3 className="text-[100px] font-bold text-[#231F20] leading-tight relative">7<span className='text-[80px] absolute'>0+</span><span className="text-lg font-bold text-[#231F20] absolute bottom-5">Startups</span> </h3>

                        </div>

                        <div className="mb-10 relative">
                            <h3 className="text-[80px] font-bold text-[#231F20] tracking-wider">10+</h3>
                            <p className="text-lg font-bold text-[#231F20] absolute bottom-1">Industry Speakers</p>
                        </div>

                        <p className="text-lg font-bold text-[#231F20]">
                            Direct Access To <br /> Emerging Tech Talent
                        </p>
                    </div>
                </div>

                
            </div>
            <div className='flex justify-center mt-10'>
                <ButtonComponent 
                    text="Become a Partner"
                />
            </div>
            
        </section>
    );
};

export default ImpactMetrics;
