// import font-awesome react icons
import {
  FaStickyNote,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

// links array for home/sidebar
export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/parsakhaz/",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/parsas/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Find me on Twitter",
    href: "https://twitter.com/ParsaKhaz",
    icon: <FaTwitter />,
  },
  {
    index: 3,
    title: "Contact me via email (parsak@uw.edu)",
    href: "mailto:parsak@uw.edu",
    icon: <FaEnvelope />,
  },
  {
    index: 4,
    title: "Find me on Notion",
    href: "https://parsas.notion.site/Home-74304ae8d3b7484c8b64b18b5b4ad427",
    icon: <FaStickyNote />,
  },
];
