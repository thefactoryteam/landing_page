import React from 'react'
import ImgApp from '../../assets/Jukebox/image.png'


const criteria = [
    {
        number: '1.',
        title: 'Team Structure',
        description: 'Startups with at least two co-founders are preferred, but solo founders with strong traction are welcome.'
    },
    {
        number: '2.',
        title: 'Problem–Solution Fit',
        description: 'The startup must address a significant, real, and urgent problem in a large or growing market.'
    },
    {
        number: '3.',
        title: 'Minimum Viable Product (MVP)',
        description: 'A functional MVP with core features that have been tested or deployed in the market.'
    },
    {
        number: '4.',
        title: 'Traction Evidence',
        description: 'Applicants must showcase market validation through active users, revenue, or strategic partnerships.'
    },
    {
        number: '5.',
        title: 'Market Potential',
        description: 'The target market must present scalable growth opportunities with clear potential for disruption.'
    },
    {
        number: '6.',
        title: 'Competitive Advantage',
        description: 'Startups should highlight what sets them apart and why they are positioned to succeed.'
    },
    {
        number: '7.',
        title: 'Scalability',
        description: 'The solution must have the potential to expand across markets or industries.'
    },
    {
        number: '8.',
        title: 'Revenue Model',
        description: 'A clear revenue plan or strategy for financial sustainability beyond the program.'
    },
    {
        number: '9.',
        title: 'Investment Utilization',
        description: 'A roadmap on how the funding will drive key business milestones.'
    }
];

const ApplicationCriteria = () => {

    return (
        <section className='bg-black text-white p-8 md:p-16 primary-font'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex items-center'>
                    <div className='flex-3/5'>
                        <h2 className="text-6xl font-bold mb-4 leading-20">
                            <span className="text-[#71BF44]">Application</span><br />Criteria:
                        </h2>
                    </div>
                    <div className='flex-2/5'>
                        <p className="max-w-xl text-xl leading-8">
                            To be considered for the Jukebox program, startups must meet the following criteria:
                        </p>
                    </div>
                </div>

                <div className='flex mt-16'>
                    <div className='flex-1/2'>
                        <div className="space-y-6">
                            {criteria.map((item, idx) => (
                                <div key={idx} className="text-sm sm:text-xl max-w-md">
                                    <p className="text-[#71BF44] font-bold">
                                        {item.number} {item.title}:
                                    </p>
                                    <p className="text-gray-300 ps-5">{item.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='flex-1/2'>
                        <div className='flex justify-end sticky top-28'>
                            <img src={ImgApp} alt="Jukebox" className='h-[700px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApplicationCriteria