export const NAV_LINKS = [
    { label: "Home", id: "home"},
    { label: "Projects" , id: "projects"},
    { label: "Experience" , id: "experience"},
    {label: "Contact" , id: "contact"},
];

export const PROFILE =  {
    name: "Arjeta",
    surname: "Ademi",
    role: "Web Developer",
      bio: "I am an extroverted and motivated person who enjoys creating and implementing new ideas. I have strong communication and organizational skills, attention to detail, initiative and the ability to work effectively in a team.",
    github: "https://github.com/arjetaademi",
    linkedin:"https://www.linkedin.com/in/arjeta-ademi-a4a768247/" ,
    email: "arjetaademi47@gmail.com",
};

export const PROJECTS = [
    {
    title: "Bookly Beauty",
     text: "Book and manage lash lift and brow lamination appointments online ",
     tags: ["React","Javascript","Supabase","CSS"],
     demo: "https://bookly-beauy.netlify.app/",
     code : "https://github.com/arjetaademi/Bookly",
     },
     {
        title: "LessonHub",
        text:"An online course platform with free and PRO lessons, search filters and an admin dashboard.",
       tags: ["Ruby on Rails","PostgreSQL", "Hotwire", "TailwindCSS"],
       demo: null,
       code: "https://github.com/arjetaademi/LessonHub"
    
    }
];
export const EXPERIENCE = [
  {
    meta: "3-month internship",
    title: "Junior Web Developer Intern",
    date: "September 2025 - December 2025",
    org: "Fetosoft",
    text: "Developed LessonHub, an online course platform with free and PRO lessons, using Ruby on Rails 8 and PostgreSQL. Built responsive interfaces with Tailwind CSS and implemented live search and filters with Turbo and Stimulus. Created an admin dashboard for managing course content, added role-based access, and integrated Stripe Checkout for monthly and yearly subscriptions.",
  },
  {
  meta: "In progress",
  title: "Independent Web Project",
  org: "Donika Cosmetics",
  text: "Developing a web app for a cosmetics retailer to manage its product catalog, pricing and stock.",
},
];
export const SKILLS = [
  "Build scalable front end architectures",
  "Understand performances and web fundamentals",
  "Design good Apis and understand backend constraints",
  "Integrate AI into real products",
  "Use Ai coding without blindly trusting them",
  "Thinking about security accessibility and reliability",
];