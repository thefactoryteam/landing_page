import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from './OurVision'
import SectionHeaders from './SectionHeaders'


const OurMission = () => {
  return (

        <section className='bg-[#F4F4F4]'>
              <div className="relative max-w-6xl mx-auto py-20 text-center px-4 overflow-hidden">
        
                <SectionHeaders 
                  title="Our mission"
                  desc="Our mission is to ignite Africa's Tech revolution by empowering the continent's most promising minds and fostering a collaborative ecosystem for innovation and growth."
                  fadeInUp={fadeInUp}
                />
              </div>
            </section>

  )
}

export default OurMission