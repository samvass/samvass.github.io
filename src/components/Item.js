import React from 'react'
import './Item.css'

const Item = (props) => {

    const {image, imageLink,h1,h2,h3,h4,h5} = props

  return (
    <a className="item" href={imageLink} >
        <div>
            <img src={image} style={{width: '120px', borderRadius: '20px'}}></img>
        </div>

        <div style={{color: 'white'}}>

            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
                {h1}
            </div>

            <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                {h2}
            </div>

            <div style={{fontSize:'15px', fontWeight: '600', marginBottom: '20px'}}>
                {h3}
            </div>

            <div style={{ marginBottom: '12px' , fontSize: '15px'}}>
                {h4}
            </div>

            <div style={{ marginBottom: '3px', fontSize: '15px' }}>
                {h5}
            </div>

        </div>
    </a>
  )
}

export default Item