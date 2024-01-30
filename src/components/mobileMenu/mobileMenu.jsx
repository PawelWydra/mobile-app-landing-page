import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import { motion } from "framer-motion";

function MobileMenu(props) {
  // key Code 27 is esc, works only if menu is visable.
  const handleEscKey = (event) => {
    if (event.keyCode === 27 && props.isMenuOpen) props.closeMenu();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  });

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      props.closeMenu();
    }
  };
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: props.isMenuOpen ? "0%" : "-100%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-black z-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div className="relative text-white flex justify-center min-w-96 p-5 rounded-lg	">
        <ul className="flex flex-col text-2xl text-center gap-4 py-10">
          <li>About</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
        <IoCloseSharp
          fill="red"
          size={40}
          className="absolute top-1 right-1 cursor-pointer"
          onClick={props.closeMenu}
        />
      </div>
    </motion.div>
  );
}

export default MobileMenu;
