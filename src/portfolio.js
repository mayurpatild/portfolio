
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Mayur Patil",
  title: "Hi all, I'm Mayur",
  subTitle: emoji("A passionate Software QA 🚀 Solving problems, building and testing things with code and thoughts."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mayurpatild",
  linkedin: "https://www.linkedin.com/in/mayurpatild/",
  gmail: "mayurpatild@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: ""
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK QA WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Passionate about designing and implementing Reusable, Maintainable, Scalable and Well-Designed Test Automation Frameworks"),
    emoji("⚡ Applications/ Utilities across a variety of platforms and systems: On-line, Real time applications, Web and Mobile user interface & Web services.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Framework Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Desktop Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "API Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "80%"
    },
    {
      Stack: "Service Virtualization",
      progressPercentage: "60%"
    },
    {
      Stack: "Performance Testing",
      progressPercentage: "60%"
    }
  ]
};


// Your top work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Associate, Solution Engineering",  
      company: "Western Union",
      companylogo: require("./assets/images/wuLogo.png"),
      date: "Mar 2019 – Present",
      desc: "Currently playing SDET role in Global Payments Compliance team and working with cutting edge intelligent tech stack to not just ensure regulatory compliance but also improving customer satisfaction",
      descBullets: [
        "Testing across a variety of platforms and systems: Online real time applications, web and desktop UI & APIs",
        "Enhancing existing Integrated BDD framework for APIs, Desktop and Web apps",
        "Build and enhance CI/CD pipeline to Build, Test and Deploy various Services based on .NET and Java on Cloud infrastructure",
        "Active member of WU QAFe core team - a great place to learn all things testing, connect with others interested in software quality and contribute to the advancement of software testing craft"
      ]
    },
    {
      role: "Systems Engineer",   
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs3.jfif"),
      date: "Dec 2016 – Mar 2019",
      desc: "Developed and enhanced several Hybrid frameworks for testing Web applications using Selenium, Cucumber and TestNG",
       descBullets: [
        "Worked on multiple projects in Cards domain with contributions for testing multiple Web and Mobile applications",
        "Developed and enhanced several Hybrid frameworks for testing Web applications using Selenium, Cucumber and TestNG",
        "Implemented Grid based Architecture to run Test suites including thousands of Test cases distributed to run on several node machines for Web Applications",
        "Implemented BDD based Mobile Test Automation Framework architecture to run test suites on mobile applications across Android/iOS devices using Perfecto"
      ]
    },
    },
  ]
};

// Your top work experiences

const education = {
  viewEducation: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Bachelor of Engineering (Electonics & Telecommunication)",  
      company: "Savitribai Phule University",
      companylogo: require("./assets/images/sppuLogo.jpg"),
      date: "Aug 2012 – Jun 2016",
      desc: "First Class with Distinction (71.8%)"
    },
    {
      role: "12th Grade",  
      company: "Central Board of Secondary Education",
      companylogo: require("./assets/images/cbseLogo.png"),
      date: "Apr 2011 – Mar 2012",
      desc: "85.8%"
    },
    {
      role: "10th Grade",  
      company: "Central Board of Secondary Education",
      companylogo: require("./assets/images/cbseLogo.png"),
      date: "Apr 2009 – Mar 2010",
      desc: "CGPA 9.4"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mayurpatild", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "WU WAY GROUP STARS Winner",
      subtitle: "Received WU WAY Star award in Q1 2020 for implemmentation of BDD framework",
      image: require("./assets/images/wuLogo.png"),
      footerLink: [
        { name: "Achievement", url: "" }
      ]
    },
    {
      title: "WU Bravo recognition - Flair Award",
      subtitle: "Received Flair award for ",
      image: require("./assets/images/wuLogo.png"),
      footerLink: [
        { name: "Achievement", url: "" }
      ]
    },
    {
      title: "ISTQB Certified Tester",
      subtitle: "",
      image: require("./assets/images/ISTQB.png"),
      footerLink: [{ name: "Certification", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },
    {
      title: "RPA Developer Foundation",
      subtitle: "Completed Certifcation from UiPath for Robotic Process Automation (RPA) Development",
      image: require("./assets/images/UiPath.webp"),
      footerLink: [
        { name: "Certification", url: "https://cloud.contentraven.com/crdownloadfiles/index.aspx?act=8MH4sSWyowEaN0eXRAsy+A__&id=4t2QriPXC/Q_" }
      ]
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9421XXXXXX",
  email_address: "mayurpatild@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, education, openSource, achievementSection, contactInfo};
