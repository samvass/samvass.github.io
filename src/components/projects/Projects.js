import React from 'react';
import style from './Experience.module.css';
import 'aos/dist/aos.css';
import ml from '../../images/brain2.png'
import tamid from '../../images/tamid.png'
import book from '../../images/book.png'
import phys from '../../images/phys.png'
import Item from '../Item';


const Experience = () => {

    return (
        <div className={style.exp}>

        <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '50px'}}>Projects</div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '50px'}}>

        <Item image={tamid} imageLink="https://tamidgroup.org/" h1="Director of Technology Consulting" h2="TAMID McGill" h3="Fall 2020 - present" h4="Montreal, Canada" />

        <Item image={ml} imageLink="" h1="Machine Learning Image Labelling Agent" h2="Universitat Autonoma de Barcelona" h3="March 2023 - June 2023" h4="Barcelona, Spain" />

        </div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '50px'}}>

        <Item image={book} imageLink="https://github.com/samvass/BookClub" h1="Book Recommendation App (BookClub)" h2="McGill University" h3="January 2022 - May 2022" h4="Montreal, Canada" />

        <Item image={phys} imageLink="https://www.weizmann.ca/" h1="Physics Safe Cracking Competition" h2="Weizman Institute of Science" h3="March 2018" h4="Tel Aviv, Israel" />
        
        </div>

        </div>
    )
}


export default Experience

