import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import BootcampTrainingCard from './BootcampTrainingCard'
import DiplomaImg from '../../assets/bootcamp/diplomaImage.png'

const DiplomaProgram = () => {
    return (
        <section className='w-ful py-20 px-4 md:px-8 lg:px-16 primary-font bg-[#F4F4F4] border-t border-dashed border-t-[#231F20] border-b border-b-dashed border-b-[#231F20]'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Diploma Program"
                        desc="Kickstart your tech career in just 3 months! Our intensive Diploma Program focuses on specialised, in-demand skills through hands-on projects and a real-world capstone project to showcase your expertise."
                        fadeInUp={FadeInUp}
                        maxWidth='max-w-3xl'
                    />
                </div>

                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <div className='flex-1'>
                        <BootcampTrainingCard
                            title={["Your Training", "Journey"]}
                            details={[
                                "3 months of immersive, project-based learning",
                                "Certification upon completion",
                                "Access to cutting-edge tools and resources",
                                "Internship and job placement support"
                            ]}
                            btnText="Start your tech journey today—enroll now!"
                        />
                    </div>

                    <div className='flex-1'>
                        <img
                            src={DiplomaImg}
                            alt="The factory bootcamp"
                            className="w-full max-w-xs md:max-w-sm mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiplomaProgram