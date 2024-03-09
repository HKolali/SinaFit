import React, { useState } from 'react'
import Service from '../../Components/Service/Service'
import { service } from "../../data"
import './Services.css'

export default function Services() {

  const [serviceItems, setServiceItems] = useState(service)

  return (
    <div className='services'>
      <div className="leftSection"></div>
      <div className="rightSection">
        <div className='serviceItem'>
          <Service />
        </div>
        <div className='serviceItem'>
          <Service />
        </div>
        <div className='serviceItem'>
          <Service />
        </div>
        <div className='serviceItem'>
          <Service />
        </div>
        
        {/* {
          serviceItems.map(serviceItem => {
            <Service key={serviceItem.id} {...serviceItem}/>
            // console.log(serviceItem.title);
          })
        } */}
      </div>
    </div>
  )
}
