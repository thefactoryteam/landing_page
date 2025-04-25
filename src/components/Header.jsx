import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo_icon.png";
import SignUp from "./SignUp";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import AuthModal from "./AuthModal";
import { motion, AnimatePresence } from 'framer-motion'


// const menu = [
//   { href: "/", text: "Home" },
//   { href: "#get-to-know-us", text: "Get To Know Us" },
//   { href: "#our-services", text: "Our Services" },
//   { href: "#learning-and-resources", text: "Learning & Resources" },
//   { href: "#innovation-expo", text: "Innovation Expo" },
//   { href: "#Courses", text: "Courses" },
// ];

const menu = [
  { href: "/", text: "Home" },
  { href: "/get-to-know-us", text: "Get To Know Us" },
  { href: "/Jukebox", text: "Jukebox" },
  { href: "#innovation-expo", text: "Innovation Expo" },
];

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()


  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navigateTo = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className={`
      w-full sticky top-0 z-50 transition-all duration-300
      ${isScrolled
        ? "backdrop-blur-md bg-white/60 border-b border-gray-200"
        : "bg-transparent border-transparent"}
    `}>

      <div className={`md:w-4/5 px-2 md:px-0 mx-auto flex flex-row items-center justify-between transition-all secondaryFont duration-300 ease-in-out ${isScrolled ? "py-3 md:py-3" : "py-4 md:py-6"}`}>

        <div className="basis-1/3 md:basis-1/4 relative">
          <div className="relative inline-block text-left" ref={wrapperRef}>
            <div className="relative inline-flex -top-5">
              {/* Button */}
              <Transition
                show={!menuOpen}
                as="div"
                appear
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <button
                  onClick={() => setMenuOpen(true)}
                  className="absolute inline-flex items-center justify-center text-sm font-semibold cursor-pointer px-6 py-2 transition-all duration-300 text-left focus:outline-none rounded-full bg-[#231F20] shadow-lg text-[#2BE028] whitespace-nowrap"
                >
                  {selectedItem}
                </button>
              </Transition>

              {/* Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ width: 'auto', height: 'auto', opacity: 1 }}
                    exit={{ width: 0, height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.8, 0.25, 1]
                    }}
                    className="absolute top-0 left-0 z-10 origin-top-left overflow-hidden"
                  >
                    <Menu as="div" onClose={() => setMenuOpen(false)}>
                      <MenuItems
                        static
                        className="rounded-xl bg-white py-2 px-1 focus:outline-none"
                      >
                        {menu.map((item) => (
                          <MenuItem key={item.text}>
                            {() => (
                              <button
                                onClick={() => {
                                  navigateTo(item.href)
                                  setSelectedItem(item.text)
                                  setMenuOpen(false)
                                }}
                                className="w-full text-left block px-4 py-2 text-sm font-bold rounded-full cursor-pointer whitespace-nowrap text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] transition-colors duration-300"
                              >
                                {item.text}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>



        </div>

        {/* Center - Logo */}
        <div className="basis-1/3 md:basis-2/4 flex justify-center">
          <img
            src={Logo}
            alt="The Factory Logo"
            className={`hidden md:block transition-all duration-300 ease-in-out ${isScrolled ? "h-8" : "h-11"}`}
          />
          <img
            src={Logo2}
            alt="The Factory Logo"
            className={`h-9 w-auto md:hidden transition-all duration-300 ease-in-out ${isScrolled ? "h-7" : "h-9"}`}
          />

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
      {/* <SignUp isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} /> */}
      <AuthModal isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} />
    </div>
  );
};

export default Header;
