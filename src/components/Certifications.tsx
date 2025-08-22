import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-DEV-001',
      description: 'Demonstrated proficiency in developing and maintaining applications on AWS platform.',
      icon: '☁️',
      link: '#',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2024',
      credentialId: 'META-REACT-002',
      description: 'Advanced React development skills including hooks, context, and performance optimization.',
      icon: '⚛️',
      link: '#',
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PRO-003',
      description: 'Cloud architecture and deployment strategies using Google Cloud Platform.',
      icon: '🌐',
      link: '#',
    },
    {
      title: 'MongoDB Developer Path',
      issuer: 'MongoDB University',
      date: '2023',
      credentialId: 'MONGO-DEV-004',
      description: 'Database design, aggregation, and performance optimization with MongoDB.',
      icon: '🍃',
      link: '#',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialId: 'FCC-JS-005',
      description: 'Comprehensive understanding of algorithms and data structures in JavaScript.',
      icon: '📊',
      link: '#',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'FCC-RWD-006',
      description: 'Modern CSS techniques including Flexbox, Grid, and responsive design principles.',
      icon: '🎨',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className="glass p-6 rounded-xl hover:glow-border transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-secondary-400 font-semibold">{cert.issuer}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Calendar size={14} />
                  <span className="text-sm">{cert.date}</span>
                </div>
                
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full border border-gray-700">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-accent-500">
                  <Award size={16} />
                  <span className="text-sm font-medium">Verified</span>
                </div>
                
                <a
                  href={cert.link}
                  className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                >
                  <span>View</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Looking to Learn More?</h3>
            <p className="text-gray-400 mb-6">
              I'm always pursuing new certifications and staying updated with the latest technologies 
              in the ever-evolving world of software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30 text-sm">
                Kubernetes
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30 text-sm">
                Docker
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30 text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full border border-primary-500/30 text-sm">
                DevOps
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;