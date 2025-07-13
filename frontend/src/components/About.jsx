import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            About <span className="text-[#00D1FF]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#00D1FF] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#00D1FF]/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/5 flex items-center justify-center border-2 border-[#00D1FF]/30">
                <div className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-6xl font-light text-[#00D1FF]">SK</span>
                </div>
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hi! I'm Janagani Shravan Kumar, an RPA Developer with 4.5 years of experience, 
                specializing in Blue Prism and UiPath. I've designed over 30 automation solutions, 
                reducing manual effort by 25% and automating processes like Web APIs, Desktop, 
                Web, Outlook, Excel and Mainframe applications.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I'm passionate about delivering efficient business solutions. Certified in AD01 Blue Prism 
                and ADAV1 UiPath, I thrive in collaborative environments. Let's connect to explore automation opportunities!
              </motion.p>

              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-full px-4 py-2">
                  <span className="text-[#00D1FF] font-medium">4.5+ Years Experience</span>
                </div>
                <div className="bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-full px-4 py-2">
                  <span className="text-[#00D1FF] font-medium">20+ Automation Solutions</span>
                </div>
                <div className="bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-full px-4 py-2">
                  <span className="text-[#00D1FF] font-medium">25% Efficiency Gain</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;