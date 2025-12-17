import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='fixed top-0 left-0 w-full z-50
                 backdrop-blur-xl bg-white/70 dark:bg-black/70
                 border-b border-white/10 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className='text-2xl font-extrabold
                     bg-gradient-to-r from-indigo-500 to-pink-500
                     bg-clip-text text-transparent'>
          Nouman Ansari
        </button>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative font-medium transition ${
                active === link.id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500"
              }`}>
              {link.name}

              {active === link.id && (
                <motion.span
                  layoutId='underline'
                  className='absolute -bottom-2 left-0 w-full h-[2px]
                             bg-indigo-500 rounded'
                />
              )}
            </button>
          ))}
        </div>

        {/* Hamburger */}
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
            className='md:hidden px-6 pb-6 space-y-4
                       bg-white dark:bg-black'>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left font-medium ${
                  active === link.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}>
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
