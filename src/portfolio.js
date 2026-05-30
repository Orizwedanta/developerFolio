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
      schoolName: "Technology & Business Institute of STIKOM Bali",
      logo: require("./assets/images/stikombali.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "February 2019 - May 2023",
      desc: "GPA : 3.25."
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

  // KATEGORI 1: TOOLS & SAAS PLATFORMS (Ditambahkan persentase default 75%-90% agar bar menyala panjang)
  toolsAndSaaS: [
    {
      Stack: "WordPress & Ecosystems",
      progressPercentage: "90%"
    },
    {
      Stack: "Framer Design Engine",
      progressPercentage: "85%"
    },
    {
      Stack: "Zapier Integration & Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "Tableau Analytics",
      progressPercentage: "75%"
    },
    {
      Stack: "Property Management Systems (PMS)",
      progressPercentage: "80%"
    },
    {
      Stack: "Botpress AI & Automation",
      progressPercentage: "75%"
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
      Stack: "OTA Distribution & Management",
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
      companylogo: require("./assets/images/luxuryleisure.png"),
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
      companylogo: require("./assets/images/uiholidays.png"),
      date: "February 2024 – July 2024",
      desc: "The Reservation System serves as the central hub for managing property inventory, live availability, and guest bookings guidance.",
       descBullets: [
        "Instantly updates trip availability and fulfill bookings itinerary across guest itinerary database and internal systems",
        "Streamlines the reservation process by instantly processing guest trip agenda, verifying booking details",
        "Consolidates guest profiles, arrival schedules, and financial transactions into a single dashboard"
      ]
    },
    {
      role: "Frontliner Staff",
      company: "Colizeum Arena",
      companylogo: require("./assets/images/colizeumarena.png"),
      date: "August 2024 – November 2024",
      desc: "Helps the company in responsibilty and by ability of welcoming, consolidates the payment, assist the guest, and maintain the official perks.",
       descBullets: [
        "Welcoming the guests and guiding the guests reservation trough the internal langame system",
        "Consolidates the payment and assist the reserved guests due to their activities",
        "Maintain the official perks after the guest leave"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "false", 
  display: false 
};

// Some big projects you have worked on
const bigProjects = {
  title: "Participated Projects",
  subtitle: "Active contributor to the end-to-end lifecycle of core company projects specializing in development, system configuration, and performance monitoring. Optimized system stability and deployment efficiency.",
  projects: [
    {
      image: require("./assets/images/theluxurybali.png"),
      projectName: "The Luxury Bali",
      projectDesc: "Growth website project provide among 20+ partnership & 400+ villas in Bali",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://theluxurybali.com/"
        }
      ]
    },
      {
      image: require("./assets/images/theluxuryleisure.png"),
      projectName: "The Luxury Leisure",
      projectDesc: "The continous developed website project is to provide in total 50+ partnerships and 825+ villas in Indonesia, Thailand, Japan",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://theluxuryleisure.com/"
        }
      ]
    },
      {
      image: require("./assets/images/bridesvenues.png"),
      projectName: "Brides Venues",
      projectDesc: "This website project developed among 200+ venues to wedding in Bali, Thailand, France, Italy",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bridesvenues.com/"
        }
      ]
    },
     {
      image: require("./assets/images/yhcharter.png"),
      projectName: "YH Charter",
      projectDesc: "YH Charter is providing Indonesia, Thailand, & Mediterranian partnership for total 400+ yacht trip",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://yh-charter.com/"
        }
      ]
    },
    {
      image: require("./assets/images/leadluxury.png"),
      projectName: "LEAD Luxury Management",
      projectDesc: "Property Management projects continous developed by using Channel Manager, Booking Engine and integrating OTA's",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://lead-luxury.com/"
        }
      ]
    },
    {
      image: require("./assets/images/venomnetwork.png"),
      projectName: "Venom Network",
      projectDesc: "Venom Network is a web 3.0 blockchain decentralized autonomous organization company with along with 20 ecosystem projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://venom.foundation/"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section
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
  display: false 
};

// SAFETY TOGGLE: Dideklarasikan mati (false) di sini agar halaman portofolio tidak crash mencari variabel objeknya
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to review my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Get In Touch ☎️"),
  subtitle: "Discuss a project? Feel free to contact me.",
  number: "+6287860441732",
  email_address: "oriz.wedanta@gmail.com",
  image: require("./assets/images/orizwedanta.jpeg") // <-- Tambahkan baris ini!
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
  blogSection,      // Tetap dieksport untuk mengelabui file luar agar tidak memicu eror runtime
  talkSection,      // Tetap dieksport untuk mengelabui file luar agar tidak memicu eror runtime
  podcastSection,   // Tetap dieksport untuk mengelabui file luar agar tidak memicu eror runtime
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
