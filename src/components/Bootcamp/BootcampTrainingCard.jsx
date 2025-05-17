// import React from 'react'
// import ButtonComponent from '../shared/ButtonComponent'

// const BootcampTrainingCard = ({ title, details }) => {
//     return (
//         <div className='p-6'>
//             <h2 className='meriwether-font text-2xl md:text-4xl !font-bold mb-4'>Your Training <br /> Journey</h2>
//             <ul className='list-disc pl-6 space-y-2 text-sm md:text-base'>
//                 {details.map((detail, idx) => (
//                     <li key={idx}>{detail} </li>
//                 ))}
//             </ul>
//             <ButtonComponent
//                 text="Start your tech journey today—enroll now!"
//                 arrow={false}
//                 size='text-xs md:text-sm'
//                 color='text-[#2BE028]'
//             />
//         </div>
//     )
// }

// export default BootcampTrainingCard


import React from 'react'
import ButtonComponent from '../shared/ButtonComponent'

const BootcampTrainingCard = ({ title, details, btnText }) => {
    return (
        <div className='p-6'>
            <h2 className='meriwether-font text-2xl md:text-4xl !font-bold mb-4'>
                {title.map((line, idx) => (
                    <span key={idx} className="block">
                        {line}
                    </span>
                ))}
            </h2>
            <ul className='list-disc pl-6 space-y-2 text-sm md:text-base'>
                {details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))}
            </ul>
            <ButtonComponent
                text={btnText}
                arrow={false}
                size='text-xs md:text-sm'
                color='text-[#2BE028]'
            />
        </div>
    )
}

export default BootcampTrainingCard