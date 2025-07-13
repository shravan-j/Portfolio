import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'RPA',
      level: 95,
      icon: '🤖',
      description: 'Robotic Process Automation'
    },
    {
      name: 'Blue Prism',
      level: 90,
      icon: '🔷',
      description: 'Blue Prism Development'
    },
    {
      name: 'UiPath',
      level: 85,
      icon: '🎯',
      description: 'UiPath Automation'
    },
    {
      name: 'Python',
      level: 80,
      icon: '🐍',
      description: 'Python Programming'
    },
    {
      name: 'Java',
      level: 75,
      icon: '☕',
      description: 'Java Development'
    },
    {
      name: 'MySQL',
      level: 70,
      icon: '🗄️',
      description: 'Database Management'
    },
    {
      name: 'Process Optimization',
      level: 85,
      icon: '⚡',
      description: 'Business Process Improvement'
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Technical <span className="text-[#00D1FF]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#00D1FF] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-[#00D1FF]/10 hover:border-[#00D1FF]/30 transition-all duration-300"
            >
              <div className="text-center">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#00D1FF] to-[#00A3CC] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-[#00D1FF] text-sm font-medium">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;