import React, { useState, useRef, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { useNavigate, useLocation } from "react-router";
import AuthModal from "./AuthModal";
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";

// HeaderSpacer component to prevent content overlap
const HeaderSpacer = ({ isScrolled }) => {
  return (
    <div 
      className={`w-full transition-all duration-300 ease-in-out ${isScrolled ? "h-14 md:h-14" : "h-[90px] md:h-20"}`}
    ></div>
  );
};

const menu = [
  { href: "/", text: "Home" },
  { href: "/get-to-know-us", text: "Get To Know Us" },
  { href: "/innovation-expo", text: "Innovation Expo" },
  {
    href: "#",
    text: "Our Services",
    submenu: [
      { href: "/jukebox", text: "Jukebox" },
      { href: "/co-working-space", text: "Co-Working Space" },
      { href: "/bootcamps-and-training", text: "Bootcamps & Training" },
    ]
  },
  { href: "#learning-and-resources", text: "Learning & Resources" },
  { href: "#Courses", text: "Courses" },
];

const Header = ({bgScroll="bg-white/60 border-b border-gray-200", bg="bg-transparent", headerSpacer=true, bigScreenlogo, smallScreenLogo }) => {
  const location = useLocation();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const menuItemRefs = useRef({});
  const hideTimeout = useRef(null);

  // Initialize selectedItem based on current path
  const [selectedItem, setSelectedItem] = useState(() => {
    const path = location.pathname;
    
    // Check main menu items
    const mainItem = menu.find(item => item.href === path);
    if (mainItem) return mainItem.text;
    
    // Check submenu items
    for (const item of menu) {
      if (item.submenu) {
        const subItem = item.submenu.find(sub => sub.href === path);
        if (subItem) return subItem.text;
      }
    }
    
    return "Home"; // Default
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle path changes
  useEffect(() => {
    const path = location.pathname;
    
    // Check main menu items
    const mainItem = menu.find(item => item.href === path);
    if (mainItem) {
      setSelectedItem(mainItem.text);
      return;
    }
    
    // Check submenu items
    for (const item of menu) {
      if (item.submenu) {
        const subItem = item.submenu.find(sub => sub.href === path);
        if (subItem) {
          setSelectedItem(subItem.text);
          return;
        }
      }
    }
  }, [location.pathname]);

  const navigateTo = (href, itemText) => {
    // Close menu first
    setMenuOpen(false);
    
    // Navigate immediately without updating selection text first
    // The selection will update automatically via the useEffect + useLocation
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Just navigate - selection will update via useEffect
      navigate(href);
    }
  };

  const handleMouseEnter = (item) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    // Use a small delay before hiding to allow movement to submenu
    hideTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  };

  const handleSubmenuMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    setHoveredItem(null);
  };

  // Animation variants for the main menu
  const menuVariants = {
    hidden: { 
      width: 0, 
      height: 0, 
      opacity: 0,
      borderRadius: "50%",
      overflow: "hidden"
    },
    visible: { 
      width: "auto", 
      height: "auto", 
      opacity: 1,
      borderRadius: "0.75rem",
      overflow: "visible",
      transition: {
        width: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
        height: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
        opacity: { duration: 0.3, delay: 0.1 },
        borderRadius: { duration: 0.4 }
      }
    },
    exit: { 
      width: 0, 
      height: 0, 
      opacity: 0,
      borderRadius: "50%",
      overflow: "hidden",
      transition: {
        width: { duration: 0.3 },
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
        borderRadius: { duration: 0.3 }
      }
    }
  };

  // Animation variants for the submenu
  const submenuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -10,
      transformOrigin: "left center"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      x: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <header className={`
        fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? `backdrop-blur-md ${bgScroll}`
          : `${bg} border-transparent`}
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
                  className={`absolute inline-flex items-center justify-center text-sm font-semibold cursor-pointer px-6 py-2 transition-all duration-300 text-left focus:outline-none rounded-full bg-[#231F20] shadow-lg text-[#2BE028] whitespace-nowrap ${!headerSpacer ? "border-2 border-[#FBFBFB]" : "" } `}
                >
                  {selectedItem}
                </button>
              </Transition>

              {/* Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className="absolute top-0 left-0 z-10 origin-top-left"
                  >
                    <Menu as="div" onClose={() => setMenuOpen(false)}>
                      <MenuItems
                        static
                        className="rounded-3xl bg-[#F4F4F4] shadow-lg py-2 px-1 focus:outline-none"
                      >
                        {menu.map((item) => (
                          <MenuItem key={item.text}>
                            {() => (
                              <div 
                                className="relative"
                                ref={el => menuItemRefs.current[item.text] = el}
                                onMouseEnter={() => handleMouseEnter(item.text)}
                                onMouseLeave={handleMouseLeave}
                              >
                                <button
                                  onClick={() => {
                                    if (!item.submenu) {
                                      navigateTo(item.href, item.text);
                                    }
                                  }}
                                  className="w-full text-left flex items-center justify-between px-4 py-2 text-sm font-bold rounded-full cursor-pointer whitespace-nowrap text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] transition-colors duration-300"
                                >
                                  <span>{item.text}</span>
                                  {item.submenu && (
                                    <IoIosArrowForward className="ml-2" size={10} />
                                  )}
                                </button>

                                {/* Submenu */}
                                <AnimatePresence>
                                  {item.submenu && hoveredItem === item.text && (
                                    <div 
                                      className="absolute left-full top-0 z-20 min-w-max"
                                      style={{ marginLeft: '0.5rem' }}
                                      onMouseEnter={handleSubmenuMouseEnter}
                                      onMouseLeave={handleSubmenuMouseLeave}
                                    >
                                      <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={submenuVariants}
                                        className="bg-[#F4F4F4] rounded-xl shadow-lg py-2 px-1 ml-2"
                                      >
                                        {item.submenu.map((subItem) => (
                                          <button
                                            key={subItem.text}
                                            onClick={() => navigateTo(subItem.href, subItem.text)}
                                            className="w-full text-left block px-4 py-2 text-sm font-bold rounded-full whitespace-nowrap text-gray-900 hover:bg-[#231F20] hover:text-[#2BE028] transition-colors cursor-pointer duration-300"
                                          >
                                            {subItem.text}
                                          </button>
                                        ))}
                                      </motion.div>
                                    </div>
                                  )}
                                </AnimatePresence>
                              </div>
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
            src={bigScreenlogo}
            alt="The Factory Logo"
            className={`hidden md:block transition-all duration-300 ease-in-out ${isScrolled ? "h-8" : "h-11"}`}
          />
          <img
            src={smallScreenLogo}
            alt="The Factory Logo"
            className={`h-9 w-auto md:hidden transition-all duration-300 ease-in-out ${isScrolled ? "h-7" : "h-9"}`}
          />
        </div>

        {/* Right Side - Subscribe Button */}
        <div className="basis-1/3 md:basis-1/4 text-end">
          <button
            className={`rounded-full bg-[#231F20] text-[#ECFBEB] font-semibold px-4 md:px-6 py-2 text-sm md:text-base cursor-pointer shadow-lg ${!headerSpacer ? "border-2 border-[#FBFBFB]" : "" }`}
            onClick={() => setIsSignUpOpen(true)}
          >
            Join the Factory
          </button>
        </div>
      </div>

      {/* Sign-Up Modal */}
      <AuthModal isOpen={isSignUpOpen} setIsOpen={setIsSignUpOpen} />
    </header>
    
    {/* Add spacing to prevent content overlap */}
    { headerSpacer && <HeaderSpacer isScrolled={isScrolled} />}
   
    </>
  );
};

export default Header;