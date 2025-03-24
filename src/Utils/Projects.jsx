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

const projects = [
  {
    id: "housease",
    title: "HouseEase – Your Ultimate Property Management Solution",
    description:
      "HouseEase is an innovative web and mobile application designed to streamline the process of buying, selling, and renting properties. ",
    techStack: "Flutter,Django,MySQL",
    image: houseThumbnail,
    images: [house1, house2, house3, house4, house5],
    link: "/projects/carpulse",
    liveLink: "#",
    repoLink: "#",
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
];

export default projects;
