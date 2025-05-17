// import React from 'react'
// import Logo from "../../assets/logo.png"
// import { Link } from 'react-router'

// const footerMenu = [
//     { href: "/", text: "Home" },
//     { href: "/get-to-know-us", text: "Get To Know Us" },
//     { href: "/innovation-expo", text: "Innovation Expo" },
//     { href: "/jukebox", text: "Jukebox" },
//     { href: "/co-working-space", text: "Co-Working Space" },
//     { href: "#", text: "Bootcamps & Training" },
//     { href: "#learning-and-resources", text: "Learning & Resources" },
//     { href: "#Courses", text: "Courses" },
// ]

// const Footer = () => {
//     return (
//         <section className='bg-[#F4F4F4]'>
//             <div className='pt-40 md:w-4/5 mx-auto'>
//                 <div className=" py-6 flex flex-col md:flex-row justify-between text-sm ">
//                     <div className='flex flex-col md:flex-row gap-20'>
//                         <div className='flex justify-center'>
//                             <img src={Logo} alt="Factory Logo" className="h-10 w-auto" />
//                         </div>

//                         <nav className="md:mt-3 flex flex-col text-center md:text-left gap-2 md:gap-5">
//                             {footerMenu.map(({ text, href }, i) => (
//                                 <Link to={href}
//                                     key={i}
//                                     className="relative text-lg text-black hover:text-[#2BE028] transition-all duration-300 after:content-[''] after:absolute after:left-20 md:after:left-0 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-[#2BE028] hover:after:w-10 after:transition-all after:duration-300 leading-6  md:leading-3 "
//                                 >
//                                     {text}
//                                 </Link>
//                             ))}
//                         </nav>

//                     </div>

//                     {/* Contact Form */}
//                     <div className='mt-10 md:mt-0 mx-10 md:mx-0'>
//                         <p className='text-xl text-center md:text-left'>Interested in hearing from us? <i>Then Reach Out!!!</i></p>
//                         <div className="flex items-center mt-2 border ps-3 pe-1 py-1 rounded-full">
//                             <input
//                                 type="email"
//                                 placeholder="Enter Your Email"
//                                 className="bg-transparent outline-none flex-1 text-sm"
//                             />
//                             <button className="bg-black text-white px-5 py-2 rounded-full">Submit</button>
//                         </div>
//                         <p className="text-gray-500 mt-2 text-center md:text-left">hello@techfactory.xyz</p>
//                     </div>
//                 </div>

//                 <hr className='mt-10 border-[#E7E7E7]' />

//                 {/* Footer Bottom */}
//                 <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs py-10">
//                     <p>Copyright © 2024 - Present The Factory®. All rights reserved.</p>
//                     <div className="flex justify-center gap-5">
//                         <a href="#" className="hover:underline">Privacy Policy</a>
//                         <a href="#" className="hover:underline">Terms & Conditions</a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Footer


import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router'

const footerMenu = [
    { href: "/", text: "Home" },
    { href: "/get-to-know-us", text: "Get To Know Us" },
    { href: "/innovation-expo", text: "Innovation Expo" },
    { href: "/jukebox", text: "Jukebox" },
    { href: "/co-working-space", text: "Co-Working Space" },
    { href: "#", text: "Bootcamps & Training" },
    { href: "#learning-and-resources", text: "Learning & Resources" },
    { href: "#Courses", text: "Courses" },
]

const Footer = () => {
    return (
        <section className=''>
            <div className='pt-20 md:w-4/5 mx-auto'>
                <div className=" py-6 flex flex-col md:flex-row justify-between text-sm ">
                    <div className='flex flex-col md:flex-row gap-20'>
                        <div className='flex justify-center'>
                            <img src={Logo} alt="Factory Logo" className="h-10 w-auto" />
                        </div>

                        <nav className="md:mt-3 flex flex-col text-center md:text-left gap-2 md:gap-5">
                            {footerMenu.map(({ text, href }, i) => (
                                <Link to={href}
                                    key={i}
                                    className="relative text-lg text-black hover:text-[#2BE028] transition-all duration-300 after:content-[''] after:absolute after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-[#2BE028] hover:after:w-10 after:transition-all after:duration-300 leading-6 md:leading-3"
                                >
                                    {text}
                                </Link>
                            ))}
                        </nav>

                    </div>

                    {/* Contact Form */}
                    <div className='mt-10 md:mt-0 mx-10 md:mx-0'>
                        <p className='text-xl text-center md:text-left'>Interested in hearing from us? <i>Then Reach Out!!!</i></p>
                        <div className="flex items-center mt-2 border ps-3 pe-1 py-1 rounded-full">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-transparent outline-none flex-1 text-sm"
                            />
                            <button className="bg-black text-white px-5 py-2 rounded-full">Submit</button>
                        </div>
                        <p className="text-gray-500 mt-2 text-center md:text-left">hello@techfactory.xyz</p>
                    </div>
                </div>

                <hr className='mt-10 border-[#E7E7E7]' />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs py-10">
                    <p>Copyright © 2024 - Present The Factory®. All rights reserved.</p>
                    <div className="flex justify-center gap-5">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer