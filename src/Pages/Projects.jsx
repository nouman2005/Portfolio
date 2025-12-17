import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import ecommerceImage from "../assets/E-commerce Website.png";
import accountingImage from "../assets/Accounting And Invoicing.png";

const projects = [
  {
    title: "E-Commerce Website",
    image: ecommerceImage,
    link: "https://shoppingsss.netlify.app/",
    description:
      "A modern and user-friendly e-commerce frontend application with clean UI and smooth interactions. This project focuses entirely on frontend functionality such as product browsing, cart handling, and responsive layouts.",
    stack: ["React JS", "Tailwind CSS"],
    details:
      "This project demonstrates strong frontend fundamentals including component-based architecture, reusable UI components, and responsive design principles. Built with performance and user experience in mind.",
  },
  {
    title: "Accounting & Invoicing",
    image: accountingImage,
    link: "https://accountingandinvoicing.netlify.app/",
    description:
      "A professional accounting and invoicing frontend application featuring a clean dashboard layout and structured invoice UI.",
    stack: ["React JS", "Tailwind CSS"],
    details:
      "Designed to simulate real-world accounting software UI. Focused on clarity, layout consistency, and user-friendly interaction patterns.",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className='relative min-h-screen bg-[#06070f] text-white px-6 py-28 overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute -top-40 -left-40 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px]' />
      <div className='absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]' />

      <div className='relative max-w-6xl mx-auto'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold text-center mb-4'>
          My{" "}
          <span className='bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'>
            Projects
          </span>
        </motion.h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Modern frontend projects built using React.js and Tailwind CSS with
          clean UI and smooth user experience.
        </p>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer'
              onClick={() => setActiveProject(project)}>
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500'
              />

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>

                <p className='text-gray-400 text-sm mb-4'>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className='text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300'>
                      {tech}
                    </span>
                  ))}
                </div>

                <span className='text-sm text-cyan-400'>
                  Click for more details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='relative max-w-2xl w-full rounded-3xl bg-[#0b0f1a] border border-white/10 p-8'>
              {/* Close */}
              <button
                onClick={() => setActiveProject(null)}
                className='absolute top-5 right-5 text-gray-400 hover:text-white'>
                <FaTimes />
              </button>

              <h3 className='text-3xl font-bold mb-4'>{activeProject.title}</h3>

              <p className='text-gray-300 mb-6'>{activeProject.details}</p>

              <div className='flex flex-wrap gap-3 mb-6'>
                {activeProject.stack.map((tech, i) => (
                  <span
                    key={i}
                    className='px-4 py-1 rounded-full text-sm bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 border border-white/10'>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300'>
                Visit Live Project <FaExternalLinkAlt />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
