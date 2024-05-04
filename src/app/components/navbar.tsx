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
    <div className="rounded-full h-20 w-3/4 bg-black mb-10 
    max-w-fit	
    grid grid-flow-row-dense grid-cols-4 z-20">
      <div className="col-span-3 flex justify-start">
        {tabs.map((tab, idx) => {
          return (
            <Tab key={idx} onClick={() => onTabClick(tab)} gradientEnabled={true}>
              {tab}
            </Tab>
          )
        })}
      </div>
      <div className="flex justify-around">
        <Tab onClick={() => onSocialClick("github")}>
          <FaGithub />
        </Tab>
        <Tab onClick={() => onSocialClick("linkedin")}>
          <FaLinkedin />
        </Tab>
        <Tab onClick={() => onSocialClick("email")}>
          <MdOutlineMail />
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
