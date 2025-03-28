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
  web,
  shopify,
  flower,
  evisu,
  bbbc,
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
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "git",
    icon: git,
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
    name: "jQuery",
    icon: jQuery,
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
    date: "June 2022 - Dec 2024",
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
    link: "https://www.linkedin.com/in/hopnguyendinh/",
    name: "linkedin",
  },
  {
    image: github,
    link: "https://github.com/hopedevb8",
    name: "github",
  },
  {
    image: instagram,
    link: "https://www.instagram.com/_gepoh/",
    name: "instagram",
  },
  {
    image: gmail,
    link: "mailto:nguyendinhhop8400@gmail.com",
    name: "gmail",
  },
  {
    image: facebook,
    link: "https://www.facebook.com/dnhndh/",
    name: "facebook",
  },
  {
    image: flower,
    link: "/flower",
    name: "gift-flower",
  },
];

const projects = [
  {
    name: "EVISU Official Online Store",
    description:
      "Official Site — Shop the Exclusive EVISU Collection. Shop top pieces online now. Elevate your wardrobe today. Look your best with Evisu. Store Locator. View Our History. Register Online.",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "orange-text-gradient",
      },
    ],
    image: evisu,
    openSource: true,
    source_code_link: "https://evisu.com.hk/",
    src_link: "https://github.com/branch8/project-shopify-evisu",
  },
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
      },
    ],
    image: mothercare,
    openSource: true,
    source_code_link: "https://www.mothercare.com.hk/",
    src_link: "https://github.com/hopedevb8/mothercare-hk",
  },
  {
    name: "Best Bean Best Cup",
    description:
      "Our elite blend masterfully combines rich Colombian flavors, Brazilian consistency, and Ethiopian excellence. Crafted to satisfy both black coffee enthusiasts ...",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
    ],
    image: bbbc,
    openSource: true,
    source_code_link: "https://bestbeanbestcup.com.au/",
    src_link: "https://github.com/HoanNguyenDinh/bbbd",
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
      },
    ],
    image: opencampus,
    openSource: true,
    source_code_link: "https://project-open-campus-id.pages.dev/",
    src_link: "https://github.com/branch8/project-open-campus-labs",
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
      },
    ],
    image: okaybear,
    openSource: true,
    source_code_link: "https://okay-bears-marketplace.pages.dev/",
    src_link: "https://github.com/HoanNguyenDinh/OKB-ETH",
  },

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
      },
    ],
    image: dragon,
    openSource: true,
    source_code_link: "https://project-me-whitelabelmarketplace.pages.dev/",
    src_link: "https://github.com/HoanNguyenDinh/OKB-ETH",
  },

  {
    name: "HomeandHome",
    description:
      "Project information management, sales department: site information, sales documents, sales policies",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
    ],
    image: hhome,
    openSource: false,
    source_code_link:
      "https://apps.apple.com/vn/app/hhome/id1606280635?platform=iphone",
  },

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
      },
    ],
    image: mocaverse,
    openSource: true,
    source_code_link: "https://www.mocaverse.xyz/mocana",
    src_link: "https://github.com/branch8/mocaverse-raffle",
  },
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
        color: "orange-text-gradient",
      },
      {
        name: "Styled Component",
        color: "pink-text-gradient",
      },
    ],
    image: contenthub,
    openSource: true,
    source_code_link: "https://blog.magiceden.io/",
    src_link: "https://github.com/hopedevb8/project-me-contenthub",
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
        color: "orange-text-gradient",
      },
    ],
    image: trustandsafety,
    openSource: true,
    source_code_link: "https://trustandsafety.magiceden.io/",
    src_link: "https://github.com/HoanNguyenDinh/ME-Trust-and-Safety",
  },
];

export { experiences, projects, services, socials, technologies };

