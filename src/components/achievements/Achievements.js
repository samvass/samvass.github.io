import React from 'react';
import style from './Experience.module.css';
import 'aos/dist/aos.css';
import sf from '../../images/sf.png'
import gov from '../../images/gov.png'
import mcgill from '../../images/McGill_University_CoA.svg.png'

import Item from '../Item';


const Experience = () => {

    return (
        <div className={style.exp}>

        <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '50px'}}>Achievements</div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '50px'}}>

        <Item image={sf} imageLink="https://trailhead.salesforce.com/en/credentials/administrator" h1="Certified Administrator" h2="Salesforce" h3="June 2022" h4="Montreal, Canada" />

        <Item image={mcgill} imageLink="https://www.mcgill.ca/engineering/" h1="Antje Graupe Pryor International Awards in Engineering" h2="McGill University" h3="April 2023" h4="Montreal, Canada" />

        </div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '50px'}}>

        <Item image={mcgill} imageLink="https://www.mcgill.ca/engineering/" h1="Excellence Bursary for Computer Science" h2="McGill University" h3="April 2021" h4="Montreal, Canada" />

        <Item image={gov} imageLink="https://www.gg.ca/en/honours/governor-generals-awards" h1="Governor General Award" h2="Government of Canada" h3="June 2018" h4="Montreal, Canada"/>
        
        </div>

        </div>
    )
}


export default Experience

