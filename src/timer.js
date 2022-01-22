import React, { useState } from "react";
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
            setTime((prev) => prev !== 0 ? prev - 1: prev = 0)
            }, 1000);
        }
    return (
        <>
             <div className="timer-div">
                     <h1>Timer dasturi</h1>
                    <img src={logo} />
                     <h1>Vaqt: {time}s</h1>
                     <input type="text" id="input" onChange={timeValue} placeholder="Vaqtni kiriting" />
                     <button className="submit" onClick={editTime} >Kiritish</button>
            </div>
            <div className="start">
                <button onClick={startTimer}>
                    Boshlash
                </button>
            </div>
            </>
    )
}
export default Timer;