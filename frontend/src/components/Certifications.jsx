import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'AD01 Blue Prism Developer Certification',
      issuer: 'Blue Prism',
      date: '2023',
      description: 'Professional certification in Blue Prism development and automation design',
      icon: '🏆',
      verified: true,
      credentialUrl: 'https://www.credly.com/badges/c4c1d2df-a77e-473a-a593-fbb1383e7cd4/public_url'
    },
    {
      title: 'ADAV1 UiPath Certified Professional Automation Developer Associate',
      issuer: 'UiPath',
      date: '2024',
      description: 'Advanced certification in UiPath automation development and best practices',
      icon: '🎖️',
      verified: true,
      credentialUrl: 'https://www.credential.net/c20616da-31a7-43f5-8eb8-0f8ca0c23efb#acc.vtdOApUS'
    },
    {
      title: 'Certificate of Appreciation',
      issuer: 'Cognizant & Client',
      date: '2024',
      description: 'Recognition for outstanding performance and innovative automation solutions',
      icon: '⭐',
      verified: true,
      credentialUrl: '#'
    }
  ];

  const handleCertificationClick = (cert) => {
    if (cert.credentialUrl && cert.credentialUrl !== '#') {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            <span className="text-[#00D1FF]">Certifications</span> & Awards
          </h2>
          <div className="w-20 h-1 bg-[#00D1FF] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleCertificationClick(cert)}
              className={`relative group ${cert.credentialUrl !== '#' ? 'cursor-pointer' : ''}`}
            >
              <div className={`bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-[#00D1FF]/20 hover:border-[#00D1FF]/40 transition-all duration-300 h-full ${
                cert.credentialUrl !== '#' ? 'hover:shadow-lg hover:shadow-[#00D1FF]/20' : ''
              }`}>
                {/* Verified Badge */}
                {cert.verified && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-[#00D1FF] text-black p-2 rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}

                {/* Click indicator for clickable certs */}
                {cert.credentialUrl !== '#' && (
                  <motion.div 
                    className="absolute top-3 left-3 text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                )}

                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="text-[#00D1FF] font-medium mb-2">
                    {cert.issuer}
                  </div>

                  <div className="text-gray-400 text-sm mb-4">
                    {cert.date}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.credentialUrl !== '#' && (
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#00D1FF] text-sm font-medium">
                        Click to view credential →
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#00D1FF]/10 to-transparent rounded-2xl p-8 border border-[#00D1FF]/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I believe in staying updated with the latest technologies and best practices in RPA. 
              These certifications represent my commitment to excellence and continuous improvement 
              in delivering automation solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;