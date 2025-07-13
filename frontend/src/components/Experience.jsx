import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experience = {
    id: 1,
    company: 'Cognizant',
    position: 'RPA Developer',
    duration: '4.5 years',
    startDate: 'March 2021',
    endDate: 'Present',
    location: 'India',
    type: 'Full-time',
    current: true,
    logo: null,
    achievements: [
      'Designed over 30 automation solutions',
      'Reduced manual effort by 25%',
      'Specialized in Blue Prism and UiPath development',
      'Automated Web APIs, Desktop, Web, Outlook, Excel and Mainframe applications'
    ],
    description: 'Currently working as an RPA Developer specializing in Blue Prism and UiPath automation solutions. Leading automation projects and delivering innovative business process improvements.'
  };

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
            Professional <span className="text-[#00D1FF]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#00D1FF] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#00D1FF] to-transparent hidden md:block" />
          
          <div className="relative">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-[#00D1FF]/20 hover:border-[#00D1FF]/40 transition-all duration-300 md:ml-20"
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute -left-3 top-8 w-6 h-6 bg-[#00D1FF] rounded-full border-4 border-black hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              />

              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Company Logo Placeholder */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/5 rounded-xl flex items-center justify-center border border-[#00D1FF]/30">
                    <span className="text-2xl font-bold text-[#00D1FF]">C</span>
                  </div>
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                      <p className="text-[#00D1FF] text-lg font-semibold">{experience.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-300">{experience.startDate} - {experience.endDate}</span>
                        {experience.current && (
                          <motion.span 
                            className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs"
                            animate={{ pulse: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Current
                          </motion.span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{experience.location} • {experience.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {experience.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            className="w-2 h-2 bg-[#00D1FF] rounded-full mt-2"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Add more experience section placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#00D1FF]/5 to-transparent rounded-xl p-6 border border-[#00D1FF]/10">
            <p className="text-gray-400 text-sm">
              * Previous experience and additional roles can be added through the admin panel
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;