import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import LogoBlack from '../../assets/logo.png';
import { Link } from 'react-router'; 
import { FiMenu } from 'react-icons/fi';

const menuItems = [
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
  ];
  


const MobileMenu = ({ isOpen, onClose }) => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="fixed top-0 left-0 w-full h-full bg-white z-[100] px-6 pt-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <img
                src={LogoBlack}
                alt="THE FACTORY logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>
            <button onClick={onClose} aria-label="Close menu">
              <IoMdClose className="text-3xl" />
            </button>
          </div>

          <ul className="space-y-6 border-t border-gray-300 pt-4">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b border-dashed pb-3">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(idx)}
                      className="text-lg font-medium w-full text-left"
                    >
                      {item.text}
                    </button>
                    <AnimatePresence>
                      {openSubmenuIndex === idx && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.submenu.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={subItem.href}
                                className="text-base text-gray-700 hover:text-black"
                              >
                                {subItem.text}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-lg font-medium text-gray-900"
                  >
                    {item.text}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button className="w-full border border-black rounded-full py-3 font-semibold hover:bg-black hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? '0.75rem' : '1.25rem',
            paddingBottom: scrolled ? '0.75rem' : '1.25rem',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="px-4 flex justify-between items-center"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.img
              src={LogoBlack}
              alt="THE FACTORY logo"
              className="h-10 md:h-12 object-contain"
              animate={{
                scale: scrolled ? 0.9 : 1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Hamburger */}
          <motion.button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="p-2 border-2 border-[#231F20] rounded-lg border-dashed"
            animate={{
              scale: scrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <FiMenu className="text-2xl" />
          </motion.button>
        </motion.div>
      </motion.header>

      {/* ✅ Move this outside the header */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
