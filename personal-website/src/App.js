import style from './App.module.css';
import Header from './components/header/Header';
import Box from './components/box/Box';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import { BrowserRouter, Route } from 'react-router-dom';
import headshot from './images/IMG_0255.jpg'
import {IoSchoolSharp, IoHammerSharp} from 'react-icons/io5'
import {MdWork, MdOutlineArrowUpward} from 'react-icons/md'
import {BsAwardFill} from 'react-icons/bs'
import Cover from './components/Cover';
import Projects from './components/projects/Projects'
import Achievements from './components/achievements/Achievements'
import { useState, useEffect } from 'react';


function App() {

  const headshotStyle = {
    width: '270px',
    borderRadius: '10px'
  };

  function scrollToSection(section){
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  const handleButtonClick = () => {
    // Scroll to the top of the page or perform any desired action
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showButton, setShowButton] = useState(false);

    // Add a scroll event listener to check if the user has scrolled down
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust this value to control when the button appears
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
      <div className={style.app}>
          <Header />
        <div style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
             }}>
            {showButton && (
            <button data-aos="slide-left" style={{borderRadius: '80px', backgroundColor: '#456990', border: 'none', cursor: 'pointer'}} className="scroll-button" onClick={handleButtonClick}>
              <MdOutlineArrowUpward size='80' color='white' />
            </button>
          )}
        </div>
        <div className={style.boxes}>
            <div onClick={() => {scrollToSection('education')}}>
              <Box name="Education" animation="right" delay="0" 
              icon={<IoSchoolSharp size='50px'/>}/>
            </div> 
            <div onClick={() => {scrollToSection('exp')}}>
              <Box name="Experience" animation="up" delay="0" 
              icon={<MdWork size='50px'/>}/>
            </div>           
            <img style={headshotStyle} src={headshot}></img>
            <div onClick={() => {scrollToSection('proj')}}>
              <Box name="Projects" animation="down" delay="0"
              icon={<IoHammerSharp size='50px'/>}/>
            </div>
            <div onClick={() => {scrollToSection('achieve')}}>
              <Box name="Awards" animation="up" delay="0"
              icon={<BsAwardFill size='50px'/>}/>
            </div>
        </div>
        <Cover/>


        <div style={{marginTop: '100px'}} id='education'>
          <br/>
          <Education/>
        </div>

        <div style={{marginTop: '100px'}} id='exp'>
          <br/>
          <Experience/>
        </div>

        <div id='proj'>
          <Projects/>
        </div>

        <div id='achieve'>
          <Achievements/>
        </div>

      </div>
    </div>
  );
}

export default App;
