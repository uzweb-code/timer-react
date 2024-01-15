import React, { useState, useCallback } from "react";
import logo from "./images/timer.png";
import "./css/style.css";

function Timer() {
  const [intervalID, setIntervalID] = useState(null);
  const [time, setTime] = useState(0);
  function timeValue({ target }) {
    clearInterval(intervalID);
    setTime(target.value);
  }
  const startTimer = useCallback(function () {
    setIntervalID(
      setInterval(() => {
        setTime((prev) => (prev !== 0 ? prev - 1 : (prev = 0)));
      }, 1000)
    );
  }, []);
  return (
    <>
      <div className="timer-div">
        <h1>Timer program</h1>
        <img src={logo} alt="logo" />
        <h1>Time: {time}s</h1>
        <input
          type="text"
          id="input"
          onChange={timeValue}
          placeholder="Vaqtni kiriting"
        />
        <button onClick={startTimer}>Start</button>
      </div>
    </>
  );
}
export default Timer;
