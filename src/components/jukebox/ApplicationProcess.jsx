import React from 'react'
import { TiArrowForward } from "react-icons/ti";
import Grid from '../../assets/Grid.png'
import { BiSolidPencil } from "react-icons/bi";
import ButtonComponent from '../shared/ButtonComponent';


const steps = [
    {
        title: "Step One",
        label: "Online Submission",
        description: "Apply via {Link Here}",
        arrow: "left"
    },
    {
        title: "Step Two",
        label: "Screening",
        description: "Our team evaluates applications based on the set criteria.",
        arrow: "right"
    },
    {
        title: "Step Three",
        label: "Interviews",
        description: "Shortlisted startups will participate in an interview to discuss their vision and progress.",
        arrow: "left"
    },
    {
        title: "Step Four",
        label: "Final Selection",
        description: "The top 12 startups will be chosen and notified.",
        arrow: "right"
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
                    <div
                        key={index}
                        className="relative bg-[#231F20] text-white border border-white/10 shadow-xl rounded-2xl px-6 py-6 md:py-8 md:px-10 flex items-start gap-6 max-w-3xl mx-auto"
                    >
                        {/* Arrow Icon */}
                        <div className={`min-w-[50px] mt-1 absolute ${step.arrow === "left" ? "-left-9" : "-right-9"} `}>
                            <TiArrowForward
                                size={90}
                                className={`text-[#231F20] transform ${step.arrow === "left" ? "-scale-y-100" : "rotate-180"} `}
                            />

                        </div>

                        {/* Text Content */}
                        <div className='w-full z-10'>
                            <div className="text-sm md:text-base font-bold leading-tight">
                                <div className='flex justify-between'>
                                    <p className='font-extrabold text-[17px] md:text-3xl'>
                                        {step.title}{' '}
                                        <span className="text-[#71BF44] font-normal">{step.label}</span>
                                    </p>
                                    <p className=''><BiSolidPencil className='text-sm md:text-3xl' /> </p>
                                </div>

                            </div>
                            <p className="mt-2 text-sm md:text-xl font-semibold text-white/90">{step.description}</p>
                        </div>
                    </div>
                ))}

                <div className='text-center mt-20'>
                    <p className='text-4xl'>Ready to take your startup to the <b>next level?</b> </p>
                </div>

                <div className='flex justify-center'>
                    <ButtonComponent
                        text="Apply Now"
                    />
                </div>

            </div>
        </section>
    );
};

export default ApplicationProcess;
