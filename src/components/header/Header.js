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
                <a href="mailto:samuel-ryan.vasserman@mail.mcgill.ca">
                    <MdEmail size="40px" className={style.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/samuel-vasserman/">
                    <BsLinkedin size="40px" className={style.icon}/>
                </a>
                <a href="https://github.com/samvass">
                <BsGithub size="40px" className={style.icon}/>
                </a>
                <a href="https://drive.google.com/file/d/1TaQoo-_FhhwWr_QRZ08J1q9yaqMo47WD/view?usp=sharing">
                    <RiNewspaperFill size="40px" className={style.icon}/>
                </a>
             </div>
        </div>
    )
}

export default Header
