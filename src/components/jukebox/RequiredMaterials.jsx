import React from 'react'
import ImgApp from '../../assets/Jukebox/pitch.png'

const criteria = [
    {
        number: '1.',
        title: 'Pitch Deck',
        description: 'A concise overview covering the problem, solution, traction, market, team, and financials.'
    },
    {
        number: '2.',
        title: 'Product Demo',
        description: 'A link to a live demo or video walkthrough.'
    },
    {
        number: '3.',
        title: 'Traction Proof',
        description: 'Screenshots, analytics, or documents showcasing traction (e.g., user growth, revenue).'
    },
    {
        number: '4.',
        title: 'Founders’ Bios',
        description: 'Background, roles, and achievements of each team member.'
    },
    {
        number: '5.',
        title: 'Vision Statement',
        description: 'A brief statement outlining long-term goals and mission.'
    }
];

const RequiredMaterials = () => {
    return (
        <section className='bg-black text-white p-8 md:p-16 primary-font'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex gap-20 mt-16'>

                    <div className='flex-1/2'>
                        <div className='flex justify-end sticky top-30'>
                            <img src={ImgApp} alt="Jukebox" className='h-[600px]' />
                        </div>
                    </div>

                    <div className='flex-1/2'>
                        <h2 className="text-6xl font-bold mb-14 leading-20">
                            Required <br /> <span className="text-[#71BF44]">Materials:</span>
                        </h2>
                        <div className="space-y-6">
                            {criteria.map((item, idx) => (
                                <div key={idx} className="text-sm sm:text-xl max-w-md mb-10">
                                    <p className="text-[#71BF44] font-bold">
                                        {item.number} {item.title}:
                                    </p>
                                    <p className="text-gray-300 ps-5">{item.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default RequiredMaterials