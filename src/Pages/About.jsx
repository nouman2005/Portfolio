import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export default function About() {
  return (
    <section
      id='about'
      className='relative min-h-screen overflow-hidden bg-[#06070f] text-white px-6 py-28'>
      {/* BACKGROUND GLOWS */}
      <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px]' />
      <div className='absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]' />

      <div className='relative max-w-5xl mx-auto'>
        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center'>
          {/* Label */}
          <span className='inline-block mb-4 text-sm tracking-[0.3em] uppercase text-cyan-400'>
            About Me
          </span>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Building{" "}
            <span className='bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'>
              modern interfaces
            </span>
            <br />
            with purpose & polish
          </h2>

          {/* Description */}
          <p className='mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto'>
            I specialize in developing clean, responsive, and performance-driven
            web interfaces that deliver intuitive user experiences.
            <br />
            <br />
            My work focuses on maintainable code, modern UI principles, and
            scalable frontend architectures that align with real-world business
            needs.
          </p>
        </motion.div>

        {/* STACK CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-16 relative max-w-4xl mx-auto'>
          <div className='relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg'>
            {/* Glow */}
            <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-xl opacity-70' />

            <div className='relative'>
              <h4 className='text-sm uppercase tracking-widest text-cyan-400 mb-6 text-center'>
                Currently Working With
              </h4>

              <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
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
                      className='group flex flex-col items-center gap-3 rounded-xl p-5
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
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-16 flex justify-center'>
          <a
            href='#contact'
            className='relative inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold
            bg-gradient-to-r from-fuchsia-500 to-cyan-500
            shadow-[0_0_30px_rgba(236,72,153,0.4)]
            hover:shadow-[0_0_45px_rgba(34,211,238,0.5)]
            hover:scale-105 transition-all duration-300'>
            Let’s Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
