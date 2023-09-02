import React from 'react'
import './Item.css'

const Item = (props) => {

    const {image, imageLink,h1,h2,h3,h4,h5} = props

  return (
    <a className="item" href={imageLink} >
        <div>
            <img src={image} style={{width: '180px', borderRadius: '20px'}}></img>
        </div>

        <div style={{color: 'white'}}>

            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
                {h1}
            </div>

            <div style={{ fontSize: '30px', fontWeight: '600', marginBottom: '15px' }}>
                {h2}
            </div>

            <div style={{fontSize:'25px', fontWeight: '600', marginBottom: '25px'}}>
                {h3}
            </div>

            <div style={{ marginBottom: '15px' , fontSize: '25px'}}>
                {h4}
            </div>

            <div style={{ marginBottom: '5px', fontSize: '25px' }}>
                {h5}
            </div>

        </div>
    </a>
  )
}

export default Item