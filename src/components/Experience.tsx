import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Tech Innovation Corp',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive designs and optimized application performance',
        'Participated in code reviews and contributed to best practices documentation',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Git'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd',
      location: 'Hybrid',
      period: 'Jan 2024 - May 2024',
      description: [
        'Built responsive user interfaces for e-commerce platforms',
        'Integrated third-party APIs and payment gateways',
        'Improved website performance and SEO optimization',
        'Mentored junior developers and conducted technical workshops',
      ],
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    },
    {
      title: 'Web Development Trainee',
      company: 'StartUp Hub',
      location: 'On-site',
      period: 'Sep 2023 - Dec 2023',
      description: [
        'Learned modern web development frameworks and best practices',
        'Contributed to open-source projects and community initiatives',
        'Developed portfolio projects showcasing various technologies',
        'Participated in hackathons and coding competitions',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-gray-900 z-10"></div>

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass p-6 rounded-xl hover:glow-border transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-primary-500">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-secondary-500 font-semibold mb-4">{exp.company}</h4>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start space-x-2">
                          <Award size={14} className="text-accent-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30"
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
        </div>
      </div>
    </section>
  );
};

export default Experience;