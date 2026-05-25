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
    "A passionate IT & Website Developer, SEO Specialist, and experienced Software Tester. Graduated with a Bachelor of Computer Science from ITB STIKOM Bali, specializing in software application, UI/UX optimization using Framer, and Web 3.0 blockchain testing."
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/n52na3mu9kttu6q9va1w9/my-cv.pdf?rlkey=9w5zd32idneq8r5b4mlqscf55&st=e7r8k0pk&dl=1", // Link CV kamu
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Orizwedanta", //
  linkedin: "https://www.linkedin.com/in/i-putu-gede-orisativa-wedanta-s-kom-53407115a/", //
  gmail: "oriz.wedanta@gmail.com", //
  facebook: "https://www.facebook.com/oriz.wedanta", //
  twitter: "orionwedanata", // Menggunakan handle twitter dari CV
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "IT & WEBSITE DEVELOPER & SOFTWARE TESTER SPECIALIZING IN SEO & WEB3",
  skills: [
    emoji(
      "⚡ Develop and maintain responsive commercial websites with focus on UI/UX optimization using Framer & WordPress"
    ),
    emoji("⚡ Optimize search organic rankings and track web performance via Search Console, Ahrefs, and Sitechecker"),
    emoji(
      "⚡ 6+ years of experience in Functional Website, App, and Web 3.0 Blockchain/EVM network testing using Docker"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5" //
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt" //
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java" //
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker" //
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress" //
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma" //
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Business and Technology Institute of STIKOM Bali", //
      logo: require("./assets/images/stikomLogo.png"), // Pastikan kamu menambahkan logo stikom atau biarkan default jika belum ada
      subHeader: "Bachelor of Computer Science (BCompSc)", //
      duration: "2019 - 2023", //
      desc: "GPA: 3.25. Specializing in software application.", //
      descBullets: [
        "Engaged with various professional IT development, network security, and accelerated digital marketing programs."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SEO & Web Optimization", //
      progressPercentage: "90%"
    },
    {
      Stack: "Software Testing & QA", //
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Web & Framer", //
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT & Website Developer", //
      company: "PT THE LUXURY LEISURE INTERNATIONAL", //
      companylogo: require("./assets/images/companyLogo.png"),
      date: "Dec 2024 – Present", //
      desc: "Develop and maintain the travel company's websites, focusing on SEO keywords organic rank & scoring, UI/UX optimization using Framer, and optimizing property operations by integrating OTAs/PMS tools (HotelLink, STAAH).", //
      descBullets: [
        "Utilize website performance using tracking tools like Sitechecker, Search Console, and Ahrefs.",
        "Regularly manage and update new webpage content, pricing details, and essential website information."
      ]
    },
    {
      role: "Reservation & Support Administrator", //
      company: "U and I Holidays Pvt Ltd", //
      companylogo: require("./assets/images/companyLogo.png"),
      date: "Feb 2024 – Nov 2024", //
      desc: "Maintained the quotation & itinerary programs of FIT customers, ensuring strict data compliance with company policies and legal requirements.", //
      descBullets: [
        "Managed customer activities in accordance with the scheduled itinerary plan program.",
        "Developed and maintained a support knowledge base of FAQs, logistics resources, and troubleshooting issues."
      ]
    },
    {
      role: "Customer Relation Manager", //
      company: "PT First State Futures", //
      companylogo: require("./assets/images/companyLogo.png"),
      date: "Jul 2023 – Feb 2024", //
      desc: "Built relationships, explained product knowledge to customers, and bridged communications to company internals to reach sales targets.", //
      descBullets: [
        "Informed customers regarding updated products and the latest market news."
      ]
    },
    {
      role: "Software Tester (Freelancer)", //
      company: "Various Web 3.0 Private Companies", //
      companylogo: require("./assets/images/companyLogo.png"),
      date: "May 2018 – Jan 2025", //
      desc: "Conducted functional website and application testing for alpha and beta software, including data reporting, bug tracking, and documentation.", //
      descBullets: [
        "Deployed snapshot processors, smart contracts, and peer-ID network testing using Docker.",
        "Tested Layer 1 and Layer 2 EVM tokens testing network, API credentials, and stress-testing network programs."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/framerLogo.webp"),
      projectName: "The Luxury Leisure Website", // Proyek utama kamu saat ini
      projectDesc: "Optimized travel company's website organic ranking and enhanced UI/UX responsiveness using Framer breakpoint systems.", //
      footerLink: [
        {
          name: "Visit Project",
          url: "#" // Masukkan link website kantor jika diperbolehkan publik
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional Certifications, Award Letters and Some Cool Stuff that I have accomplished !",

  achievementsCards: [
    {
      title: "LSPP - Programmer Scheme Certification", //
      subtitle: "Programmer Scheme Certificate by National Professional Certification Authority (BNSP).", //
      image: require("./assets/images/certificateLogo.png"),
      imageAlt: "BNSP Logo",
      footerLink: []
    },
    {
      title: "FCNS - Network Security Certification", //
      subtitle: "Foresec Certificate of Network Security certified by Multimatics.", //
      image: require("./assets/images/certificateLogo.png"),
      imageAlt: "Multimatics Logo",
      footerLink: []
    },
    {
      title: "CDMA - Accelerated Digital Marketing Programs", //
      subtitle: "Certificate of Accelerated Digital Marketing by Zenius.", //
      image: require("./assets/images/certificateLogo.png"),
      imageAlt: "Zenius Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section - DINONAKTIFKAN karena tidak ada data di CV

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", 
  blogs: [],
  display: false 
};

// Talks Sections - DINONAKTIFKAN karena tidak ada data di CV

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false 
};

// Podcast Section - DINONAKTIFKAN karena tidak ada data di CV

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6282144361169", // Nomor dari CV kamu
  email_address: "oriz.wedanta@gmail.com" // Email dari CV kamu
};

// Twitter Section - Diubah sesuai handle kamu

const twitterDetails = {
  userName: "orionwedanata", // Username tanpa tanda @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set ke true karena kamu terbuka untuk peluang karir

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
