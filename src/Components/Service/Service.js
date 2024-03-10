import React from 'react'
import './Service.css'

export default function Service(props) {
  return (
    <div className='service'>
        <img className='serviceImage' src={props.image} alt={props.alt} />
        <h3 className='serviceTitle'>{props.title}</h3>
        <p className='serviceDesc'>{props.desc}</p>
    </div>
  )
}
