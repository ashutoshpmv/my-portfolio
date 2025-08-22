import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Developer & Tech Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Ashutosh Kumar Singh</span>
          </motion.h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 min-h-[2.5rem]">
            <span className="border-r-2 border-primary-500 pr-1 animate-pulse">
              {text}
            </span>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions and building exceptional digital experiences.
            Always learning, always growing.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-glow px-8 py-4 rounded-full text-white font-medium flex items-center space-x-3 relative z-10">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium flex items-center space-x-3 glow-border"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-500 cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;