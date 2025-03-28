import React from 'react'
import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className='mt-40 w-4/5 mx-auto'>
            <div className=" py-6 flex justify-between text-sm ">
                <div className='flex gap-20'>
                    <div>
                        <img src={Logo} alt="Factory Logo" className="" />
                    </div>

                    <nav className="mt-3 flex flex-col gap-5">
                        <a href="#" className=" text-xl">Home</a>
                        <a href="#" className=" text-xl">Incubator Programmes</a>
                        <a href="#" className=" text-xl">Bootcamps/Training</a>
                        <a href="#" className=" text-xl">Co-working Space</a>
                    </nav>
                </div>

                {/* Contact Form */}
                <div >
                    <p className='text-xl'>Interested in hearing from us? <i>Then Reach Out!!!</i></p>
                    <div className="flex items-center mt-2 border ps-3 pe-1 py-1 rounded-full">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-transparent outline-none flex-1 text-sm"
                        />
                        <button className="bg-black text-white px-5 py-2 rounded-full">Submit</button>
                    </div>
                    <p className="text-gray-500 mt-2">hello@techfactory.xyz</p>
                </div>
            </div>

            <hr className='mt-10 border-[#E7E7E7]'/>

            {/* Footer Bottom */}
            <div className="flex items-center justify-between text-gray-500 text-xs py-10">
                <p>Copyright © 2024 - Present The Factory®. All rights reserved.</p>
                <div className="flex justify-center gap-5">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer