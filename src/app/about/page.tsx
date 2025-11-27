'use client';

import { FC, useEffect } from "react";
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { useAnimate, useInView, stagger, motion } from "framer-motion";
import SplitType from "split-type";
import { fadeInUp, staggerContainer, cardHover } from '@/utils/animations'

const About: FC = () => {
  const [scope, animate] = useAnimate();
  const [skillsScope, skillsAnimate] = useAnimate();
  const [experienceScope, experienceAnimate] = useAnimate();
  const [educationScope, educationAnimate] = useAnimate();

  const inView = useInView(scope, {
    once: true,
  });

  const skillsInView = useInView(skillsScope, {
    once: true,
  });

  const experienceInView = useInView(experienceScope, {
    once: true,
  });

  const educationInView = useInView(educationScope, {
    once: true,
  });

  useEffect(() => {
    if (scope.current?.querySelector("h2")) {
      new SplitType(scope.current.querySelector("h2")!, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [scope]);

  useEffect(() => {
    if (skillsScope.current?.querySelector("h2")) {
      new SplitType(skillsScope.current.querySelector("h2")!, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [skillsScope]);

  useEffect(() => {
    if (experienceScope.current?.querySelector("h2")) {
      new SplitType(experienceScope.current.querySelector("h2")!, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [experienceScope]);

  useEffect(() => {
    if (educationScope.current?.querySelector("h2")) {
      new SplitType(educationScope.current.querySelector("h2")!, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [educationScope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current!.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  useEffect(() => {
    if (skillsInView) {
      skillsAnimate(
        skillsScope.current!.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [skillsInView, skillsAnimate, skillsScope]);

  useEffect(() => {
    if (experienceInView) {
      experienceAnimate(
        experienceScope.current!.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [experienceInView, experienceAnimate, experienceScope]);

  useEffect(() => {
    if (educationInView) {
      educationAnimate(
        educationScope.current!.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [educationInView, educationAnimate, educationScope]);

  return (
    <>
      {/* Main About Section - Same style as starter-template Intro */}
      <section
        className="section lg:mt-20 mt-12 md:mt-16"
        id="intro"
        ref={scope}
      >
        <div className="container">
          <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] font-archivo font-extralight">
            Building beautiful websites with clean code and thoughtful design to help
            businesses grow and stand out online
          </h2>
        </div>
      </section>

      {/* Background transition section */}
      <section className="bg-gradient-to-b from-white to-stone-100 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-archivo text-stone-600 mb-4 font-extralight">
              Passionate about creating digital experiences
            </h3>
            <p className="text-stone-500 max-w-2xl mx-auto">
              I specialize in full-stack development, bringing ideas to life through modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-stone-100" ref={skillsScope}>
        <div className="container">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-archivo font-extralight text-center mb-16">
            Skills & Expertise
          </h2>

          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaCode className="h-8 w-8 text-red-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-archivo">Frontend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaLaptopCode className="h-8 w-8 bg-stone-100 text-red-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-archivo">Backend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Node.js</li>
                <li>Spring</li>
                <li>PostgreSQL</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <FaGraduationCap className="h-8 w-8 text-red-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-archivo">Tools & Others</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>Cursor IDE</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="w-8 h-8 bg-red-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">DSA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-archivo">CP</h3>
              <div className="space-y-3">
                <a
                  href="https://codeforces.com/profile/Ankit-cp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm group/button"
                >
                  <span>CodeForces</span>
                  <div className="size-4 overflow-hidden">
                    <div className="w-8 h-4 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                      {[...Array(2)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
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

                <a
                  href="https://www.codechef.com/users/ankit_cp_18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm group/button"
                >
                  <span>CodeChef</span>
                  <div className="size-4 overflow-hidden">
                    <div className="w-8 h-4 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                      {[...Array(2)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
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

                <a
                  href="https://leetcode.com/ankit_18_cp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm group/button"
                >
                  <span>LeetCode</span>
                  <div className="size-4 overflow-hidden">
                    <div className="w-8 h-4 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                      {[...Array(2)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="section bg-stone-100" ref={experienceScope}>
        <div className="container">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-archivo font-extralight text-center mb-16">
            Experience
          </h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <h3 className="text-xl font-semibold mb-2 font-archivo">Backend Developer Intern</h3>
              <p className="text-red-orange-500 mb-2 font-medium">Voat Networks • 06/2025 - 09/2025</p>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Led development of multiple web applications using React and Node.js</li>
                <li>Developed and maintained RESTful APIs</li>
                <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-stone-100" ref={educationScope}>
        <div className="container">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-archivo font-extralight text-center mb-16">
            Education
          </h2>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="bg-stone-100 border border-gray-200 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <h3 className="text-xl font-semibold mb-2 font-archivo">Bachelor of Technology in Computer Science</h3>
              <p className="text-red-orange-500 mb-2 font-medium">Chhatrapati Shahu Ji Maharaj University, Kanpur • 2023 - 2027</p>
              <p className="text-gray-600">
                Currently in 3rd Year. Focused on system design and software development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
