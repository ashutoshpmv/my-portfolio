import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: <Code2 className="text-primary-500" size={24} />,
      title: 'Full-Stack Development',
      description: 'Expertise in modern web technologies and frameworks',
    },
    {
      icon: <Database className="text-secondary-500" size={24} />,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL database management',
    },
    {
      icon: <Smartphone className="text-accent-500" size={24} />,
      title: 'Mobile Development',
      description: 'Creating responsive and native mobile applications',
    },
    {
      icon: <Globe className="text-primary-500" size={24} />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing scalable cloud infrastructure',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 animate-glow">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ashutosh Kumar Singh"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software developer with a strong foundation in computer science and 
              a love for creating innovative solutions. With expertise spanning full-stack development, 
              I enjoy turning complex problems into elegant, user-friendly applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology has led me to work with cutting-edge frameworks and tools, 
              always staying curious and eager to learn new technologies that can make a difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass p-4 rounded-lg hover:glow-border transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-white">{highlight.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;