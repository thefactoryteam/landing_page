// import React, { useState } from 'react'
// import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
// import Logo from "../assets/logo.png"

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//     const menu = [
//         { href: "#get-to-know-us", text: "Get To Know Us" },
//         { href: "#our-services", text: "Our Services" },
//         { href: "#learning-and-resources", text: "Learning & Resources" },
//         { href: "#innovation-expo", text: "Innovation Expo" },
//         { href: "#Courses", text: "Courses" }
//     ]

//     return (
//         <div className=''>
//             <div className='w-4/5 mx-auto flex flex-row py-6 items-center secondaryFont'>
//                 <div className='basis-1/4'>
//                     <nav>
//                         <PopoverGroup className="hidden lg:flex lg:gap-x-12">
//                             <Popover className="relative">
//                                 <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold  cursor-pointer px-4 py-2  text-[#2BE028]  ${isOpen ? "w-screen max-w-52 rounded-t-3xl bg-white border-0" : "rounded-full bg-[#231F20] ring-1 shadow-lg"}`}
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 >
//                                     Home
//                                 </PopoverButton>

//                                 <PopoverPanel
//                                     transition
//                                     className="absolute top-full z-10 w-screen max-w-52 overflow-hidden rounded-b-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
//                                 >
//                                     <div className="p-4">
//                                         {menu.map((item) => (
//                                             <div
//                                                 key={item.text}
//                                                 className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-[#231F20]"
//                                             >
//                                                 <div className="flex-auto">
//                                                     <a href={item.href} className="block font-semibold hover:text-white text-gray-900">
//                                                         {item.text}
//                                                         <span className="absolute inset-0" />
//                                                     </a>

//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>

//                                 </PopoverPanel>
//                             </Popover>


//                         </PopoverGroup>
//                     </nav>
//                 </div>
//                 <div className='basis-2/4 flex justify-center'>
//                     <img src={Logo} alt="TheFactory Logo" className='h-11 w-auto' />
//                 </div>
//                 <div className='basis-1/4 text-end'>
//                     <button className='rounded-full bg-[#231F20] text-[#ECFBEB] px-5 py-2 cursor-pointer'>Sign up</button>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// export default Header



import React from "react";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import Logo from "../assets/logo.png";

const Header = () => {
  const menu = [
    { href: "#get-to-know-us", text: "Get To Know Us" },
    { href: "#our-services", text: "Our Services" },
    { href: "#learning-and-resources", text: "Learning & Resources" },
    { href: "#innovation-expo", text: "Innovation Expo" },
    { href: "#Courses", text: "Courses" },
  ];

  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto flex flex-row py-6 items-center secondaryFont">
        
        {/* Left Side - Expanding Home Button */}
        <div className="basis-1/4 relative">
        <nav>
          <PopoverGroup className="hidden lg:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  {/* Home Button - Always Left-Aligned */}
                  <PopoverButton
                    className={`text-sm font-semibold cursor-pointer px-6 py-2 
                              text-[#2BE028] transition-all duration-300 text-left
                              focus:outline-none focus:ring-0 focus:border-0
                              ${open ? "bg-white border-gray-300 rounded-t-2xl shadow-lg  w-56" : "rounded-full bg-[#231F20] w-20 shadow-lg"}`}
                  >
                    Home
                  </PopoverButton>

                  {/* Dropdown Panel */}
                  {open && (
                    <PopoverPanel
                    transition
                      className="absolute top-full z-10 w-screen max-w-56 overflow-hidden rounded-b-3xl bg-white ring-one shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      <div className="px-4 pb-4">
                        {menu.map((item) => (
                          <a
                            key={item.text}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] rounded-lg transition"
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  )}
                </>
              )}
            </Popover>
          </PopoverGroup>
        </nav>
          
        </div>

        {/* Center - Logo */}
        <div className="basis-2/4 flex justify-center">
          <img src={Logo} alt="The Factory Logo" className="h-11 w-auto" />
        </div>

        {/* Right Side - Sign Up Button */}
        <div className="basis-1/4 text-end">
          <button className="rounded-full bg-[#231F20] text-[#ECFBEB] px-6 py-2 cursor-pointer shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
