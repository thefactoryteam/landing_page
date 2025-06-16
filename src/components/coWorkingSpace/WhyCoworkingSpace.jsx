import React from 'react'

const WhyCoworkingSpace = ({text, align="text-center md:text-left"}) => {
  return (
    <section className='p-8 md:p-16'>
        <div className='max-w-5xl mx-auto'>
            <p className={`text-xl md:text-4xl ${align} meriwether-font md:leading-12`}>{text} </p>
        </div>
    </section>
  )
}

export default WhyCoworkingSpace