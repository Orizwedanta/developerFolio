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

// Skills Section

// ==================== 0. FRONT END & SEO SPECIALIST ====================
const skillsSection = {
  title: "Front End & SEO Specialist",
  subTitle: "Developing, maintaining, and configuring commercial site user interfaces using SaaS and modern project management workflows.",
  skills: [
    emoji("➤ Highly procedural professional with 6+ years of technical experience across diversified IT and web operations."),
    emoji("➤ Designing and maintaining intuitive user interfaces to bridge the gap between user experience and business logic."),
    emoji("➤ Managing end-to-end web deployments ensuring high speed, cross-browser compatibility, and seamless navigation."),
    emoji("➤ Passionate about clean architecture, procedural testing, and optimizing code for production environments."),
    emoji("➤ Integrating automation software, bots, and modern SaaS tools to maximize standard operational efficiency.")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "vscode-icons:file-type-html" },
    { skillName: "CSS3", fontAwesomeClassname: "vscode-icons:file-type-css" },
    { skillName: "JavaScript", fontAwesomeClassname: "logos:javascript" }
  ],
  display: true
};

// ==================== 1. HOSPITALITY ADMINISTRATOR ====================
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
    { skillName: "Property Systems", fontAwesomeClassname: "fluent:building-hotel-24-filled" },
    { skillName: "Channel Manager", fontAwesomeClassname: "fa-solid:concierge-bell" },
    { skillName: "Database Logistics", fontAwesomeClassname: "fas:network-wired" }
  ],
  display: true
};

// ==================== 2. SEO & WEB OPTIMIZATION ====================
const skillsSection2 = {
  title: "SEO & Web Optimization",
  subTitle: "Empowering businesses to scale organic keyword rankings, monitor search trends, and audit comprehensive technical site performance.",
  skills: [
    emoji("➤ On-page and off-page semantic optimization targeting high-value commercial keywords to increase organic traffic."),
    emoji("➤ Actively tracking core web vitals, indexation issues, and crawl errors using industry-grade analytical dashboards."),
    emoji("➤ Managing site health scoring metrics, comprehensive backlinks architecture, and domain authority profiles."),
    emoji("➤ Executing regular technological audits to patch rendering errors and enhance mobile responsiveness scoring."),
    emoji("➤ Harnessing advanced platform analytics (Ahrefs, Google Search Console, Sitechecker) to formulate data-driven SEO strategy.")
  ],
  softwareSkills: [
    { skillName: "Google Search Console", fontAwesomeClassname: "simple-icons:googlesearchconsole" },
    { skillName: "Zapier Automation", fontAwesomeClassname: "simple-icons:zapier" },
    { skillName: "Fillout Forms", fontAwesomeClassname: "simple-icons:fillout" }
  ],
  display: true
};

// ==================== 3. WEBSITE BUILDER ====================
const skillsSection3 = {
  title: "Website Builder",
  subTitle: "Building production-ready commercial platforms and maintaining high-performance digital presence using modern frameworks.",
  skills: [
    emoji("➤ Developing structured responsive commercial websites with pixel-perfect accuracy using modern workspace layout engines."),
    emoji("➤ Mapping structural layout responsive breakpoint systems to ensure fluidity across smart devices and large desktop monitors."),
    emoji("➤ Launching customizable enterprise landing systems using headless CMS structures, WordPress layouts, and Framer infrastructure."),
    emoji("➤ Rapid prototyping of technical web systems from wireframes into operational interactive web applications."),
    emoji("➤ Maintaining web application performance via continuous stress-testing, layout optimization, and asset compression.")
  ],
  softwareSkills: [
    { skillName: "WordPress", fontAwesomeClassname: "logos:wordpress-icon" },
    { skillName: "Framer", fontAwesomeClassname: "logos:framer" },
    { skillName: "Moqups Wireframing", fontAwesomeClassname: "simple-icons:moqups" },
    { skillName: "Botpress AI", fontAwesomeClassname: "pixelarticons:book-open" } 
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SEO Performance",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
        //  you can add extra buttons here.
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
  display: true // Set false to hide this section, defaults to true
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
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project? Feel free to contact me.",
  number: "+6287860441732",
  email_address: "oriz.wedanta@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "orizwedanta", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
