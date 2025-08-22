import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Brain,
  Users,
  MessageSquare,
  Target,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-primary-500" size={32} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="text-secondary-500" size={32} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Backend & Database',
      icon: <Database className="text-accent-500" size={32} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Server className="text-primary-500" size={32} />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 85 },
        { name: 'Jest', level: 75 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="text-secondary-500" size={32} />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 85 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="text-accent-500" size={32} />,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'UI/UX Design', level: 85 },
      ],
    },
  ];

  const softSkills = [
    {
      icon: <Brain className="text-primary-500" size={24} />,
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions',
    },
    {
      icon: <Users className="text-secondary-500" size={24} />,
      title: 'Team Collaboration',
      description: 'Effective teamwork and leadership',
    },
    {
      icon: <MessageSquare className="text-accent-500" size={24} />,
      title: 'Communication',
      description: 'Clear technical and non-technical communication',
    },
    {
      icon: <Target className="text-primary-500" size={24} />,
      title: 'Project Management',
      description: 'Agile methodologies and deadline management',
    },
    {
      icon: <Lightbulb className="text-secondary-500" size={24} />,
      title: 'Innovation',
      description: 'Creative thinking and continuous learning',
    },
    {
      icon: <GitBranch className="text-accent-500" size={24} />,
      title: 'Version Control',
      description: 'Git workflows and collaborative development',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies for building exceptional digital experiences
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className="glass p-6 rounded-xl hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.05, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse opacity-75"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Professional Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl hover:glow-border transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary-500 transition-colors">
                    {skill.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning Journey</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the forefront of innovation. 
              I regularly explore new frameworks, tools, and methodologies to deliver cutting-edge solutions.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-gray-400 text-sm">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-400 text-sm">Passion for Code</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;