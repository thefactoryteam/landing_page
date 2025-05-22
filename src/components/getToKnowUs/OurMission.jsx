import React from 'react'
import SectionHeaders from '../shared/SectionHeaders'
import { FadeInUp } from '../../utils/animations'


const OurMission = () => {
  return (

        <section className='bg-[#F4F4F4]'>
              <div className="relative max-w-6xl mx-auto py-20 text-center px-4 overflow-hidden">
        
                <SectionHeaders 
                  title="Our mission"
                  desc="Building a connected world through innovation, collaboration, and impact by empowering exceptional talent."
                  fadeInUp={FadeInUp}
                />
              </div>
            </section>

  )
}

export default OurMission