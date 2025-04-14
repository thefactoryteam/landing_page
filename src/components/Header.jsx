import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo_icon.png";
import SignUp from "./SignUp";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import AuthModal from "./AuthModal";



const menu = [
  { href: "/", text: "Home" },
  { href: "#our-story", text: "Our Story" },
  { href: "#our-services", text: "Our Services" },
  { href: "#innovation-expo", text: "Innovation Expo" },
];

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("Home");
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
    <div className="w-full">
      <div className="md:w-4/5 px-2 md:px-0 mx-auto flex flex-row py-3 md:py-6 items-center secondaryFont">
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
              <Transition
                show={menuOpen}
                as="div"
                appear
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 -translate-y-1"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu as="div" className="absolute top-0 left-0 z-5" onClose={() => setMenuOpen(!menuOpen)}>
                  <MenuItems
                    static
                    className="origin-top-left min-w-max rounded-xl bg-white py-2 px-1 shadow-xl ring-1 ring-black/10 focus:outline-none"
                  >
                    {menu.map((item) => (
                      <MenuItem key={item.text}>
                        {() => (
                          <button
                            onClick={() => {
                              navigateTo(item.href)
                              setSelectedItem(item.text);
                              setMenuOpen(false);
                            }}
                            className={`w-full text-left block px-4 py-2 text-sm font-bold rounded-lg cursor-pointer transition whitespace-nowrap text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028]`}
                          >
                            {item.text}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </Transition>
            </div>
          </div>



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
      {/* <SignUp isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} /> */}
      <AuthModal isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} />
    </div>
  );
};

export default Header;
