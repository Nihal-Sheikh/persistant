import { useState, useEffect } from 'react';
import './pomodoro.scss';
import './To-do.scss';
import App from "./Homepage";
import Focus from "./focusTab";
import Todo from "./To-do-Page";
import Contact from "./contact";
export default function Ui() {
    const [currentWeather, setCurrentWeather] = useState('NL');
    const [index, setIndex] = useState(0);
    let Page = App;
    switch (index) {
        case 0:
            Page = App;
            break;
        case 1:
            Page = Focus;
            break;
        case 2:
            Page = Todo;
            break;
        default:
            break;
    }
    useEffect(() => {
        async function getWeather() {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        
                        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5554fa749437431fa7a125354240802&q=${latitude},${longitude}&aqi=no`);
                        const data = await response.json();
                        setCurrentWeather(`${data.current.temp_c}°C`);
                    }, () => {
                        setCurrentWeather('NL');
                    });
                } else {
                    setCurrentWeather('NL');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setCurrentWeather('NL');
            }
        }

        getWeather();
    }, []);
    
    const Underpseudoelement = document.getElementsByClassName("Uipseudo-element") as HTMLCollectionOf<HTMLElement>;

    function Underlinepseudoelement(l: number) {
        (Underpseudoelement[l] as HTMLElement).style.transition = "width 0.5s";
        (Underpseudoelement[l] as HTMLElement).style.width = "100%";
    }

    function DeUnderlinepseudoelement(l: number) {
        (Underpseudoelement[l] as HTMLElement).style.transition = "width 0.5s";
        (Underpseudoelement[l] as HTMLElement).style.width = "0%";
    }
    return (
        <>
            <nav>
                <div className="HambergerContainer">
                    <div className="Hamberger"></div>
                    <div className="Hamberger"></div>
                    <div className="Hamberger"></div>
                </div>
                <h1 onClick={() => setIndex(0)}>Persistant</h1>
                <ul>
                    <li className='UIListItem' onPointerEnter={() => Underlinepseudoelement(0)} onPointerLeave={() => DeUnderlinepseudoelement(0)}><h1 onClick={() => setIndex(1)}><span>Focus</span> <i className='fa fa-sun-o'></i>   <div className='Uipseudo-element'></div></h1></li>
                    <li className="UIListItem" onPointerEnter={() => Underlinepseudoelement(1)} onPointerLeave={() => DeUnderlinepseudoelement(1)}> <h1 onClick={() => setIndex(2)}> <span>To-Do</span> <img src='./Todo.png'id='icon' alt='icon'></img><div className="Uipseudo-element"></div></h1></li>
                    <li className="UIListItem" onPointerEnter={() => Underlinepseudoelement(2)} onPointerLeave={() => DeUnderlinepseudoelement(2)}><span>Expense-Tracker</span> <i className='fa fa-money'></i><div className="Uipseudo-element"></div></li>
                    <li className="UIListItem" onPointerEnter={() => Underlinepseudoelement(3)} onPointerLeave={() => DeUnderlinepseudoelement(3)}>{currentWeather} <div className="Uipseudo-element"></div></li>
                </ul>
            </nav>
            <Page/>
            <Contact/>
        </>
    );
}
