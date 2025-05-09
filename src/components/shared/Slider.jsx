import React from 'react'
import Marquee from 'react-fast-marquee'
import FactoryLogo from '../../assets/FactoryLogoWhite.png'

const Slider = () => {
  return (
    <div className="bg-black py-5">
      <Marquee
        speed={30}
        gradient={false}
        pauseOnHover={true}
        className="w-full"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="mx-20 flex-shrink-0">
            <img
              src={FactoryLogo}
              alt={`Factory logo ${i}`}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Slider
