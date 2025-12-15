import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [hidden, setHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll hide/show */
  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Dark mode */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.35 }}
          className='fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/70 shadow'>
          <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
            {/* Logo */}
            <h1 className='text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent'>
              Nouman Ansari
            </h1>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-8'>
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => setActive(link.path)}
                  className={`relative font-medium transition ${
                    active === link.path
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                  }`}>
                  {link.name}
                  {active === link.path && (
                    <motion.span
                      layoutId='underline'
                      className='absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-500 rounded'
                    />
                  )}
                </button>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className='px-3 py-1 rounded-full border dark:border-gray-600 text-sm'>
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden text-2xl'>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-black'>
                {links.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      setActive(link.path);
                      setMenuOpen(false);
                    }}
                    className={`block w-full text-left font-medium ${
                      active === link.path
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}>
                    {link.name}
                  </button>
                ))}

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className='w-full text-left border-t pt-3 text-sm dark:border-gray-700'>
                  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
