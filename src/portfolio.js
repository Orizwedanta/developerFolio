/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Oriz Wedanta",
  title: "Hello, I am Oriz",
  subTitle: emoji(
    "A passionate of SEO, Front End, Website Developer. Having an experience of building and maintaining commercial Websites, experienced with many SaaS developer tools such as Wordpress, Framer, Botpress."
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/n52na3mu9kttu6q9va1w9/my-cv.pdf?rlkey=9w5zd32idneq8r5b4mlqscf55&st=zimrudc6&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/orizwedanta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "oriz.wedanta@gmail.com",
  facebook: "https://www.facebook.com/oriz.wedanta",
  display: true // Set true to display this section, defaults to false
};

// Skills Sections

// ==================== 1. FRONT END & ANDROID DEVELOPER ====================
const skillsSection = {
  title: "Front End & Android Developer", 
  subTitle: "Developing, maintaining, and configuring commercial site user interfaces using SaaS and modern project management workflows.",
  skills: [
    emoji("➤ Developing structured, highly responsive layouts for commercial web applications and cross-platform mobile environments."),
    emoji("➤ Designing pixel-perfect accuracy user interfaces, guaranteeing seamless multi-device rendering and cross-browser compatibility."),
    emoji("➤ Building native Android components and layouts optimized for performance using XML and robust platform development environments."),
    emoji("➤ Managing state synchronization, API endpoints connectivity, and modern component lifecycle states on client interfaces.")
  ],
  softwareSkills: [
    {
      skillName: "Framer",
      fontAwesomeClassname: "logos:framer"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "logos:android-icon"
    },
    {
      skillName: "XML",
      fontAwesomeClassname: "vscode-icons:file-type-xml"
    }
  ],
  display: true
};

// ==================== 2. HOSPITALITY ADMINISTRATOR ====================
const skillsSection1 = {
  title: "Hospitality Administrator",
  subTitle: "Helping real estate and travel agencies maximize distribution by connecting Online Travel Agencies (OTAs) through Property Management Systems.",
  skills: [
    emoji("➤ Advanced configuration and synchronization of Property Management Systems (PMS) with major OTA distribution networks."),
    emoji("➤ Managing property inventory availability, complex room pricing tiers, and direct structural booking flows."),
    emoji("➤ Setting up seamless connection configurations using channel managers like STAAH, Hotel Link, and Little Hotelier."),
    emoji("➤ Optimizing real estate property data layouts on commercial endpoints to maximize conversion rates and guest acquisition."),
    emoji("➤ Bridging regional hospitality infrastructure gaps by integrating modern digital reservation systems.")
  ],
  softwareSkills: [
    {
      skillName: "Channel Manager",
      fontAwesomeClassname: "fluent:box-edit-24-regular"
    },
    {
      skillName: "Reservation Systems",
      fontAwesomeClassname: "simple-icons:fillout"
    },
    {
      skillName: "OTA's", 
      fontAwesomeClassname: "logos:airbnb-icon"
    }
  ],
  display: true
};

// ==================== 3. SEO & WEB OPTIMIZATION ====================
const skillsSection2 = {
  title: "SEO & Web Optimization",
  subTitle: "Empowering businesses to scale organic keyword rankings, monitor search trends, and audit comprehensive technical site performance.",
  skills: [
    emoji("➤ Engineering technical site architectures optimized for semantic crawlability, indexing reliability, and high structural Core Web Vitals score."),
    emoji("➤ Conducting structured on-page target keyword maps, competitor backlink profiling, and search intent gap assessments to scale visibility."),
    emoji("➤ Designing multi-tiered backlink acquisition frameworks and internal linking networks that securely distribute search engine page rank."),
    emoji("➤ Integrating automated tracking funnels via Google Search Console and Zapier to trigger performance alerts on critical traffic fluctuations.")
  ],
  softwareSkills: [
    {
      skillName: "Google Search Console",
      fontAwesomeClassname: "logos:google-search-console"
    },
    {
      skillName: "Zapier Automation",
      fontAwesomeClassname: "logos:zapier-icon"
    }
  ],
  display: true
};

