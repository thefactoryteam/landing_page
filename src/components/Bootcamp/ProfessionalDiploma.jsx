import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import BootcampTrainingCard from './BootcampTrainingCard'
import ProfessionalDiplomaImg from '../../assets/bootcamp/professionaImg.png'

const ProfessionalDiploma = () => {
    return (
        <section className='w-ful py-20 px-4 md:px-8 lg:px-16 primary-font'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Professional Diploma Program"
                        desc="Take your career to the next level with our 12-month Professional Diploma Program. Dive deeper into advanced topics, gain mentorship from industry experts, and build a portfolio that sets you apart."
                        fadeInUp={FadeInUp}
                        maxWidth='max-w-3xl'
                    />
                </div>

                <div className='flex flex-col md:flex-row items-center gap-10'>

                    <div className='flex-1'>
                        <img
                            src={ProfessionalDiplomaImg}
                            alt="The factory bootcamp"
                            className="w-full max-w-xs md:max-w-sm mx-auto"
                        />
                    </div>

                    <div className='flex-1'>
                        <BootcampTrainingCard
                            title={["Your Training", "Journey"]}
                            details={[
                                "12 months of career-focused training",
                                "Advanced curriculum and personalised mentorship",
                                "Certification upon completion",
                                "Guaranteed internship opportunities",
                                "Access to exclusive job placement support"
                            ]}
                            btnText="Secure your future in tech—apply now!"

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfessionalDiploma