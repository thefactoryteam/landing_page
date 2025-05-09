import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import ButtonComponent from '../shared/ButtonComponent'
import metricsImage from '../../assets/innovationExpo/shininglogo.png';
import BeneftsComponent from '../shared/BeneftsComponent';

const BootBenefits = () => {

    const partnerReasons = [
        <span><span className="font-bold"> Direct access</span> to investors and industry decision - makers</span>,
        <span>Visibility among <span className="font-bold">200+ tech innovators</span></span>,
        <span>Opportunity<span className="font-bold">to pitch your solution</span></span>,
        <span><span className="font-bold">Networking</span> with potential collaborators</span>,
    ]

    return (
        <section className='w-full bg-gradient-to-b from-gray-50 to-[#F4F4F4] pt-20 px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Key Booth Benefits"
                        fadeInUp={FadeInUp}
                    />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Image Box */}
                    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <img src={metricsImage} alt="Impact" className="w-full h-auto object-contain" />
                    </div>

                    {/* Metrics Box */}
                    <BeneftsComponent
                        benefits={partnerReasons}
                        colouredEllipse={true}
                    />


                </div>
                <div className='flex justify-center mt-10'>
                    <ButtonComponent
                        text="Reserve Your Spot Today!"
                    />
                </div>
            </div>
        </section>
    )
}

export default BootBenefits