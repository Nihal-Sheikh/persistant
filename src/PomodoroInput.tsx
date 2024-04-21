import Pomodoro from "./pomodoro";
import { useState } from "react";
export default function PomodoroInput() {
    const [sessionTime, setSessionTime] = useState(0);
        const [restTime, setRestTime] = useState(0);
        const [repeatCount, setRepeatCount] = useState(1);
      
        const handleChange = event => {
          const {name, value} = event.target;
          if (name === 'sessionTime') {
            setSessionTime(Number(value));
          } else if (name === 'restTime') {
            setRestTime(Number(value));
          }
          else if (name === 'repeat') {
            setRepeatCount(Number(value));
          }
        };
    return <>
    <article className="pomodoroContainer">
        <h1 className="pomodoroHeader">Select the amount of time in focus session and start</h1>
        <div className="timeSelection"><h1 className='description'>Time(in minutes)</h1><input type="number" name="sessionTime" id="sessionTime" placeholder="25"value={sessionTime} min={0} onChange={handleChange}/></div>
        <div className="restSelection"><h1 className='description'>Rest(in minutes)</h1><input type="number" name="restTime" id="restTime" placeholder="5" value={restTime} min={0} onChange={handleChange} /></div>
    </article>
    <h1 className='header repeatHeader'>Times of repeat</h1>
    <input type="number" name='repeat' id='repeat' className='repeat' placeholder="Times of repeat" value={repeatCount} max="100" min={1} onChange={handleChange}/>
    <Pomodoro sessionTime={sessionTime} restTime={restTime} repeatCount={repeatCount}/>
    </>
}