import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Excel Automation for Financial Reporting',
      description: 'Automated data extraction with Blue Prism, reducing processing time by 80%.',
      detailedDescription: 'Developed a comprehensive Blue Prism automation solution that extracts financial data from multiple Excel spreadsheets, validates the information, and generates consolidated reports. The solution handles error scenarios, sends notifications, and maintains audit trails.',
      technologies: ['Blue Prism', 'Excel', 'VBA', 'SQL'],
      impact: '80% reduction in processing time',
      duration: '3 months',
      team: '4 developers',
      progress: 80,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      category: 'Financial Automation'
    },
    {
      id: 2,
      title: 'Mainframe Process Automation',
      description: 'Integrated UiPath with legacy systems, cutting errors by 90%.',
      detailedDescription: 'Created a robust UiPath automation that bridges modern and legacy mainframe systems, automating data entry processes and reducing human errors. The solution includes real-time monitoring and automatic retry mechanisms.',
      technologies: ['UiPath', 'Mainframe', 'IBM', 'Python'],
      impact: '90% reduction in errors',
      duration: '4 months',
      team: '3 developers',
      progress: 90,
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
      category: 'Legacy Integration'
    },
    {
      id: 3,
      title: 'Outlook Email Automation',
      description: 'Built a Blue Prism bot, improving response time by 50%.',
      detailedDescription: 'Implemented an intelligent email processing bot using Blue Prism that automatically categorizes, prioritizes, and responds to customer emails. The bot includes natural language processing capabilities and escalation workflows.',
      technologies: ['Blue Prism', 'Outlook', 'NLP', 'APIs'],
      impact: '50% improvement in response time',
      duration: '2 months',
      team: '2 developers',
      progress: 50,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80',
      category: 'Email Automation'
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Featured <span className="text-[#00D1FF]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#00D1FF] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#00D1FF]/10 hover:border-[#00D1FF]/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#00D1FF]/20 backdrop-blur-sm text-[#00D1FF] px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-[#00D1FF] text-sm font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#00D1FF] to-[#00A3CC] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-[#00D1FF]/10 text-[#00D1FF] px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="text-[#00D1FF] hover:text-white transition-colors duration-300 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-[#00D1FF]/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-3xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-[#00D1FF]/20 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.detailedDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <h4 className="text-[#00D1FF] font-semibold mb-2">Impact</h4>
                      <p className="text-white">{selectedProject.impact}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[#00D1FF] font-semibold mb-2">Duration</h4>
                      <p className="text-white">{selectedProject.duration}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[#00D1FF] font-semibold mb-2">Team Size</h4>
                      <p className="text-white">{selectedProject.team}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[#00D1FF] font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[#00D1FF] px-4 py-2 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;