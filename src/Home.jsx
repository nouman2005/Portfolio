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
          transition={{ delay: 0.6, duration: 0.8 }}
          className='mt-8 text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed'>
          I am a passionate{" "}
          <span className='text-white font-medium'>Frontend Developer</span>
          with a strong focus on building visually appealing, responsive, and
          performance-optimized web applications. I specialize in transforming
          complex ideas into clean, user-friendly interfaces using modern
          technologies like <span className='text-indigo-400'>
            React JS
          </span>{" "}
          and
          <span className='text-sky-400'> Tailwind CSS</span>.
          <br />
          <br />
          My goal is to craft seamless digital experiences with smooth
          animations, scalable code architecture, and pixel-perfect design. I
          continuously learn and adapt to new trends to deliver professional,
          production-ready solutions that create real impact.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className='mt-10 flex justify-center'>
          <a
            href='/Nouman-Ansari-CV.pdf'
            download
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
        <div className='mt-12 overflow-hidden relative'>
          <motion.div
            className='flex gap-10 w-max'
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}>
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className='group min-w-[150px] flex flex-col items-center
                             px-6 py-6 rounded-2xl
                             bg-white/5 backdrop-blur
                             border border-white/10
                             hover:border-indigo-500/40
                             hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
                             transition-all duration-300'>
                  <Icon
                    className={`text-5xl ${skill.color} group-hover:scale-110 transition`}
                  />
                  <span className='mt-3 text-sm font-medium text-gray-300'>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
