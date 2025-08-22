import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUp } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" size={24} />,
      label: 'Email',
      value: 'ashutoshpmv@gmail.com',
      link: 'mailto:ashutoshpmv@gmail.com',
    },
    {
      icon: <Phone className="text-secondary-500" size={24} />,
      label: 'Phone',
      value: '+91 (XXX) XXX-XXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: <MapPin className="text-accent-500" size={24} />,
      label: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashutoshpmv',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://www.github.com/ashutoshpmv',
      color: 'hover:text-gray-300',
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:ashutoshpmv@gmail.com',
      color: 'hover:text-primary-500',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="btn-glow w-full py-4 rounded-lg text-white font-medium flex items-center justify-center space-x-3 relative z-10"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:glow-border transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-primary-500 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`p-3 glass rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 glow-border`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 btn-glow rounded-full text-white hover:scale-110 transition-transform duration-300 z-50"
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        className="mt-20 py-8 border-t border-gray-800"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ashutosh Kumar Singh. Crafted with{' '}
            <span className="text-red-500">❤️</span>{' '}
            and modern technologies.
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;