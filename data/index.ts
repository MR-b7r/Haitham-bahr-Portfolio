export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "As a second-year student at the faculty of Information Technology in Tanta university, I am committed to continually learning Front-end development and staying current with industry trends. I have successfully completed several projects, including developing web applications with NextJs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start tracking-wider ",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Let's start making Projects together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",

    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DocTime - Healthcare App",
    des: "A healthcare that allows patients to register, book, and manage appointments with doctors, administrative tools for confirming, and canceling appointments",
    img: "/p1.png",
    iconLists: [
      { id: 2, name: "Tailwind", designation: "", image: "/tail.svg" },
      { id: 3, name: "Typescript", designation: "", image: "/ts.svg" },
      { id: 1, name: "Next", designation: "", image: "/next.svg" },
      { id: 4, name: "Zod", designation: "", image: "/zod.svg" },
      { id: 5, name: "Sentry", designation: "", image: "/sentry-icon.svg" },
    ],
    link: "https://doctor-time.vercel.app/",
  },
  {
    id: 2,
    title: "Horizon Bank - Financial Website",
    des: "A modern management application that connects to multiple bank accounts, allows users to transfer money to other platform users",
    img: "/p2.png",
    iconLists: [
      { id: 2, name: "Tailwind", designation: "", image: "/tail.svg" },
      { id: 3, name: "Typescript", designation: "", image: "/ts.svg" },
      { id: 1, name: "Next", designation: "", image: "/next.svg" },
      { id: 4, name: "Zod", designation: "", image: "/zod.svg" },
      { id: 5, name: "Appwrite", designation: "", image: "/app.svg" },
    ],
    link: "https://horizon-bank-five.vercel.app/sign-in",
  },
  {
    id: 3,
    title: "The Wild Oasis - Booking cabins",
    des: "Interactive and Responsive Web for booking and updating Cabins. It contains many features as updating profile & many more",
    img: "/p3.png",
    iconLists: [
      { id: 2, name: "Tailwind", designation: "", image: "/tail.svg" },
      { id: 3, name: "Typescript", designation: "", image: "/ts.svg" },
      { id: 1, name: "next", designation: "", image: "/next.svg" },
      { id: 4, name: "Zod", designation: "", image: "/zod.svg" },
      { id: 5, name: "Supabase", designation: "", image: "/supabase-icon.svg" },
    ],
    link: "https://the-next-wild-oasis.vercel.app/",
  },
  {
    id: 4,
    title: "Hoo Bank - landing page",
    des: "Simple landing page website for Financial management Bank App",
    img: "/p4.png",
    iconLists: [
      { id: 2, name: "Tailwind", designation: "", image: "/tail.svg" },
      { id: 3, name: "Javacript", designation: "", image: "/javascript.svg" },
      { id: 1, name: "React", designation: "", image: "/re.svg" },
    ],
    link: "https://landingpage-hoo-bank.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MR-b7r",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/haitham-bahr-b33b1224b/",
  },
  {
    id: 3,
    img: "/download.svg",
    link: "https://drive.google.com/file/d/12jSr96In0enTyVmBU8yeFzUaJneekDgT/view",
  },
];
