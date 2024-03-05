import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='HomeWrapper'>
       <img className="sinaImage" src="./image/me/sina.png" alt="" />
       <div className='textWrapper'>
       <h1 className='HomeName'>من <span id='name'>دکتر سینا مومنی بروجنی</span> هستم</h1>
       <h2 className='HomeTitle'>داستان ورزشکار شدنت از اینجا شروع میشه</h2>
       <p className='HomeDescription'>اینجا میتونی با کمک یک مربی‌ حرفه‌ای به اندام ایده‌آل خودت برسی و ازش لذت ببری پس وقت رو از دست نده </p>
       </div>
    </div>
  )
}
