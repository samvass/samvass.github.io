import React from 'react';
import style from './Experience.module.css';
import 'aos/dist/aos.css';
import deloitte from '../../images/deloitte.jpeg'
import novatek from '../../images/novatek.png'
import Item from '../Item';
import BasicModal from '../BasicModal'


const Experience = () => {

    return (
        <div className={style.exp}>

        <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '50px' }}>Experience</div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '80px'}}>

        <Item image={novatek} imageLink="https://ntint.com/" h1="Software Engineering Intern" h2="Novatek International" h3="February 2021 - present (part-time)" h4="Montreal, Canada" />

        <BasicModal btnText="Learn more" header="Tasks and Responsibilities" 
        content={
        <ul>
            <li style={{marginBottom: '10px'}}>Implemented a Powershell script to automate the installation of pharmaceutical software, reducing installation time from 2 hours to 10 minutes</li>
            <li style={{marginBottom: '10px'}}>Developed a Python script to automate data migration to a web-based version of legacy software</li>
            <li style={{marginBottom: '10px'}}>Performed Quality Assurance Testing for various pharmaceutical software products</li>
        </ul>}/>

        </div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '80px'}}>

        <Item image={deloitte} imageLink="https://www2.deloitte.com/ca/en/pages/consulting/articles/deloitte-canadian-delivery-centre.html" h1="Solutions Associate" h2="Deloitte (Canadian Delivery Centre)" h3="May 2022 - August 2022" h4="Montreal, Canada" />

        <BasicModal btnText="Learn more" header="Tasks and Responsibilities" 
        content={
        <ul>
            <li style={{marginBottom: '10px'}}>Built Salesforce tools for client deliverables in accordance with sprint planning</li>
            <li style={{marginBottom: '10px'}}>Developed a Python script to automate data migration to a web-based version of legacy software</li>
            <li style={{marginBottom: '10px'}}>Performed Quality Assurance Testing for various pharmaceutical software products</li>
        </ul>}/>
                
        </div>

        </div>
    )
}


export default Experience

