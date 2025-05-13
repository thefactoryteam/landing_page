import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'
import AIicon from '../../assets/bootcamp/ai.png'
import AnimationIcon from '../../assets/bootcamp/animation.png'
import CybersecurityIcon from '../../assets/bootcamp/cybersecurity.png'
import DataAnalyticsIcon from '../../assets/bootcamp/dataanalyticsicon.png'
import FrontendIcon from '../../assets/bootcamp/frontendIcon.png'
import ProductIcon from '../../assets/bootcamp/productIcon.png'

const skills = [
    { 
        icon: AIicon,
        title: "Front-end Engineering",
        desc: "Front-end engineering focuses on building user interfaces using HTML, CSS, and JavaScript frameworks. It ensures websites and apps look great and work smoothly across devices."
     },
     { 
        icon: ProductIcon,
        title: "Product Design",
        desc: "Product design blends creativity and functionality to create user-friendly products. It involves user research, wireframing, prototyping, and testing to meet user needs."
     },
     { 
        icon: Fsy,
        title: "Product Design",
        desc: "Product design blends creativity and functionality to create user-friendly products. It involves user research, wireframing, prototyping, and testing to meet user needs."
     }
]

const SkillsTrack = () => {
    return (
        <section className='w-ful py-8 px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                    title="Skill Tracks"
                    desc="Choose your path and gain hands-on experience in high-demand tech fields. Our bootcamp tracks are designed to fast-track your skills and prepare you for real-world opportunities."
                    fadeInUp={FadeInUp}
                    maxWidth='max-w-2xl'
                />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>

                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default SkillsTrack