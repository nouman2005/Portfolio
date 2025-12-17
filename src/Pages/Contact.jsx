import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className='relative py-28 bg-[#06070f] text-white overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute -top-40 -left-40 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px]' />
      <div className='absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]' />

      <div className='relative max-w-5xl mx-auto px-6'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold text-center mb-4'>
          Get In{" "}
          <span className='bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'>
            Touch
          </span>
        </motion.h2>

        <p className='text-gray-400 text-center max-w-xl mx-auto mb-16'>
          I am open to full-time roles with organizations that value clean code,
          modern UI/UX, and scalable frontend solutions, where I can contribute
          effectively and grow as a professional developer.
        </p>

        {/* Contact Cards */}
        <div className='grid sm:grid-cols-2 gap-8'>
          {/* Email */}
          <ContactCard
            icon={<FaEnvelope />}
            title='Email'
            value='m.nouman@gmail.com'
            link='mailto:m.nouman@gmail.com'
          />

          {/* Phone */}
          <ContactCard
            icon={<FaPhoneAlt />}
            title='Phone'
            value='+91 8452958823'
            link='tel:+918452958823'
          />

          {/* GitHub */}
          <ContactCard
            icon={<FaGithub />}
            title='GitHub'
            value='github.com/nouman2005'
            link='https://github.com/nouman2005'
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<FaLinkedin />}
            title='LinkedIn'
            value='linkedin.com/in/nouman-ansari-11131b325'
            link='https://linkedin.com/in/nouman-ansari-11131b325'
          />
        </div>

        {/* Footer Line */}
        <p className='text-center text-sm text-gray-500 mt-20'>
          © {new Date().getFullYear()} Nouman Ansari — All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

/* Reusable Contact Card */
function ContactCard({ icon, title, value, link }) {
  return (
    <motion.a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ y: -6 }}
      className='group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex items-center gap-5 transition-all duration-300'>
      {/* Glow */}
      <div className='absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition' />

      {/* Icon */}
      <div className='relative z-10 text-2xl text-cyan-400 group-hover:scale-110 transition-transform'>
        {icon}
      </div>

      {/* Text */}
      <div className='relative z-10'>
        <p className='text-sm text-gray-400'>{title}</p>
        <p className='font-medium text-white break-all'>{value}</p>
      </div>
    </motion.a>
  );
}
