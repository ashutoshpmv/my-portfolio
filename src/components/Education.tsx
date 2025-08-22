import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Technology',
      location: 'India',
      period: '2022 - 2026',
      gpa: '8.5/10.0',
      achievements: [
        'Dean\'s List for academic excellence',
        'Lead developer for university tech fest website',
        'Winner of inter-college coding competition',
        'Active member of Computer Science Society',
      ],
      coursework: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Machine Learning'],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Central Board of Secondary Education',
      location: 'India',
      period: '2020 - 2022',
      gpa: '92%',
      achievements: [
        'Top 5% of graduating class',
        'Mathematics Olympiad qualifier',
        'Science exhibition winner',
        'Student council member',
      ],
      coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 * index, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                    <GraduationCap size={12} className="text-white" />
                  </div>

                  <div className="ml-12 md:ml-20">
                    <div className="glass p-8 rounded-xl hover:glow-border transition-all duration-300 group">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg text-secondary-500 font-semibold mb-2">{edu.institution}</h4>
                        </div>
                        
                        <div className="flex flex-col lg:items-end space-y-2">
                          <div className="flex items-center space-x-2 text-primary-500">
                            <Calendar size={16} />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin size={14} />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-accent-500">
                            <Star size={14} />
                            <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-primary-400 mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                                className="text-gray-300 flex items-start space-x-2"
                              >
                                <Star size={12} className="text-accent-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-secondary-400 mb-3">Relevant Coursework</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-secondary-500/20 to-primary-500/20 text-secondary-300 rounded-full border border-secondary-500/30"
                              >
                                {course}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;