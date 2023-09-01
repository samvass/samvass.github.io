import './App.css';
import style from './App.module.css';
import Header from './components/header/Header';
import Box from './components/box/Box';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import { BrowserRouter, Route } from 'react-router-dom';
import headshot from './images/IMG_0255.jpg'
import {IoSchoolSharp, IoHammerSharp} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {BsAwardFill} from 'react-icons/bs'


function App() {

  const headshotStyle = {
    width: '270px',
    borderRadius: '10px'
  };

  function scrollToSection(section){
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
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

        <br/>
        <br/>
        <br/>

        <div id='education'>
          <br/>
          <Education/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>


        <div id='exp'>
          <br/>
          <Experience/>
        </div>
        <div id='proj'></div>
        <div id='achieve'></div>

      </div>
    </BrowserRouter>
  );
}

export default App;
