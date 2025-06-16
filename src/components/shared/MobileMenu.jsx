
import React, { useState, useCallback, useEffect } from 'react';
import { GoChevronDown, GoChevronRight  } from "react-icons/go";
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import LogoBlack from '../../assets/logo.png';
import WhiteLogo from "../../assets/FactoryLogoWhite.png"
import { menu } from '../../utils/menus';

const MobileMenu = ({ isSignUpOpen, setIsSignUpOpen, jukebox=false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setExpandedSubmenu(null);
  }, []);

  const handleNavigation = useCallback((href) => {
    if (href === '#') return;
  
    // Close menu first (trigger slide out)
    setIsOpen(false);
    setExpandedSubmenu(null);
  
    // Delay navigation until animation finishes
    setTimeout(() => {
      navigate(href);
    }, 400); // same as the exit animation duration
  }, [navigate]);
  

  const toggleSubmenu = useCallback((menuId) => {
    setExpandedSubmenu(expandedSubmenu === menuId ? null : menuId);
  }, [expandedSubmenu]);

  return (
    <div className="relative">
      {/* Header */}
      <header className={`${jukebox ? "bg-[#231F20CC] text-[#FBFBFB]" : "bg-[#FBFBFB]"} shadow-sm p-4 flex items-center justify-between`}>
        <img src={jukebox ? WhiteLogo : LogoBlack} alt="Logo" className="h-8 object-contain" />
        <button
          onClick={handleOpen}
          className={`p-2 border-2 ${jukebox ? "border-[#FBFBFB]" : "border-[#231F20]"}  rounded-lg border-dashed`}
        >
          <FiMenu className="text-2xl" />
        </button>
      </header>

      {/* Slide-In Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`fixed inset-0 z-50 ${jukebox ? "bg-[#231F20] text-[#FBFBFB]" : "bg-[#FBFBFB]"} flex flex-col`}
            style={{ height: '100vh' }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <img src={jukebox ? WhiteLogo : LogoBlack} alt="Logo" className="h-8 object-contain" />
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto pxc-6 py-4">
              <div className="space-y-2">
                {menu.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        item.submenu
                          ? toggleSubmenu(item.id)
                          : handleNavigation(item.href)
                      }
                      className={`w-full py-4 px-6 text-left text-3xl font-medium flex items-center justify-between ${jukebox ? "text-[#FBFBFB] hover:text-[#231F20]" : "text-[#231F20]"}  hover:bg-gray-100 transition border-b border-dashed primary-font`}
                    >
                      <span>{item.text}</span>
                      {item.submenu && (
                        <GoChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            expandedSubmenu === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {expandedSubmenu === item.id && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="pl-6 space-y-1 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleNavigation(subItem.href)}
                              className={`block w-full py-3 px-2 text-left text-base ${jukebox ? "text-[#FBFBFB]" : "text-gray-600"}  hover:text-black hover:bg-gray-100 rounded-lg transition`}
                            >
                              <div className="flex items-center">
                                <GoChevronRight size={16} className="mr-2 text-gray-400" />
                                {subItem.text}
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-12 border-t border-gray-200">
              <button className={`w-full py-4 border border-dashed ${jukebox ? "border-[#FBFBFB] text-[#FBFBFB] " : "border-[#231F20]  text-[#231F20]"}  font-medium rounded-full hover:bg-gray-100 hover:text-[#231F20] transition`} onClick={() => setIsSignUpOpen(true)}>
                Subscribe
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
