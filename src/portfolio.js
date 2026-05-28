/* Untuk menghemat tempat, fokus pada konfigurasi bagian keahlian (Skills) 
   yang telah diperbarui total. */

const illustration = {
  animated: true // Set ke false jika kamu tidak menggunakan animasi lottie
};

// 1. Title diganti ke Front End & Android Developer, Ikon: Framer, Android Studio, XML
const skillsSection = {
  title: "Front End & Android Developer", 
  subTitle: "Developing, maintaining, and configuring commercial site user interfaces using SaaS and modern project management workflows.",
  skills: [
    "Developing structured responsive commercial web & mobile layouts.",
    "Designing pixel-perfect accuracy interfaces across platforms."
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

// 2. Hospitality: Kata Property Systems diubah ke OTA's, Menambahkan ikon Airbnb
const skillsSection1 = {
  title: "Hospitality Administrator",
  subTitle: "Helping real estate and travel agencies maximize distribution by connecting Online Travel Agencies (OTAs) through Property Management Systems.",
  skills: [
    "Advanced configuration and synchronization of Property Management Systems (PMS) with major OTA distribution networks."
  ],
  softwareSkills: [
    {
      skillName: "OTA's", 
      fontAwesomeClassname: "simple-icons:airbnb" 
    },
    {
      skillName: "Channel Manager",
      fontAwesomeClassname: "fluent:box-edit-24-regular"
    },
    {
      skillName: "Database Logistics",
      fontAwesomeClassname: "octicon:database-24"
    }
  ],
  display: true
};

// 3. SEO & Web Optimization: Ikon GSC, Zapier Berwarna asli!
const skillsSection2 = {
  title: "SEO & Web Optimization",
  subTitle: "Empowering businesses to scale organic keyword rankings, monitor search trends, and audit comprehensive technical site performance.",
  skills: [
    "Empowering businesses to scale organic keyword rankings, monitor search trends, and audit comprehensive technical site performance."
  ],
  softwareSkills: [
    {
      skillName: "Google Search Console",
      fontAwesomeClassname: "logos:google-search-console" // Ikon GSC Berwarna Asli
    },
    {
      skillName: "Zapier Automation",
      fontAwesomeClassname: "logos:zapier-icon"         // Ikon Zapier Berwarna Asli
    }
  ],
  display: true
};

// 4. Website Builder: Botpress AI diubah nama menjadi Botpress dengan ikon bot murni
const skillsSection3 = {
  title: "Website Builder",
  subTitle: "Building production-ready commercial platforms and maintaining high-performance digital presence using modern frameworks.",
  skills: [
    "Developing structured responsive commercial websites with pixel-perfect accuracy."
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
      fontAwesomeClassname: "fluent:bot-24-regular" // Ikon bot murni (tanpa AI)
    }
  ],
  display: true
};

// Tetap pastikan Twitter Embed dimatikan (false) agar tidak memicu error innerHTML null
const twitterDetails = {
  userName: "orizwedanta",
  display: false 
};

export {
  illustration,
  skillsSection,
  skillsSection1,
  skillsSection2,
  skillsSection3,
  twitterDetails
};
