import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router'
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube  } from "react-icons/fa6";

const footerMenu = [
    { href: "/", text: "Home" },
    { href: "/get-to-know-us", text: "Get To Know Us" },
    { href: "/innovation-expo", text: "Innovation Expo" },
    { href: "/jukebox", text: "Jukebox" },
    { href: "/co-working-space", text: "Co-Working Space" },
    { href: "/bootcamps-and-training", text: "Bootcamps & Training" },
    // { href: "#learning-and-resources", text: "Learning & Resources" },
    // { href: "#Courses", text: "Courses" },
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
                        <p className='text-xl text-center md:text-left'>Interested in hearing from us? </p>
                        <div className="flex items-center mt-2 ">
                            
                            <Link to="/contact" className="rounded-full w-full text-center bg-[#231F20] text-[#ECFBEB] font-normal px-4 md:px-6 py-2 text-sm md:text-base cursor-pointer shadow-lg">Drop a message</Link>
                        </div>
                    
                        <div className="flex gap-5 mt-10 justify-center">
                            <a href="https://instagram.com/_thefactoryhq" target='_blank'>
                                <FaInstagram className="text-3xl cursor-pointer hover:text-[#2BE028] transform transition-transform duration-300 hover:scale-125 hover:-rotate-6" />
                            </a>
                            <a href="https://x.com/the_factoryhq" target='_blank'>
                                <FaXTwitter className="text-3xl cursor-pointer hover:text-[#2BE028] transform transition-transform duration-300 hover:scale-125 hover:rotate-6" />
                            </a>
                            <a href="https://linkedin.com/company/techfactoryhq" target='_blank'>
                                <FaLinkedin className="text-3xl cursor-pointer hover:text-[#2BE028] transform transition-transform duration-300 hover:scale-125 hover:rotate-6" />
                            </a>
                            <a href="https://youtube.com/@TheFactory_HQ" target='_blank'>
                                <FaYoutube  className="text-3xl cursor-pointer hover:text-[#2BE028] transform transition-transform duration-300 hover:scale-125 hover:rotate-6" />
                            </a>
                            
                        </div>

                    </div>
                </div>

                <hr className='mt-10 border-[#E7E7E7]' />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs py-10">
                    <p>Copyright © 2025 - Present The Factory®. All rights reserved.</p>
                    <div className="flex justify-center gap-5">
                        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:underline">Terms & Conditions</Link>
                        <Link to="/contact" className="hover:underline">Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer