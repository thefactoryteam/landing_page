import React from 'react'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import Logo from "../assets/logo.png"

const Header = () => {

    const menu = [
        { href: "#get-to-know-us", text: "Get To Know Us" },
        { href: "#our-services", text: "Our Services" },
        { href: "#learning-and-resources", text: "Learning & Resources" },
        { href: "#innovation-expo", text: "Innovation Expo" },
        { href: "#Courses", text: "Courses" }
    ]

    return (
        <div className='w-4/5 mx-auto flex flex-row py-6 items-center secondaryFont'>
            <div className='basis-1/4'>
            <nav>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold bg-[#231F20] cursor-pointer px-4 py-2 rounded-full text-[#2BE028] ring-1 shadow-lg">
                                Home
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute top-full z-10 mt-3 w-screen max-w-72 overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {menu.map((item) => (
                                        <div
                                            key={item.text}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.text}
                                                    <span className="absolute inset-0" />
                                                </a>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </PopoverPanel>
                        </Popover>


                    </PopoverGroup>
                </nav>
            </div>
            <div className='basis-2/4 flex justify-center'>
                <img src={Logo} alt="TheFactory Logo" className='h-11 w-auto'/>
            </div>
            <div className='basis-1/4 text-end'>
                <button className='rounded-full bg-[#231F20] text-[#ECFBEB] px-5 py-2 cursor-pointer'>Sign up</button>
            </div>
        </div>
    )
}

export default Header





