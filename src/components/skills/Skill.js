import React from 'react'
import './Skill.css'

const Skill = (props) => {
  return (
    <div className='skill'>
        <div className='text'>{props.name}</div>
        <img src={props.image} style={{width: props.size}} />
        <div className='text'>{props.level}</div>
    </div>
  )
}

export default Skill