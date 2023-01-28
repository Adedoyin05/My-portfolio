import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import "./home.css";
const Socials = () => {
  const socialIcons: { social: any; link: string }[] = [
    {
      social: <FaTwitter />,
      link: "https://twitter.com/AdebajoAdedoyi2",
    },
    {
      social: <BsGithub />,
      link: "github.com/Adedoyin05",
    },
    {
      social: <MdEmail />,
      link: "mailto:adebajoa15@gmail.com",
    },
    {
      social: <BsLinkedin />,
      link: "https://www.linkedin.com/in/adedoyin-adebajo-4706bb22a",
    },
  ];

  return (
    <div className="social-mobile fixed w-15 m-5  flex-col flex items-center p-3  justify-center bg-transparent  top-40 ">
      {socialIcons.map((icon) => (
        <a href={icon.link} className="p-3 linkText">
          {icon.social}
        </a>
      ))}
    </div>
  );
};
export default Socials;
