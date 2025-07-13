// Mock data for the portfolio website
// This simulates what would come from a backend API or CMS

export const portfolioData = {
  personal: {
    name: "Janagani Shravan Kumar",
    title: "RPA Developer",
    subtitle: "Blue Prism Specialist",
    experience: "4.5 years",
    bio: "Hi! I'm Janagani Shravan Kumar, an RPA Developer with 4.5 years of experience, specializing in Blue Prism and UiPath. I've designed over 30 automation solutions, reducing manual effort by 25% and automating processes like Web APIs, Desktop, Web, Outlook, Excel and Mainframe applications. I'm passionate about delivering efficient business solutions. Certified in AD01 Blue Prism and ADAV1 UiPath, I thrive in collaborative environments. Let's connect to explore automation opportunities!",
    location: "India",
    availability: "Available for opportunities",
    profileImage: null, // Will be added later
    resumeUrl: null // Will be added when resume is uploaded
  },

  contact: {
    email: "shravan.janagani@gmail.com",
    linkedin: "https://linkedin.com/in/JanaganiShravan",
    github: "#", // Placeholder
    phone: null, // Not provided
    location: "India (Remote Available)"
  },

  skills: [
    {
      id: 1,
      name: 'Blue Prism',
      level: 95,
      icon: '🔷',
      description: 'Blue Prism Development',
      category: 'automation'
    },
    {
      id: 2,
      name: 'UiPath',
      level: 85,
      icon: '🎯',
      description: 'UiPath Automation',
      category: 'automation'
    },
    {
      id: 3,
      name: 'Power Automate for Desktop',
      level: 75,
      icon: '⚡',
      description: 'Microsoft Power Automate',
      category: 'automation'
    },
    {
      id: 4,
      name: 'Python',
      level: 80,
      icon: '🐍',
      description: 'Python Programming',
      category: 'programming'
    },
    {
      id: 5,
      name: 'MySQL',
      level: 70,
      icon: '🗄️',
      description: 'Database Management',
      category: 'database'
    },
    {
      id: 6,
      name: 'Process Optimization',
      level: 85,
      icon: '📈',
      description: 'Business Process Improvement',
      category: 'business'
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Excel Automation for Financial Reporting',
      description: 'Automated data extraction with Blue Prism, reducing processing time by 80%.',
      detailedDescription: 'Developed a comprehensive Blue Prism automation solution that extracts financial data from multiple Excel spreadsheets, validates the information, and generates consolidated reports. The solution handles error scenarios, sends notifications, and maintains audit trails.',
      technologies: ['Blue Prism', 'Excel', 'VBA', 'SQL'],
      impact: '80% reduction in processing time',
      duration: '2 months',
      team: '1 developer',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      category: 'Financial Automation',
      featured: true,
      status: 'completed',
      clientType: 'Financial Services',
      challenges: [
        'Integration with multiple legacy systems',
        'Handling various Excel formats and versions',
        'Ensuring data accuracy and validation'
      ],
      outcomes: [
        'Reduced manual processing time by 80%',
        'Eliminated human errors in data entry',
        'Improved reporting accuracy to 99.9%'
      ]
    },
    {
      id: 2,
      title: 'Mainframe Process Automation',
      description: 'Integrated Blue Prism with legacy systems, cutting errors by 90%.',
      detailedDescription: 'Created a robust Blue Prism automation that bridges modern desktop, web application and legacy mainframe systems, automating data entry processes and reducing human errors. The solution includes real-time monitoring and automatic retry mechanisms.',
      technologies: ['Blue Prism', 'IBM Mainframe', 'Excel'],
      impact: '90% reduction in errors',
      duration: '3 months',
      team: '1 developer',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
      category: 'Legacy Integration',
      featured: true,
      status: 'completed',
      clientType: 'Manufacturing',
      challenges: [
        'Complex mainframe interface navigation',
        'Handling system timeouts and connectivity issues',
        'Ensuring seamless data transfer'
      ],
      outcomes: [
        'Reduced manual errors by 90%',
        'Increased processing speed by 65%',
        'Improved system reliability'
      ]
    },
    {
      id: 3,
      title: 'Outlook Email Automation',
      description: 'Built a Blue Prism bot, improving response time by 50%.',
      detailedDescription: 'Implemented an email processing bot using Blue Prism that automatically retrieves the data from web application, categorizes, prioritizes, and responds to customer emails. The bot includes HTML capabilities and escalation workflows.',
      technologies: ['Blue Prism', 'HTML', 'Outlook'],
      impact: '50% improvement in response time',
      duration: '2 months',
      team: '1 developer',
      progress: 50,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80',
      category: 'Email Automation',
      featured: false,
      status: 'completed',
      clientType: 'Customer Service',
      challenges: [
        'Understanding email context and sentiment',
        'Handling multiple email formats',
        'Integrating with CRM systems'
      ],
      outcomes: [
        'Improved response time by 50%',
        'Increased customer satisfaction scores',
        'Reduced manual email processing workload'
      ]
    },
    {
      id: 4,
      title: 'Web Application to Web Services Automation',
      description: 'Built a Blue Prism bot that converts UI interaction to web APIs, reducing AHT by 70%.',
      detailedDescription: 'This bot is created using Blue Prism to convert UI interaction to web APIs which greatly reduces time and frees the bot machine. The automation streamlines the process by eliminating manual UI interactions and directly interfacing with web services.',
      technologies: ['Blue Prism', 'APIs', 'Outlook', 'Excel'],
      impact: 'Reduced AHT by 70%',
      duration: '3 months',
      team: '1 developer',
      progress: 90,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
      category: 'API Integration',
      featured: true,
      status: 'in-progress',
      clientType: 'Technology Services',
      challenges: [
        'Converting UI workflows to API calls',
        'Handling authentication and security',
        'Maintaining data integrity across systems'
      ],
      outcomes: [
        'Reduced Average Handle Time by 70%',
        'Freed up bot machine resources',
        'Improved process reliability'
      ]
    },
    {
      id: 5,
      title: 'Web Application Process Automation',
      description: 'UiPath automation to read and update data in 3 web applications, reducing manual errors by 90%.',
      detailedDescription: 'This bot is created using UiPath where we read and update the data in 3 web applications as per the business scenarios. The automation handles complex business logic and ensures data consistency across multiple platforms.',
      technologies: ['UiPath', 'Excel', 'Outlook'],
      impact: 'Reduces manual errors by 90%',
      duration: '4 months',
      team: '2 developers',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      category: 'Multi-Platform Automation',
      featured: true,
      status: 'completed',
      clientType: 'Business Services',
      challenges: [
        'Synchronizing data across 3 different web applications',
        'Handling varying response times',
        'Managing complex business rule validation'
      ],
      outcomes: [
        'Reduced manual errors by 90%',
        'Improved data consistency across platforms',
        'Streamlined multi-application workflows'
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: 'AD01 Blue Prism Developer Certification',
      issuer: 'Blue Prism',
      date: '2023',
      description: 'Professional certification in Blue Prism development and automation design',
      icon: '🏆',
      verified: true,
      credentialUrl: 'https://www.credly.com/badges/c4c1d2df-a77e-473a-a593-fbb1383e7cd4/public_url',
      level: 'Professional'
    },
    {
      id: 2,
      title: 'ADAV1 UiPath Certified Professional Automation Developer Associate',
      issuer: 'UiPath',
      date: '2024',
      description: 'Advanced certification in UiPath automation development and best practices',
      icon: '🎖️',
      verified: true,
      credentialUrl: 'https://www.credential.net/c20616da-31a7-43f5-8eb8-0f8ca0c23efb#acc.vtdOApUS',
      level: 'Associate'
    },
    {
      id: 3,
      title: 'Certificate of Appreciation',
      issuer: 'Cognizant & Client',
      date: '2024',
      description: 'Recognition for outstanding performance and innovative automation solutions',
      icon: '⭐',
      verified: true,
      credentialUrl: '#',
      level: 'Recognition'
    }
  ],

  experience: [
    {
      id: 1,
      company: 'Cognizant',
      position: 'RPA Developer',
      duration: '4.5 years',
      startDate: 'March 2021',
      endDate: 'Present',
      location: 'India',
      type: 'Full-time',
      current: true,
      logo: null, // Can be uploaded later
      achievements: [
        'Designed over 30 automation solutions',
        'Reduced manual effort by 25%',
        'Specialized in Blue Prism and UiPath development',
        'Automated Web APIs, Desktop, Web, Outlook, Excel and Mainframe applications'
      ],
      description: 'Currently working as an RPA Developer specializing in Blue Prism and UiPath automation solutions. Leading automation projects and delivering innovative business process improvements.'
    }
  ],

  statistics: {
    automationSolutions: 30,
    manualEffortReduction: 25,
    yearsExperience: 4.5,
    certifications: 3,
    projectsCompleted: 20,
    clientSatisfaction: 98
  },

  testimonials: [
    {
      id: 1,
      name: 'Project Manager',
      company: 'Cognizant',
      text: 'Shravan consistently delivers high-quality automation solutions that exceed expectations.',
      rating: 5
    }
  ],

  settings: {
    theme: 'dark',
    primaryColor: '#00D1FF',
    secondaryColor: '#000000',
    enableAnimations: true,
    showContactForm: true,
    enableDownloadCV: false
  }
};

// Simulate API calls with delays
export const mockAPI = {
  getPortfolioData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(portfolioData);
      }, 500);
    });
  },

  updatePortfolioData: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would update the backend
        Object.assign(portfolioData, data);
        resolve(portfolioData);
      }, 1000);
    });
  },

  sendContactMessage: (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate successful message sending
        resolve({
          success: true,
          message: 'Message sent successfully!',
          id: Date.now()
        });
      }, 1500);
    });
  },

  uploadImage: (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate image upload
        const fakeUrl = URL.createObjectURL(file);
        resolve({
          success: true,
          url: fakeUrl
        });
      }, 2000);
    });
  }
};

export default portfolioData;