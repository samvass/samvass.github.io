"use client"

import { useRef, useEffect } from "react";

import { HeroHighlightCustom } from "./components/Hero/hero-highlight-custom";
import { CardList, CardType } from "./containers/card-list";
import { NavbarMenu } from "./components/navbar";
import Education from "./containers/education";

// @ts-ignore
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({ duration:1200, offset: 50, })
  }, [])
  

  const workExperienceRef = useRef(null)
  const projectsRef = useRef(null)
  const educationRef = useRef(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <NavbarMenu 
      workExperienceRef={workExperienceRef}
      projectsRef={projectsRef}
      educationRef={educationRef}
      />
      <HeroHighlightCustom />
      <div ref={workExperienceRef} data-aos="fade-up">
        <CardList title={"Work Experience"} cardType={CardType.workExperience} />
      </div>
      <div ref={projectsRef} data-aos="fade-up">
        <CardList title={"Projects"} cardType={CardType.projects} />
      </div>
      <div ref={educationRef} data-aos="fade-up">
        <CardList title={"Education"} cardType={CardType.education} />
      </div>
      <br />
    </div>
  );
}
