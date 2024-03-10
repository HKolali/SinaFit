import React, { useState } from 'react'
import Service from '../../Components/Service/Service'
import { service } from "../../data"
import './Services.css'

export default function Services() {

  const [serviceItems, setServiceItems] = useState(service)
  console.log(serviceItems);

  return (
    <div className='services'>
      <div className="leftSection">
        <h3 className='serviceTitle'>پشتیبانی کامل از شاگردان</h3>
        <img className='leftSectionImage' src="./image/service/question-and-answer.png" alt="" />
      </div>
      <div className="rightSection">
        <div className='serviceWrap'>
          {
            serviceItems.map(serviceItem => (
              <div className='serviceItem'>
                <Service key={serviceItem.id} {...serviceItem} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
