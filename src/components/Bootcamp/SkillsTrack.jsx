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
        icon: FrontendIcon,
        title: "Front-end Engineering",
        desc: "Front-end engineering focuses on building user interfaces using HTML, CSS, and JavaScript frameworks. It ensures websites and apps look great and work smoothly across devices."
    },
    {
        icon: ProductIcon,
        title: "Product Design",
        desc: "Product design blends creativity and functionality to create user-friendly products. It involves user research, wireframing, prototyping, and testing to meet user needs."
    },
    {
        icon: DataAnalyticsIcon,
        title: "Data Analytics",
        desc: "Data analytics involves collecting and analyzing data to uncover trends and insights. It helps businesses make informed decisions and improve performance."
    },
    {
        icon: CybersecurityIcon,
        title: "Cybersecurity",
        desc: "Cybersecurity protects systems and data from digital attacks. It includes measures like encryption, firewalls, and ethical hacking to ensure privacy and safety."
    },
    {
        icon: AIicon,
        title: "AI & Machine Learning",
        desc: "AI and machine learning enable systems to learn from data and make intelligent decisions. They power innovations like chatbots, recommendation engines, and self-driving cars."
    },
    {
        icon: AnimationIcon,
        title: "Animation & Gaming Design",
        desc: "Animation and gaming design bring stories and experiences to life through motion and interactivity. It combines art, coding, and storytelling to create engaging digital worlds."
    },
]

const SkillsTrack = () => {
    return (
        <section className='w-ful py-8 px-4 md:px-8 lg:px-16 primary-font'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Skill Tracks"
                        desc="Choose your path and gain hands-on experience in high-demand tech fields. Our bootcamp tracks are designed to fast-track your skills and prepare you for real-world opportunities."
                        fadeInUp={FadeInUp}
                        maxWidth='max-w-2xl'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {skills.map((skill, idx) => (
                        <div key={idx} className='border border-dashed border-[#231F20] rounded-2xl p-10'>
                            <div className='flex items-center gap-8'>
                                <div>
                                    <img src={skill.icon} alt="" />
                                </div>
                                <h2 className='text-2xl'>{skill.title} </h2>
                            </div>

                            <p className='mt-3'>{skill.desc} </p>
                        </div>
                    ))}
                    <div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SkillsTrack