import house1 from './../assets/projectImages/HouseEase/Picture15.jpg';
import house2 from './../assets/projectImages/HouseEase/Picture16.jpg';
import house3 from './../assets/projectImages/HouseEase/Picture21.jpg';
import house4 from './../assets/projectImages/HouseEase/Picture26.jpg';
import house5 from './../assets/projectImages/HouseEase/Picture27.jpg';
import houseThumbnail from './../assets/projectImages/HouseEase/thumbnail1.jpg';

import pinnup1 from './../assets/projectImages/Pinnup/image1.png';
import pinnup2 from './../assets/projectImages/Pinnup/image2.png';
import pinnup3 from './../assets/projectImages/Pinnup/image3.png';
import pinnup4 from './../assets/projectImages/Pinnup/image4.png';
import pinnupThumbnail from './../assets/projectImages/Pinnup/thumbnail1.jpg';

import carpulseMain from '../assets/projectImages/CarPulse/website1.png';
import carpulse2 from '../assets/projectImages/CarPulse/website2.png'
import carpulse3 from '../assets/projectImages/CarPulse/website3.png'
import carpulse4 from '../assets/projectImages/CarPulse/website4.png'
import carpulse5 from '../assets/projectImages/CarPulse/website5.png'

const projects = [
  {
    id: "housease",
    title: "HouseEase – Your Ultimate Property Management Solution",
    description:
      "HouseEase is an innovative web and mobile application designed to streamline the process of buying, selling, and renting properties. ",
    techStack: "Flutter,Django,MySQL",
    image: houseThumbnail,
    images: [houseThumbnail, house2, house3, house4, house5],
    link: "/projects/carpulse",
    liveLink: "#",
    repoLink: "https://github.com/syedtayab321/shiftease_frontend",
    features: [
      "Property Listings Management ",
      "Advanced Search & Filters",
      "Interactive Map Integration",
      "Booking & Scheduling",
      "Push Notifications & Alerts"
    ],
  },
  {
    id: "pinnup",
    title: "PinnUp , Social Media & Networking Platform",
    description:
      " PinnUp is a dynamic social media platform designed for seamless networking, content sharing, and community engagement",
    techStack: "React,Django,PostgreSQL,AI",
    image: pinnupThumbnail,
    images: [pinnup1, pinnup2, pinnup3, pinnup4],
    link: "/projects/carpulse",
    liveLink: "#",
    repoLink: "#",
    features: [
      "User Profiles & Customization ",
      "News Feed & Post Sharing",
      "Friend Requests & Connections",
      "Notifications & Alerts",
      "Privacy & Security Settings"
    ],
  },
  {
    id: "carpulse",
    title: " CarPulse - Your Ultimate Car Care Companion",
    description:
      "Keep your vehicle running smoothly with CarPulse - the one-stop solution for all your car service needs. From routine maintenance to emergency repairs.",
    techStack: "React,JavaScript,Firebase",
    image: carpulseMain,
    images: [carpulseMain,carpulse2,carpulse3,carpulse4,carpulse5],
    link: "/projects/carpulse",
    liveLink: "https://car-pulse.vercel.app/",
    repoLink: "https://github.com/syedtayab321/CarPulse",
    features: [
      "Service Management",
      "Smart Service Search",
      "Garage Locator Map",
      "One-Click Booking",
      "Maintenance Alerts",
    ],
  },
];

export default projects;
