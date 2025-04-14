import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bottom-5 right-5 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full
        bg-[#231F20] text-[#2BE028] shadow-lg backdrop-blur-md
        transition-all duration-300 ease-in-out hover:scale-110
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default ScrollToTopButton;
