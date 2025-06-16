import React from 'react'
import Grid from '../../assets/Grid.png'
import ButtonComponent from '../shared/ButtonComponent';
import Box1 from '../../assets/Jukebox/box1.png'
import Box2 from '../../assets/Jukebox/box2.png'
import Box3 from '../../assets/Jukebox/box3.png'
import Box4 from '../../assets/Jukebox/box4.png'
import Pencil from '../../assets/Jukebox/pencil_solid.png'


const steps = [
    {
        title: "Step One",
        label: "Online Submission",
        description: "Apply via {Link Here}",
        bg: Box1
    },
    {
        title: "Step Two",
        label: "Screening",
        description: "Our team evaluates applications based on the set criteria.",
        bg: Box3
    },
    {
        title: "Step Three",
        label: "Interviews",
        description: "Shortlisted startups will participate in an interview to discuss their vision and progress.",
        bg: Box2
    },
    {
        title: "Step Four",
        label: "Final Selection",
        description: "The top 12 startups will be chosen and notified.",
        bg: Box4
    }
];

const ApplicationProcess = () => {
    return (
        <section className="p-8 md:p-16 primary-font" style={{ backgroundImage: `url(${Grid})` }}>
            <div className='text-center mt-20'>
                <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-14 md:leading-20">
                    Application Process:
                </h2>
            </div>
            <div className="max-w-6xl mx-auto space-y-10">
                {steps.map((step, index) => (


                    <div key={index} className="relative w-full max-w-3xl mx-auto">
                        <img
                            src={step.bg}
                            alt="Callout box background"
                            width={800}
                            height={200}
                            className={`w-full h-auto ${index % 2 !== 0 ? "mx-3 md:mx-8" : ""}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        />

                        <div className="absolute inset-0 flex items-center justify-centder pxf-4 sm:pxf-6 md:pxf-8 lg:pxf-12">
                            <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium text-cendter leading-relaxed w-full px-10 md:ps-20">
                                <div className="text-sm md:text-base font-bold leading-tight">
                                    <div className='flex justify-between'>
                                        <p className='font-extrabold text-[15px] md:text-3xl'>
                                            {step.title}{' '}
                                            <span className="text-[#71BF44] font-normal">{step.label}</span>
                                        </p>
                                        <p className='flex justify-end'><img src={Pencil} className='h-[15px] md:h-[30px]' alt="" /> </p>
                                    </div>

                                </div>
                                <p className="mt-2 text-xs md:text-xl max-w-lg font-semibold text-white/90">{step.description}</p>
                            </div>
                        </div>

                    </div>

                ))}

                <div className='text-center mt-20'>
                    <p className='text-2xl md:text-4xl'>Ready to take your startup to the <b>next level?</b> </p>
                </div>

                <div className='flex justify-center'>
                    <ButtonComponent
                        text="Apply Now"
                        href="/jukebox/apply"
                    />
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;
