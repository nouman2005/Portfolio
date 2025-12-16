import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import image from "../assets/portfolio.jpg";

export default function About() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-[#06070f] text-white px-6 py-28'>
      {/* BACKGROUND GLOWS */}
      <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px]' />
      <div className='absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]' />

      <div className='relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center'>
        {/* LEFT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className='relative'>
          <div
            className='relative group rounded-3xl overflow-hidden 
                border border-white/10 
                bg-white/5 backdrop-blur-xl
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]'>
            {/* Soft Glow */}
            <div
              className='absolute -inset-1 rounded-3xl 
                  bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 
                  opacity-0 group-hover:opacity-100 blur-2xl 
                  transition duration-700'
            />

            {/* Image */}
            <img
              src={image}
              alt='Developer Workspace'
              className='relative z-10 w-full h-full object-cover
               scale-100 group-hover:scale-105
               transition-transform duration-700 ease-out'
            />

            {/* Dark Overlay */}
            <div
              className='absolute inset-0 z-20 
                  bg-gradient-to-tr from-black/60 via-black/30 to-transparent'
            />

            {/* Top Light Reflection */}
            <div
              className='absolute inset-x-0 top-0 h-24 z-30 
                  bg-gradient-to-b from-white/10 to-transparent'
            />
            {/* Identity Overlay */}
            <div className='absolute bottom-6 left-6 z-40'>
              <div className='rounded-xl bg-black/50 backdrop-blur-md px-5 py-3 border border-white/10'>
                <p className='text-sm font-semibold text-white'>
                  Nouman Ansari
                </p>
                <p className='text-xs text-gray-300'>Frontend Developer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          {/* Label */}
          <span className='inline-block mb-4 text-sm tracking-[0.3em] uppercase text-cyan-400'>
            About Me
          </span>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Building
            <span className='bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'>
              {" "}
              modern interfaces
            </span>
            <br />
            with purpose & polish
          </h2>

          {/* Description */}
          <p className='mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-xl'>
            I design and develop modern, responsive web interfaces that feel
            fast, intuitive, and visually refined.
            <br />
            <br />
            My focus is on writing clean, maintainable code while delivering
            smooth user experiences through thoughtful UI design and subtle
            animations.
          </p>

          {/* CURRENTLY WORKING STACK CARD */}
          <div className='mt-12'>
            <div className='relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg'>
              {/* Card Glow */}
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-xl opacity-70' />

              <div className='relative'>
                <h4 className='text-sm uppercase tracking-widest text-cyan-400 mb-5'>
                  Currently Working With
                </h4>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-5'>
                  {[
                    { name: "React JS", icon: FaReact, color: "text-cyan-400" },
                    {
                      name: "Tailwind CSS",
                      icon: SiTailwindcss,
                      color: "text-sky-400",
                    },
                    {
                      name: "Express JS",
                      icon: FaNodeJs,
                      color: "text-emerald-400",
                    },
                    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className='group flex flex-col items-center gap-2 rounded-xl p-4
           bg-white/5 border border-white/10
           hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
           hover:-translate-y-1 hover:shadow-lg
           transition-all duration-300 ease-out'>
                        <Icon
                          className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}
                        />
                        <span className='text-sm text-white/80 font-medium'>
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='mt-14 flex flex-col gap-3'>
            <a
              href='#contact'
              className='relative inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold
               bg-gradient-to-r from-fuchsia-500 to-cyan-500
               shadow-[0_0_30px_rgba(236,72,153,0.4)]
               hover:shadow-[0_0_45px_rgba(34,211,238,0.5)]
               hover:scale-105 transition-all duration-300'>
              Let’s Talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
