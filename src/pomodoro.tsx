import { useState, useEffect } from 'react';
interface AppProps {
  restTime: number;
  sessionTime: number;
  repeatCount: number;
}
export default function App(props: AppProps) {
    const restTime: number = props.restTime * 60;
    const workTime: number = props.sessionTime * 60;
    const repeats: number = (props.repeatCount * 2);
    const totalTime = ((props.sessionTime) + (props.restTime)) * (props.repeatCount)
    const [repeatsDone, setRepeatsDone] = useState<number>(0);
    const [totalSeconds, setTotalSeconds] = useState<number>(0);
    const [currentSession, setCurrentSession] = useState<number>(workTime);
    const [working, setWorking] = useState<boolean>(true);
    let date: Date;
    useEffect(() => {
      date = new Date();
      const timeInSeconds: number = (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();
      const interval: NodeJS.Timeout = setInterval(() => {
        setTotalSeconds(() => {
        const newTime = new Date();
        const newTotalSeconds: number = (newTime.getHours() * 3600) + (newTime.getMinutes() * 60) + newTime.getSeconds();
        const totalSeconds: number = newTotalSeconds - timeInSeconds;
        return totalSeconds;
      });
    }, 1000);
    if (repeatsDone >= repeats) {
      clearInterval(interval)
    }
    
      return () => clearInterval(interval);
    }, [repeatsDone]);
  
    useEffect(() => {
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
  
    const seconds: number = totalSeconds % 60;
    const minutes: number = Math.floor(totalSeconds / 60) % 60;
    const hours: number = Math.floor(totalSeconds / 3600);
    if (props.sessionTime === 0) {
        return <></>;
    } else if (totalTime > 480) {
        window.alert('Total time should be less than 8 hours. We do not allow nor encourage overtime');
        return <></>;
    }

    return (
        <div>
        <h1 className='clock'>
            {hours > 0 ? hours : ''}
            {hours > 0 ? ':' : ''}
            {minutes > 9 ? '' : '0'}
            {minutes}:{seconds > 9 ? '' : '0'}
            {seconds}
            <sup className='session'>{working ? 'Work Session' : 'Rest Session'}</sup>
        </h1>
        </div>
    );
}