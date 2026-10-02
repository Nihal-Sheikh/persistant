import { useState, useEffect, useRef } from "react";
interface AppProps {
  restTime: number;
  sessionTime: number;
  repeatCount: number;
}
export default function App(props: AppProps) {
  const restTime: number = props.restTime * 60; //converts rest time to seconds
  const workTime: number = props.sessionTime * 60; //converts work time to seconds
  const repeats: number = props.repeatCount * 2; // dulicates the repeats to take the fact that there will two sessions(worktime and resttime into account)
  const totalTime = (props.sessionTime + props.restTime) * props.repeatCount; //calculates total time
  const [repeatsDone, setRepeatsDone] = useState<number>(0); //repeats done
  const [totalSeconds, setTotalSeconds] = useState<number>(0); //totalseconds on for
  const [currentSession, setCurrentSession] = useState<number>(workTime); //how many minutes will the current session last
  const [working, setWorking] = useState<boolean>(true);
  const [uipaused, setPaused] = useState<boolean>(false);
  const paused = useRef<boolean>(false); //paused or not
  const pauseTimeinSeconds = useRef<number>(0);
  const resumeTimeinSeconds = useRef<number>(0);
  const totalPauseTimeinSeconds = useRef<number>(0);
  const modifier = useRef<number>(1);
  const pauseAudio = new Audio("/Pause.mp3");
  const resumeAudio = new Audio("/Resume.mp3");
  const alarmAudio = new Audio("/Alarm.mp3");
  const restAudio = new Audio("/Rest.mp3");
  useEffect(() => {
    if (totalTime === 0) {
      return;
    }

    const date: Date = new Date();
    const timeInSeconds: number =
      date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds(); // last captures time

    const interval = setInterval(() => {
      setTotalSeconds(() => {
        if (paused.current) {
          const d: Date = new Date();
          resumeTimeinSeconds.current =
            d.getHours() * 3600 +
            d.getMinutes() * 60 +
            d.getSeconds() +
            modifier.current;
          totalPauseTimeinSeconds.current =
            resumeTimeinSeconds.current - pauseTimeinSeconds.current;
        }

        const newTime = new Date();
        const newSeconds: number =
          newTime.getHours() * 3600 +
          newTime.getMinutes() * 60 +
          newTime.getSeconds();
        const newTotalSeconds: number =
          newSeconds - (timeInSeconds + totalPauseTimeinSeconds.current);

        if (newTotalSeconds >= currentSession) {
          if (working) {
            setCurrentSession(restTime);
            setWorking(false);
          } else {
            setCurrentSession(workTime);
            setWorking(true);
          }
        }
        return newTotalSeconds;
      });
    }, 1000);
    if (repeatsDone >= repeats) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [repeatsDone, working, currentSession]);
  useEffect(() => {
    console.log("working", working);
    if (working) {
      restAudio.play();
    } else {
      alarmAudio.play();
    }
    if (repeatsDone < repeats) {
      setTotalSeconds(0);
      setRepeatsDone((prevRepeatsDone) => prevRepeatsDone + 1);
    }
  }, [working, currentSession]);
  useEffect(() => {
    setTotalSeconds(0);
    setRepeatsDone(0);
    setWorking(true);
    setCurrentSession(workTime);
  }, [props.sessionTime, props.restTime, props.repeatCount]);
  function handlePause() {
    paused.current = !paused.current;
    setPaused(paused.current);
    if (paused.current) {
      pauseAudio.play();
      const d = new Date();
      pauseTimeinSeconds.current =
        d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    } else {
      resumeAudio.play();
      modifier.current =
        resumeTimeinSeconds.current - pauseTimeinSeconds.current;
    }
  }
  const seconds: number = totalSeconds % 60;
  const minutes: number = Math.floor(totalSeconds / 60) % 60;
  const hours: number = Math.floor(totalSeconds / 3600);
  if (props.sessionTime === 0) {
    return <></>;
  } else if (totalTime > 480) {
    return (
      <>
        <h2>
          Total time should be less than 9 hours. We do not allow nor encourage
          working overtime. Total time is around {Math.round(totalTime / 60)}{" "}
          hours
        </h2>
      </>
    );
  }

  return (
    <div className="clockContainer">
      <h1 className="clock">
        {hours > 0 ? hours : ""}
        {hours > 0 ? ":" : ""}
        {minutes > 9 ? "" : "0"}
        {minutes}:{seconds > 9 ? "" : "0"}
        {seconds}
        <sup className="session">
          {working ? "Work Session" : "Rest Session"}
        </sup>
      </h1>
      <button type="button" onClick={() => handlePause()} className="pause">
        {uipaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}
