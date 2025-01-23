import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

export const navbarLinks = [
  {
    id: 0,
    title: "Inicio",
    href: "/",
  },
  {
    id: 1,
    title: "Celulares",
    href: "/celulares",
  },
  {
    id: 2,
    title: "Sobre Nosotros",
    href: "/nosotros",
  },
];

export const socialLinks = [
  {
    id: 0,
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 1,
    title: "Twitter",
    href: "https://x.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    title: "TikTok",
    href: "https://www.tiktok.com/",
    icon: <FaTiktok />,
  },
];
