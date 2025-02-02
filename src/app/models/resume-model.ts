export interface Resume {
    about: About
    experience: Experience[]
    education: Education[]
    skills: string[]
    interests: string[]
    awards: Award[]
  }
  
  export interface About {
    firstname: string
    lastname: string
    middlename: string
    salutation: string
    email: string
    address: Address
    contactNumber: string
    summary: string
    socialLinks: SocialLink[]
  }
  
  export interface Address {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  
  export interface SocialLink {
    platform: string
    url: string
    icon: string
  }
  
  export interface Experience {
    title: string
    company: string
    startDate: string
    endDate: string
    responsibilities: string[]
  }
  
  export interface Education {
    school: string
    degree: string
    startDate: string
    endDate: string
    courses: string[]
    grade: string
  }
  
  export interface Award {
    name: string
    year: string
    organization: string
  }
  