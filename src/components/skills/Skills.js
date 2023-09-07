import React from 'react';
import style from './Skills.module.css';
import 'aos/dist/aos.css';
import {Box, ListItem, ListItemButton, ListItemText} from '@mui/material';
import Skill from './Skill';
import py from '../../images/Python.png'


const Skills = () => {

  const skls1 = [
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
  ]
  const skls2 = [
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
    {name: 'python', level: 'advanced', image: py, size: '80px'},
  ]

    return (
        <div className={style.skills}>

          <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '40px'}}>Skills</div>

          <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '80px'}}>

            {skls1.map((skill, index) => (
              <div key={index}>
                  <Skill name={skill.name} level={skill.level} image={skill.image} size={skill.size}/>
              </div>
            ))}

          </div>
          <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '80px'}}>

            {skls2.map((skill, index) => (
              <div key={index}>
                  <Skill name={skill.name} level={skill.level} image={skill.image} size={skill.size}/>
              </div>
            ))}

          </div>

        </div>
    )
}

function renderRow(props) {
    const { index, style } = props;

    const courses = ['Artificial Intelligence', 'Algorithm Design', 'Algorithms and Data Structures', 'Model-Based Programming', 'Prog. Languages & Paradigms', 'Operating Systems', 'Requirements Engineering', 'Software Validation', 'Discrete Structures']

    const bg = index %2 == 0 ? '#2e455f' : '#456990'
  
    return (
      <ListItem style={{...style, backgroundColor: bg}} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={courses[index]} />
        </ListItemButton>
      </ListItem>
    );
  }

export default Skills

