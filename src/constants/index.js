import {
  bootstrap,
  branch8,
  contenthub,
  creator,
  css,
  dragon,
  facebook,
  figma,
  git,
  github,
  gmail,
  hbs,
  hhome,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  mocaverse,
  mothercare,
  okaybear,
  opencampus,
  reactjs,
  redux,
  tailwind,
  trustandsafety,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "Frontend Web Development",
    icon: mobile,
  },
  {
    title: "Website Optimization",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "HBS Solutions",
    icon: hbs,
    iconBg: "#383E56",
    date: "March 2021 - May 2022",
    points: [
      "Created responsive and user-friendly websites using HTML, CSS, and JavaScript.",
      "Utilized Bootstrap and jQuery to enhance website functionality and appearance.",
      "Implemented advanced features such as animations and modal windows using CSS and JavaScript.",
      "Streamlined workflow with SASS to improve project efficiency and maintainability.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Branch 8",
    icon: branch8,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Developing responsive web apps with React, Redux Toolkit, and TypeScript.",
      "Update and fix for Shopify eCommerce products.",
      "Collaborating with cross-functional teams to deliver quality web apps on time and within budget.",
      "Improving React development practices within the team to boost efficiency and quality.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/hopnguyendinh/"
  },
  {
    image: github,
    link: "https://github.com/hopedevb8"
  },
  {
    image: instagram,
    link: "https://www.instagram.com/hopedevb8/"
  },
  {
    image: gmail,
    link: "mailto:nguyendinhhop8400@gmail.com"
  }
  ,
  {
    image: facebook,
    link: "https://www.facebook.com/dnhndh/"
  }
]

const projects = [
  {
    name: "MagicEden Content Hub",
    description:
      "Web-based platform that provides information and articles about the NFT market.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "orange-text-gradient"
      },
      {
        name: "Styled Component",
        color: "pink-text-gradient",
      },
    ],
    image: contenthub,
    openSource: false,
    source_code_link: "https://blog.magiceden.io/",
  },
  {
    name: "MagicEden Trust and Safety",
    description:
      "Magic Eden aims to be your destination for discovery, expression, and ownership across digital cultures. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient"
      },
    ],
    image: trustandsafety,
    openSource: false,
    source_code_link: "https://trustandsafety.magiceden.io/",
  },
  {
    name: "Open Campus ID",
    description:
      "Empowering the next generation of lifelong learners with Proof of Education. Own your own academic achievements while earning rewards with Open Campus ID.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "green-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "orange-text-gradient",
      }
    ],
    image: opencampus,
    openSource: false,
    source_code_link: "https://project-open-campus-id.pages.dev/",
  },
  {
    name: "Okay Bear NFTs",
    description:
      "Okay Bears is a culture shift. A clean collection of 10.000 diverse bears building a virtuous community that transcends the metaverse into the real world.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "green-text-gradient",
      }
    ],
    image: okaybear,
    openSource: false,
    source_code_link: "https://okay-bears-marketplace.pages.dev/",
  },
  ,
  {
    name: "Boryoku Dragonz NFTs",
    description:
      "Bōryoku Dragonz are an exclusive collection of 1111 Dragon NFT's on the Solana blockchain, backed by a top team of NFT collectors, designers, ...",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "green-text-gradient",
      }
    ],
    image: dragon,
    openSource: false,
    source_code_link: "https://project-me-whitelabelmarketplace.pages.dev/",
  },
  ,
  {
    name: "HomeandHome",
    description:
      "Project information management, sales department: site information, sales documents, sales policies",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      }
    ],
    image: hhome,
    openSource: false,
    source_code_link: "https://apps.apple.com/vn/app/hhome/id1606280635?platform=iphone",
  },
  ,
  {
    name: "Mothercare HK",
    description:
      "Mothercare offers support for every step of your journey with their with their range of children’s clothing, toys, nursery essentials, pushchairs, car seats and more. Their products are made with you and your little ones in mind, making them the go-to brand for all things parenting.",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      }
    ],
    image: mothercare,
    openSource: false,
    source_code_link: "https://www.mothercare.com.hk/",
  },
  ,
  {
    name: "Mocaverse",
    description:
      "Mocaverse is the Animoca Brands membership NFT collection of 8888 unique beings: The Mocas. Join the Mocas in the realms to Learn, Play, Do Good, ...",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "green-text-gradient",
      }
    ],
    image: mocaverse,
    openSource: false,
    source_code_link: "https://www.mocaverse.xyz/mocana",
  },
];

export { experiences, projects, services, socials, technologies };

