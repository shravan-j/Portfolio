import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [resumeFile, setResumeFile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'media', label: 'Photos/Resume', icon: '📁' }
  ];

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      // In real app, this would upload to backend
      console.log('Resume uploaded:', file.name);
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
      // In real app, this would upload to backend
      console.log('Image uploaded:', file.name);
    } else {
      alert('Please upload an image file only');
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 bg-[#00D1FF] text-black p-4 rounded-full shadow-lg hover:bg-[#00A3CC] transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[#00D1FF]/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#00D1FF]/20">
            <h2 className="text-2xl font-bold text-white">Portfolio Admin Panel</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-[#00D1FF] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex h-[calc(90vh-140px)]">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800/50 border-r border-[#00D1FF]/10 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/30'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-[#00D1FF]'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === 'media' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Profile Photo</h3>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-[#00D1FF]/10">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/5 flex items-center justify-center border-2 border-[#00D1FF]/30">
                          {profileImage ? (
                            <img 
                              src={URL.createObjectURL(profileImage)} 
                              alt="Profile" 
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-4xl text-[#00D1FF]">📷</span>
                          )}
                        </div>
                        <div>
                          <label className="bg-[#00D1FF] text-black px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-[#00A3CC] transition-all duration-300">
                            Upload Photo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </label>
                          <p className="text-gray-400 text-sm mt-2">Recommended: 400x400px, max 2MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Resume/CV</h3>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-[#00D1FF]/10">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-32 bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/5 rounded-lg flex items-center justify-center border-2 border-[#00D1FF]/30">
                          <span className="text-4xl text-[#00D1FF]">📄</span>
                        </div>
                        {resumeFile && (
                          <div className="text-center">
                            <p className="text-[#00D1FF] font-medium">{resumeFile.name}</p>
                            <p className="text-gray-400 text-sm">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        )}
                        <div>
                          <label className="bg-[#00D1FF] text-black px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-[#00A3CC] transition-all duration-300">
                            Upload Resume
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={handleResumeUpload}
                              className="hidden"
                            />
                          </label>
                          <p className="text-gray-400 text-sm mt-2">PDF format only, max 5MB</p>
                        </div>
                        {resumeFile && (
                          <button className="text-green-400 hover:text-green-300 transition-colors">
                            ✅ Resume ready for download
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'personal' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="Janagani Shravan Kumar"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Job Title</label>
                      <input
                        type="text"
                        defaultValue="RPA Developer"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Bio</label>
                    <textarea
                      rows={6}
                      defaultValue="Hi! I'm Janagani Shravan Kumar, an RPA Developer with 4.5 years of experience, specializing in Blue Prism and UiPath..."
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] transition-all duration-300 resize-none"
                    />
                  </div>
                </div>
              )}

              {activeTab !== 'media' && activeTab !== 'personal' && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚧</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
                  <p className="text-gray-400">
                    {tabs.find(tab => tab.id === activeTab)?.label} editing will be available in the backend implementation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-[#00D1FF]/20">
            <p className="text-gray-400 text-sm">
              📝 Currently in frontend mode with mock data
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2 bg-[#00D1FF] text-black rounded-lg hover:bg-[#00A3CC] transition-colors font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminPanel;