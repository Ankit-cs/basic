'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Projects() {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-archivo font-extralight text-center mb-12 md:mb-16 lg:mb-20">
          Recent Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.article
              key={project.title}
              className="bg-stone-100 rounded-lg shadow-md p-6 relative group/project"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* Arrow button on top corner */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-stone-400 group-hover/project:text-red-orange-500 hover:text-red-orange-600 transition-all duration-500 z-20 group/button"
              >
                <div className="size-6 overflow-hidden">
                  <div className="w-12 h-6 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    {[...Array(2)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </a>
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden mr-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.button
                    key={tech}
                    className="px-3 py-1 bg-red-orange-500/10 text-red-orange-500 border border-red-orange-500/20 rounded-full text-sm hover:bg-red-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * techIndex }}
                  >
                    {tech}
                  </motion.button>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 