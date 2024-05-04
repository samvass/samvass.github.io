"use client"

import React, { useState } from "react";
import { tabs, socialLinks } from '@/app/info.json';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export function NavbarMenu() {

  const onTabClick = (tabName: string) => {
    // scroll to that section
  }

  const onSocialClick = (social: string) => {
    const link = (socialLinks as any)[social]
    //forward the user to that link
  }

  return (
    <div className="rounded-full h-20 w-3/4 border-4 bg-gradient-to-r from-indigo-500 to-purple-500 mb-10 grid grid-flow-row-dense grid-cols-4">
      <div className="col-span-3 flex justify-start">
        {tabs.map((tab, idx) => {
          return (
            <Tab key={idx} onClick={() => onTabClick(tab)}>
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

const Tab = ({ children, onClick }: {children: any, onClick: () => void}) => {
  return (
    <button className="p-5 text-2xl mx-4 bg-transparent font-bold transform hover:-translate-y-2 transition duration-400" onClick={onClick}>
      {children}
    </button>
  );
}
