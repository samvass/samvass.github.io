import React from 'react';
import style from './Experience.module.css';
import 'aos/dist/aos.css';
import deloitte from '../../images/deloitte.jpeg'
import novatek from '../../images/novatek.jpeg'
import Item from '../Item';


const Experience = () => {

    return (
        <div className={style.exp}>

        <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '50px' }}>Experience</div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '100px', marginBottom: '100px'}}>

        <Item image={deloitte} imageLink="https://www.mcgill.ca/engineering/" h1="Solutions Associate" h2="Deloitte (Canadian Delivery Centre)" h3="May 2022 - August 2022" h4="Montreal, Canada" />
                
        </div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '100px'}}>

        <Item image={novatek} imageLink="https://www.mcgill.ca/engineering/" h1="Software Engineering Intern" h2="Novatek International" h3="February 2021 - present (part-time)" h4="Montreal, Canada" />

        </div>

        

        </div>
    )
}


export default Experience

