import { IoLogoCss3 } from "react-icons/io";
import img1 from "../image/calculator.png";
import img2 from "../image/netflix.png";
import img3 from "../image/giffinder.png";
import img4 from "../image/squazzle.png"
import img5 from "../image/thoughtapp.png";


import {
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiFirebase,
  SiStyledcomponents,
  SiSocketdotio,
  SiMaterialui,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiFillApi } from "react-icons/ai";

type workType = {
  img: string;
  title: string;
  description: string;
  stack: {
    icon: any;
    tooltip: string;
  }[];
  github: string;
  // live: string;
};

export const workData: workType[] = [
  {
    img: img2,
    title: "Netflix",
    description:
      "This is a replica of the famous Netflix App",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },

      {
        icon: <AiFillApi />,
        tooltip: "API",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT.git",
    
  },
  {
    img: img1,
    title: "Calculator",
    description:
      "An application for small and medium scale entrepreneur  to calculate",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <SiStyledcomponents />,
        tooltip: "Styled-components",
      },
      {
        icon: <SiFirebase />,
        tooltip: "Firebase",
      },
      {
        icon: <RiSecurePaymentFill />,
        tooltip: "Paystack",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github:
      "https://github.com/Adedoyin05/calculator.git",
  
  },
  {
    img: img3,
    title: "Gif Finder",
    description:
      "This is a simple search application that look up for your current Gifs that you fit s your mood",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <AiFillApi />,
        tooltip: "API",
      },
      {
        icon: <SiJest />,
        tooltip: "Jest",
      },
      {
        icon: <SiTailwindcss />,
        tooltip: "TailwindCSS",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
      {
        icon: <SiRedux />,
        tooltip: "Redux",
      },
    ],

    github: "",
    
  },
  {
    img: img4,
    title: "Squazzle",
    description:
      "SQUAZZLE Project A squatting platform This platform allows people to accommodate others for an agreed period of time.",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "https://github.com/StuternHousemanship/SQUAZZLE-Frontend-Project-Team1.1.git",
   
  },
  
  {
    img: img5,
    title: "My Thought App",
    description:
      "This is a React beginner application that helps you write your thoughts, where you can save.",
    stack: [
      {
        icon: <FaReact />,
        tooltip: "React",
      },
      {
        icon: <SiJavascript />,
        tooltip: "JavaScript",
      },
      {
        icon: <IoLogoCss3 />,
        tooltip: "CSS",
      },
    ],
    github: "",
   
  },
];

// stack: [<FaReact />, <SiJavascript />, <IoLogoCss3 />],
