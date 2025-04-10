import React, { useState } from "react";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo_icon.png";
import SignUp from "./SignUp";

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); 

  const menu = [
    { href: "#get-to-know-us", text: "Get To Know Us" },
    { href: "#our-services", text: "Our Services" },
    { href: "#learning-and-resources", text: "Learning & Resources" },
    { href: "#innovation-expo", text: "Innovation Expo" },
    { href: "#Courses", text: "Courses" },
  ];

  return (
    <div className="w-full">
      <div className="md:w-4/5 px-2 md:px-0 mx-auto flex flex-row py-3 md:py-6 items-center secondaryFont">
        
        {/* Left Side - Expanding Home Button */}
        <div className="basis-1/3 md:basis-1/4 relative">
          <PopoverGroup className="flex">
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
                            className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] rounded-xl transition"
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
        <div className="basis-1/3 md:basis-2/4 flex justify-center">
          <img src={Logo} alt="The Factory Logo" className="h-11 hidden md:block" />
          <img src={Logo2} alt="The Factory Logo" className="h-11 w-auto md:hidden" />
        </div>

        {/* Right Side - Sign Up Button */}
        <div className="basis-1/3 md:basis-1/4 text-end">
          <button
            className="rounded-full bg-[#231F20] text-[#ECFBEB] px-6 py-2 cursor-pointer shadow-lg"
            onClick={() => setIsSignUpOpen(true)} 
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
