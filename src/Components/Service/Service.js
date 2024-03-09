import React from 'react'

export default function Service(props) {
  return (
    <div className='service'>
        <img className='serviceImage' src="./image/service/conversation.png" alt={props.alt} />
        <h3 className='serviceTitle'>kjdfnkgfjngrkn</h3>
        <p className='serviceDesc'>{props.desc}</p>
    </div>
  )
}
