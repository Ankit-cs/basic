'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28 bg-stone-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile.avif"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full mb-4 w-32 h-32 object-cover hover:ring-2 hover:ring-red-orange-500 transition-all duration-300 cursor-pointer"
            />
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Backend Developer | Competitive Programmer
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/Ankit-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-red-orange-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ankitkumaritsme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-red-orange-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button hover:bg-red-orange-500 hover:text-white"
            >
              <span>View My Work</span>
              <span>
                <div className="overflow-hidden size-5">
                  <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 13.5-7.5 7.5-7.5-7.5m15-6-7.5 7.5L4.5 7.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 13.5-7.5 7.5-7.5-7.5m15-6-7.5 7.5L4.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </span>
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gray-500 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2 group/button w-full md:w-auto"
              >
                <span>Contact Me</span>
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}