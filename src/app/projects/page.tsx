'use client'

import { FC } from "react";
import { projects } from '@/contents/projects'
import Image from 'next/image'

const Projects: FC = () => {
  return (
    <section className="section bg-stone-100" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-archivo font-extralight">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col group/project"
            >
              {/* Static Arrow in Top-Right */}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-stone-400 group-hover/project:text-stone-900 hover:text-black transition-all duration-500 z-20 group/button"
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

              <div className="relative">
                <div className="aspect-video md:hidden"></div>

                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-archivo font-extralight">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 mt-2 md:mt-3 text-sm md:text-base opacity-0 group-hover/project:opacity-100 transition-opacity duration-500 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute aspect-video w-full -translate-y-1/2 top-1/2 -translate-x-8 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                      <Image
                        src={project.image}
                        alt={`${project.title} image`}
                        className="size-full object-cover rounded-lg"
                        width={300}
                        height={200}
                      />
                    </div>
                  </div>

                  {/* Keep right slot empty (or use for hover arrows if needed) */}
                  <div />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;