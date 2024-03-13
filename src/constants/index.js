import {
    mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, 
    mongodb, git, figma,docker,meta,starbucks,tesla, shopify,carrent,jobit,tripguide,streamers,threejs,
    android_cert, google_dev, raect_cert, ecz_certificate, google_analys
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "certificates",
      title: "Certificates",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UIX",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Muhajir was a very brilliant young developer in the google developer programme. His programming skills and the ability to work with others is very remarkable.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Google",
      image: "https://th.bing.com/th/id/R.ad2e56471f79fe72c53e8b16f173d632?rik=5sTrOJNENvn9MA&pid=ImgRaw&r=0",
    },
    {
      testimonial:
        "Mr Aruba has proved on many ocassions that he is an exceptional developer. ",
      name: "Chris McnHey",
      designation: "COO",
      company: 'Google',
      image: "https://th.bing.com/th/id/R.47b77c342731043d534498d1be41c67f?rik=h%2f5mngi7y0nvng&pid=ImgRaw&r=0",
    },
    {
      testimonial:
        "Muhajir has had enough practice as a developer , what he needs in his arsenal now is real work Expereience",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },

    {
      name: "ArubaStreamers",
      description:
        "Web-based platform that allows users to search and enquire about any movie giving them a variety of insights including the genre, the cast, the description and the release date.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: streamers,
      source_code_link: "https://github.com/",
    },

    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const certificates = [
    {
      name: "Google Developer",
      description:'This certificate of achievment denotes that i succesfully completed and passed the Google Deloper programme and that i can hold my own in the developer community!',

      image: google_dev,
    },

    {
      name: "Grade 9 Certificate",
      description:'This is proof of concept that not only am i a skilled developer but also a decorated student academically ',

      image: ecz_certificate,
    },
  
    {
      name: "Google Analytics",
      description:'This certifies that  in addition to all the developer courses, I also took the google analytics course enabling me to point out various insights in a website  '
,      image: google_analys,
    },

    {
      name: "React Developer",
      description:
       'A certificate from W3 online school approving my completion of thier 8 months React and React Native course. This is also a bold testament to my React / React Native skills',

      image: raect_cert,
    },

    {
      name: "React Native Developer",
      description:
        "Another Google certificate acknowledging to my react native skills and my ability to create mobile (android) applications ",

      image: android_cert,
    },
  ]
  

  

  export { services, technologies, experiences, testimonials, projects, certificates };