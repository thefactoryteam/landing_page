import React from 'react'
import { FadeInUp } from '../../utils/animations'
import SectionHeaders from '../shared/SectionHeaders'
import Sigc from "../../assets/innovationExpo/sigc.png"
import Tinapa from "../../assets/innovationExpo/tinapa.png"
import Cccc from "../../assets/innovationExpo/cccc.png"
import Mete from "../../assets/innovationExpo/mete.png"
import Jukebox from "../../assets/innovationExpo/jukebox.png"

const OurPartners = () => {
    return (
        <section className='w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <SectionHeaders
                        title="Our Partners"
                        desc="Our vision is to be the undisputed hub of Africa's emerging tech scene, empowering African tech talent to achieve global prominence."
                        fadeInUp={FadeInUp}
                        maxWidth='max-w-xl'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5 justify-center'>
                    {[Sigc, Tinapa, Cccc, Mete, Jukebox].map((partner, idx) => {
                        return (
                            <div key={idx} className='flex justify-center'>
                                <img src={partner} alt="" className='h-24' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default OurPartners