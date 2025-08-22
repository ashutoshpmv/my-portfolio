import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Interactive dashboard displaying weather data with charts, forecasts, and location-based insights.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social networking platform with real-time messaging, post sharing, and user interactions.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website built with modern technologies and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'AI Chatbot Interface',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of my technical skills through real-world applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className={`group cursor-pointer ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="glass rounded-xl overflow-hidden hover:glow-border transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gradient-to-r from-accent-500 to-accent-600 px-3 py-1 rounded-full">
                      <Star size={14} className="text-white" />
                      <span className="text-xs font-bold text-white">Featured</span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="p-3 bg-gray-900/80 rounded-full hover:bg-primary-500 transition-colors duration-300"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                      <a
                        href={project.demo}
                        className="p-3 bg-gray-900/80 rounded-full hover:bg-secondary-500 transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 group-hover:border-primary-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ashutoshpmv"
            className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 rounded-full font-medium glow-border"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;