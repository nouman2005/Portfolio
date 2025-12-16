import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDownload } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React JS", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
];

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React JS Developer",
      "UI / UX Focused Developer",
      "Modern Web Engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className='min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6'>
      <div className='max-w-6xl w-full text-center'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-6xl font-extrabold leading-tight'>
          Hi, I’m{" "}
          <span className='bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent'>
            Nouman Ansari
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mt-4 text-xl md:text-2xl font-medium text-indigo-400'>
          {text}
          <Cursor cursorStyle='|' />
        </motion.h2>

        {/* Extended Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='mt-8 text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed'>
          I’m a{" "}
          <span className='text-white font-medium'>Frontend Developer</span>{" "}
          focused on creating clean, scalable, and visually engaging user
          interfaces. I specialize in building responsive, animation-rich, and
          production-ready web applications that deliver seamless and intuitive
          user experiences across all devices.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className='mt-10 flex justify-center'>
          <a
            href='/Nouman-Resume.pdf'
            download='Nouman_Ansari_Resume.pdf'
            className='group inline-flex items-center gap-3
             bg-gradient-to-r from-indigo-500 to-pink-500
             px-8 py-4 rounded-full font-semibold
             shadow-lg hover:shadow-pink-500/40
             hover:scale-105 transition-all duration-300'>
            <FaDownload className='text-lg group-hover:animate-bounce' />
            Download CV
          </a>
        </motion.div>

        {/* Skills Title */}
        <h3 className='mt-20 text-xl md:text-2xl font-semibold text-gray-200'>
          Core Skills & Technologies
        </h3>

        {/* Infinite Skills Carousel */}
        <div className='mt-14 relative overflow-hidden'>
          {/* Gradient Fade Edges */}
          <div className='pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10' />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10' />

          <motion.div
            className='flex gap-10 w-max'
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // slower = smoother
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }} // pause on hover
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className='group min-w-[160px] flex flex-col items-center
                     px-7 py-7 rounded-2xl
                     bg-white/5 backdrop-blur-md
                     border border-white/10
                     hover:border-indigo-500/40
                     hover:shadow-[0_10px_35px_rgba(99,102,241,0.35)]
                     transition-colors duration-300'>
                  <Icon
                    className={`text-5xl ${skill.color}
                        transition-transform duration-300
                        group-hover:scale-110`}
                  />
                  <span className='mt-4 text-sm font-medium text-gray-300 tracking-wide'>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
