import React from 'react'

const Item = (props) => {

    const {image, imageLink,h1,h2,h3,h4,h5} = props

  return (
    <div style={{display: 'flex', gap: '30px'}}>
        <div>
            <a href={imageLink}>
                <img src={image} style={{width: '180px'}}></img>
            </a>
        </div>

        <div>

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
    </div>
  )
}

export default Item