"use client"

import React, { useState } from "react";
import { tabs, socialLinks } from '@/app/info.json';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export function NavbarMenu({ 
  workExperienceRef,
  projectsRef,
  educationRef
} : 
  {workExperienceRef: any, projectsRef: any, educationRef: any}) {

  const onTabClick = (tabName: string) => {
    let ref = null
    switch(tabName){
      
      case "Work Experience":
        ref = workExperienceRef
        break
      
      case "Projects":
        ref = projectsRef
        break
      
      case "Education":
        ref = educationRef
        break
    }

    ref?.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
  });

  }

  const onSocialClick = (social: string) => {
    const link = (socialLinks as any)[social]
    window.open(link, '_blank');
  }

  return (
    <div className="rounded-full h-auto w-full md:w-3/4 bg-black mb-10 max-w-fit grid grid-cols-1 md:grid-cols-3 gap-4 z-20 p-4">
    {/* Tabs Section: Stacked on mobile, row on larger screens */}
    <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mb-4 md:mb-0">
      {tabs.map((tab, idx) => (
        <div key={idx} className="min-w-[100px]">
          <Tab onClick={() => onTabClick(tab)} gradientEnabled={true}>
            {tab}
          </Tab>
        </div>
      ))}
    </div>

    {/* Social Section: Dropping to a new row on medium width */}
    <div className="col-span-1 md:col-span-3 flex justify-center space-x-4">
      <Tab onClick={() => onSocialClick("github")}>
        <FaGithub />
      </Tab>
      <Tab onClick={() => onSocialClick("linkedin")}>
        <FaLinkedin />
      </Tab>
      <Tab onClick={() => onSocialClick("email")}>
        <MdOutlineMail />
      </Tab>
      <Tab onClick={() => onSocialClick("CV")}>
        <span className="text-xl">CV</span>
      </Tab>
    </div>
  </div>

 
  );
}

const textGradient = {
  backgroundImage: "linear-gradient(to right, #667eea, #764ba2)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  backgroundClip: "text"
};

const Tab = ({ children, onClick, gradientEnabled }: {children: any, onClick: () => void, gradientEnabled?: boolean}) => {
  return (
    <button 
      style={gradientEnabled ? textGradient : undefined} 
      className="p-2 text-2xl mx-4 bg-transparent font-bold transform 
      hover:-translate-y-2 transition duration-400"
      onClick={onClick}>
      {children}
    </button>
  );
}
