import React from 'react'

const steps = [
    {
        title: "Step One",
        label: "Online Submission",
        description: "Apply via {Link Here}"
    },
    {
        title: "Step Two",
        label: "Screening",
        description: "Our team evaluates applications based on the set criteria."
    },
    {
        title: "Step Three",
        label: "Interviews",
        description: "Shortlisted startups will participate in an interview to discuss their vision and progress."
    },
    {
        title: "Step Four",
        label: "Final Selection",
        description: "The top 12 startups will be chosen and notified."
    }
];

const ApplicationProcess = () => {
    return (
        <section className='bg-black text-white p-8 md:p-16 primary-font'>
            <div className='max-w-6xl mx-auto'>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-black text-white rounded-2xl relative p-6 max-w-3xl mx-auto shadow-lg`}>

                            <div className="text-sm font-bold">
                                {step.title}{' '}
                                <span className="text-green-400 font-medium">{step.label}</span>
                            </div>
                            <div className="mt-2 font-semibold text-base">{step.description}</div>

                           
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ApplicationProcess


