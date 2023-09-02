import React from 'react';
import style from './Box.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Box = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    });

    const animation = 'slide-' + props.animation;

    return (
        <div 
        data-aos={animation}
        data-aos-delay={props.delay}
        data-aos-duration="1000"
      >
            <div 
            data-aos="fade-in" 
            data-aos-delay={props.delay}
            className={style.box}>

                <div className={style.boxContent}>
                    {props.name}
                </div>

                <div style={{color: 'white'}}>
                    {props.icon}
                </div>
            </div>
        </div>
    )
}

export default Box
