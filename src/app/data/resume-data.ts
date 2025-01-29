export const resumeData = {
  about: {
    firstname: 'Clarence',
    lastname: 'Taylor',
    middlename: '',
    salutation: '',
    email: 'clarence.taylor@email.com',
    address: {
      street: '3542 Berry Street',
      city: 'Cheyenne Wells',
      state: 'CO',
      postalCode: '80810',
      country: 'USA'
    },
    contactNumber: '(317) 585-8468',
    summary: `I am experienced in leveraging agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`,
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/clarencetaylor', icon: 'fab fa-linkedin-in' },
      { platform: 'GitHub', url: 'https://github.com/clarencetaylor', icon: 'fab fa-github' },
      { platform: 'Twitter', url: 'https://twitter.com/clarencetaylor', icon: 'fab fa-twitter' },
      { platform: 'Facebook', url: 'https://facebook.com/clarencetaylor', icon: 'fab fa-facebook-f' }
    ]
  },
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      startDate: 'January 2015',
      endDate: 'Present',
      responsibilities: [
        'Developed and maintained scalable web applications using Angular and Spring Boot.',
        'Led a team of 5 developers, ensuring timely delivery of critical features.',
        'Collaborated with product owners to refine and implement new functionalities.',
        'Optimized application performance, reducing load times by 30%.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Innovatech LLC',
      startDate: 'June 2010',
      endDate: 'December 2014',
      responsibilities: [
        'Built custom modules for e-commerce platforms.',
        'Integrated APIs for payment processing and shipping systems.',
        'Provided technical support to resolve client issues.'
      ]
    }
  ],
  education: [
    {
      school: 'University of Colorado',
      degree: 'Bachelor of Science in Computer Science',
      startDate: 'August 2006',
      endDate: 'May 2010',
      courses: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Artificial Intelligence'
      ],
      grade: 'First Class Honours'
    }
  ],
  skills: [
    'Angular',
    'Spring Boot',
    'TypeScript',
    'Java',
    'Kotlin',
    'Docker',
    'Kubernetes',
    'AWS',
    'CI/CD Pipelines'
  ],
  interests: [
    'Exploring new technologies and frameworks',
    'Contributing to open-source projects',
    'Photography',
    'Traveling and hiking'
  ],
  awards: [
    { name: 'Certified Kubernetes Administrator', year: '2020', organization: 'CNCF' },
    { name: 'AWS Certified Solutions Architect', year: '2019', organization: 'Amazon' },
    { name: 'Employee of the Year', year: '2018', organization: 'Tech Solutions Inc.' }
  ]
};
