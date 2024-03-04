import React, { useMemo, useRef } from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'

export default function Timer() {
    const [time, setTime] = useState(172800);
    const timer = useRef(0)

    const increaseTime = () => setTime(prev => prev - 1);

    useEffect(() => {
        timer.current = setInterval(increaseTime, 1000);
        return () => clearInterval(timer.current);
    }, []);


    const calculateTime = () => {
        let totalSeconds = time;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        (seconds < 10) ? seconds = `0${seconds}` : seconds = seconds;
        (minutes < 10) ? minutes = `0${minutes}` : minutes = minutes;
        (hours < 10) ? hours = `0${hours}` : hours = hours;

        return `${hours} : ${minutes} : ${seconds}`
    }

    return (
        <div className='timer-wrapper'>
            <h2 className="timer">{calculateTime()}</h2>
            {/* {console.log(timer.current)} */}
        </div>
    )
}
