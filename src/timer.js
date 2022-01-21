import React, { useState, useEffect } from "react";
import logo from  './images/timer.png';
import './css/style.css';

function Timer(){
    let setTimeValue;
    const [time, setTime] = useState(0);
    function editTime(){
        setTime(setTimeValue);
    }
    function timeValue({ target }){
        setTimeValue = target.value;
    }
    function startTimer(){
        setInterval(() => {
            setTime(prev => prev - 1)
            }, 1000);
        }
        if (time === 0){
            setTime(0)
        }
    return (
        <>
             <div className="timer-div">
                     <h1>Timer dasturi</h1>
                    <img src={logo} />
                     <h1>Vaqt: {time}s</h1>
                     <input type="text" id="input" onChange={timeValue} placeholder="Enter time" />
                     <button className="submit" onClick={editTime}>Submit</button>
            </div>
            <div className="start">
                <button onClick={startTimer}>
                    Start
                </button>
            </div>
            </>
    )
}
export default Timer;