// ==================== 4. WEBSITE BUILDER ====================
const skillsSection3 = {
  title: "Website Builder",
  subTitle: "Building production-ready commercial platforms and maintaining high-performance digital presence using modern frameworks.",
  skills: [
    "➤ Building production-ready websites and highly customized digital structures tailored to commercial brand deployment pipelines.",
    "➤ Administering content management ecosystems, secure database instances, theme hierarchies, and active plugin nodes on WordPress.",
    "➤ Transforming interactive prototype drafts and layout wires into fully production-grade, highly responsive web interfaces in Framer.",
    "➤ Conceptualizing and drawing architectural user workflows, interactive screen blueprints, and low-fidelity interface wireframes within Moqups.",
    "➤ Programming conversational automated interfaces and custom logic routers using the modular, AI-ready Botpress development node environment."
  ],
  softwareSkills: [
    {
      skillName: "WordPress",
      fontAwesomeClassname: "logos:wordpress-icon"
    },
    {
      skillName: "Framer",
      fontAwesomeClassname: "logos:framer"
    },
    {
      skillName: "Moqups Wireframing",
      fontAwesomeClassname: "fluent:window-dev-tools-20-regular"
    },
    {
      skillName: "Botpress",
      fontAwesomeClassname: "fluent:bot-24-regular"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // WAJIB TRUE agar section ini dirender
  displayCodersrank: false,

  // KATEGORI 1: TOOLS & SAAS PLATFORMS
  toolsAndSaaS: [
    {
      Stack: "WordPress & Ecosystems"
    },
    {
      Stack: "Framer Design Engine"
    },
    {
      Stack: "Zapier Integration & Automation"
    },
    {
      Stack: "Tableau Analytics"
    },
    {
      Stack: "Property Management Systems (PMS)"
    },
    {
      Stack: "Botpress AI & Automation"
    }
  ],

  // KATEGORI 2: DOMAIN EXPERTISE (GENERAL SKILLS)
  domainExpertise: [
    {
      Stack: "Search Engine Optimization (SEO)",
      progressPercentage: "90%"
    },
    {
      Stack: "Front End Web Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Hospitality Distribution Logistics",
      progressPercentage: "80%"
    },
    {
      Stack: "Cross-Platform Application Workflow",
      progressPercentage: "70%"
    }
  ],

  // KATEGORI 3: CORE SPECIFIC SKILLS
  coreSpecificSkills: [
    {
      Stack: "Technical Site Auditing & Tracking",
      progressPercentage: "90%"
    },
    {
      Stack: "OTA Distribution & Revenue Management",
      progressPercentage: "85%"
    },
    {
      Stack: "Responsive UI/UX Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Conversational Logic Routing & NLP",
      progressPercentage: "70%"
    }
  ]
};
// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "IT & Web Specialist",
      company: "The Luxury Leisure",
      companylogo: "https://docs.google.com/uc?export=download&id=1NfH1UDh9pfJnTNybDKNGlYSCAWY0u-dQ",
      date: "December 2024 – Present",
      desc: "Helps the travel agency company by configure, monitorize, & also maintain their commercials websites related to real estate property agency & partners.",
      descBullets: [
        "Track & monitor the websites performance using Sitechecker",
        "Develop and repair the bugs of front end for each responsive view interface and user experience",
        "Developing automation for reservation flow"
      ]
    },
    {
      role: "Reservation & Support Administrator",
      company: "U & I Holidays",
      companylogo:"https://docs.google.com/uc?export=download&id=1jyH8MVadnvlQZw82tPIhl89pLNG34vtn",
      date: "February 2023 – November 2024",
      desc: "The Reservation System serves as the central hub for managing property inventory, live availability, and guest bookings guidance.",
       descBullets: [
        "Instantly updates trip availability and fulfill bookings itinerary across guest itinerary database and internal systems",
        "Streamlines the reservation process by instantly processing guest trip agenda, verifying booking details",
        "Consolidates guest profiles, arrival schedules, and financial transactions into a single dashboard"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF \n"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true 
};

// Blogs Section

/*const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", 
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true 
};*/

// Talks Sections

// Podcast Section

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Get In Touch ☎️"),
  subtitle: "Discuss a project? Feel free to contact me.",
  number: "+6287860441732",
  email_address: "oriz.wedanta@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "orizwedanta",
  display: false 
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  skillsSection1,
  skillsSection2,
  skillsSection3,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
