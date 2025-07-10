'use client'

import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  // Text animation hooks
  const { scope: titleScope, entranceAnimation: titleAnimation } = useTextRevealAnimation();
  const { scope: subtitleScope, entranceAnimation: subtitleAnimation } = useTextRevealAnimation();

  const titleInView = useInView(titleScope, { once: true });
  const subtitleInView = useInView(subtitleScope, { once: true });

  useEffect(() => {
    if (titleInView) {
      titleAnimation();
    }
  }, [titleInView, titleAnimation]);

  useEffect(() => {
    if (subtitleInView) {
      subtitleAnimation();
    }
  }, [subtitleInView, subtitleAnimation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="section">
      <div className="container">
        <div className="line">
          <h1
            className="text-4xl md:text-7xl lg:text-8xl font-extralight text-center font-archivo mb-8"
            ref={titleScope}
          >
            Contact Me
          </h1>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <div className="line">
              <h2
                className="text-2xl md:text-4xl lg:text-5xl font-extralight font-archivo mb-4"
                ref={subtitleScope}
              >
                Get in Touch
              </h2>
            </div>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-red-orange-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:ankitcareer018@gmail.com" className="text-secondary hover:text-red-orange-500">
                  ankitcareer018@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-red-orange-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+919876543210" className="text-secondary hover:text-red-orange-500">
                  +91 74098 58971
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-red-orange-500" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Kanpur,India</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-red-orange-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-red-orange-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-red-orange-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full h-11 px-6 rounded-xl bg-red-orange-500 text-white uppercase inline-flex items-center justify-center gap-2 transition-all duration-500 relative group/button hover:border hover:border-red-orange-500 font-archivo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="transition-all duration-500">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </span>
              {status !== 'loading' && (
                <div className="size-6 overflow-hidden opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 w-0 group-hover/button:w-6">
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
              )}
            </motion.button>
            
            {status === 'success' && (
              <motion.p 
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p 
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
      </div>
    </div>
  )
}