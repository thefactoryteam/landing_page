// import React from "react";
// import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
// import Logo from "../assets/logo.png";
// import SignUp from "./SignUp";

// const Header = () => {
//   const menu = [
//     { href: "#get-to-know-us", text: "Get To Know Us" },
//     { href: "#our-services", text: "Our Services" },
//     { href: "#learning-and-resources", text: "Learning & Resources" },
//     { href: "#innovation-expo", text: "Innovation Expo" },
//     { href: "#Courses", text: "Courses" },
//   ];

//   return (
//     <div className="w-full">
//       <div className="w-4/5 mx-auto flex flex-row py-6 items-center secondaryFont">

//         {/* Left Side - Expanding Home Button */}
//         <div className="basis-1/4 relative">
//           <nav>
//             <PopoverGroup className="hidden lg:flex">
//               <Popover className="relative">
//                 {({ open }) => (
//                   <>
//                     {/* Home Button - Always Left-Aligned */}
//                     <PopoverButton
//                       className={`text-sm font-semibold cursor-pointer px-6 py-2 
//                               text-[#2BE028] transition-all duration-300 text-left
//                               focus:outline-none focus:ring-0 focus:border-0
//                               ${open ? "bg-white border-gray-300 rounded-t-2xl shadow-lg  w-56" : "rounded-full bg-[#231F20] w-20 shadow-lg"}`}
//                     >
//                       Home
//                     </PopoverButton>

//                     {/* Dropdown Panel */}
//                     {open && (
//                       <PopoverPanel
//                         transition
//                         className="absolute top-full z-10 w-screen max-w-56 overflow-hidden rounded-b-3xl bg-white ring-one shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
//                       >
//                         <div className="px-4 pb-4">
//                           {menu.map((item) => (
//                             <a
//                               key={item.text}
//                               href={item.href}
//                               className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] rounded-lg transition"
//                             >
//                               {item.text}
//                             </a>
//                           ))}
//                         </div>
//                       </PopoverPanel>
//                     )}
//                   </>
//                 )}
//               </Popover>
//             </PopoverGroup>
//           </nav>

//         </div>

//         {/* Center - Logo */}
//         <div className="basis-2/4 flex justify-center">
//           <img src={Logo} alt="The Factory Logo" className="h-11 w-auto" />
//         </div>

//         {/* Right Side - Sign Up Button */}
//         <PopoverGroup>
//           <Popover>
//             <div className="basis-1/4 text-end">
//           {({ open }) => {
//             <>
//               <PopoverButton className="rounded-full bg-[#231F20] text-[#ECFBEB] px-6 py-2 cursor-pointer shadow-lg">
//                 Sign Up
//               </PopoverButton>

//               {open && <SignUp />}
//             </>
//           }}

//         </div>
//           </Popover>

//         </PopoverGroup>
        
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import Logo from "../assets/logo.png";
import SignUp from "./SignUp";

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // FIX: Modal State

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
          <PopoverGroup className="hidden lg:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`text-sm font-semibold cursor-pointer px-6 py-2 
                              text-[#2BE028] transition-all duration-300 text-left
                              focus:outline-none focus:ring-0 focus:border-0
                              ${open ? "bg-white border-gray-300 rounded-t-2xl shadow-lg  w-56" : "rounded-full bg-[#231F20] w-20 shadow-lg"}`}
                  >
                    Home
                  </PopoverButton>

                  {open && (
                    <PopoverPanel
                      transition
                      className="absolute top-full left-0 w-56 bg-white rounded-b-2xl shadow-lg ring-1 ring-gray-900/5 overflow-hidden transition-all duration-300"
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
        </div>

        {/* Center - Logo */}
        <div className="basis-2/4 flex justify-center">
          <img src={Logo} alt="The Factory Logo" className="h-11 w-auto" />
        </div>

        {/* Right Side - Sign Up Button */}
        <div className="basis-1/4 text-end">
          <button
            className="rounded-full bg-[#231F20] text-[#ECFBEB] px-6 py-2 cursor-pointer shadow-lg"
            onClick={() => setIsSignUpOpen(true)} // FIX: Open Modal
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Sign-Up Modal */}
      <SignUp isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} /> 
    </div>
  );
};

export default Header;
