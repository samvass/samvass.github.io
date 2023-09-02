import React from 'react';
import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import style from './Header.module.css';
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.name}>
                Samuel-Ryan Vasserman
            </div>
            <div className={style.title}>
                Software Engineering Student
            </div>
            <div className={style.info}>
                <a href="https://www.google.com">
                    <BsFillTelephoneFill size="40px" className={style.icon}/>
                </a>
                <a href="https://www.google.com">
                    <MdEmail size="40px" className={style.icon}/>
                </a>
                <a href="https://www.google.com">
                    <BsLinkedin size="40px" className={style.icon}/>
                </a>
                <a href="https://www.google.com">
                <BsGithub size="40px" className={style.icon}/>
                </a>
                <a href="https://www.google.com">
                    <RiNewspaperFill size="40px" className={style.icon}/>
                </a>
             </div>
        </div>
    )
}

export default Header
