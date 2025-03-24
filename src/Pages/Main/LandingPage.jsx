import React from "react";
import HeroSection from "./../../Components/Main/HeroSection";
import AboutSection from "../../Components/Main/AboutSection";
import ProjectsSection from "../../Components/Main/ProjectSection";
import ExperienceSkills from "../../Components/Main/ExperiancesSection";
import ContactMe from "../../Components/Main/ContactSection";
export default function LandingPage() {
  return (
    <>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <ExperienceSkills/>
        <ContactMe/>
    </>
  );
}
