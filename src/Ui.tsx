import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Ui() {
  const [currentWeather, setCurrentWeather] = useState("NL");

  const Underpseudoelement = document.getElementsByClassName(
    "Uipseudo-element"
  ) as HTMLCollectionOf<HTMLElement>;

  useEffect(() => {
    async function getWeather() {
      try {
        if (navigator.geolocation) {
          const position = await new Promise<GeolocationPosition>(
            (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            }
          );
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=5554fa749437431fa7a125354240802&q=${latitude},${longitude}&aqi=no`
          );
          const data = await response.json();
          setCurrentWeather(`${data.current.temp_c}°C`);
        } else {
          window.Error(
            "No location detected: weather releted functions may not work"
          );
          setCurrentWeather("NL");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setCurrentWeather("NL");
      }
    }

    getWeather();
  }, []);
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
        <Link to={"/"} id="HambergerMenu">
          <div id="HambergerContainer">
            <div className="Hamberger"></div>
            <div className="Hamberger"></div>
            <div className="Hamberger"></div>
          </div>
        </Link>
        <Link to="/">
          <h1 className="logo">Persistant</h1>
        </Link>
        <ul>
          <Link
            className="UIListItem"
            onPointerEnter={() => Underlinepseudoelement(0)}
            onPointerLeave={() => DeUnderlinepseudoelement(0)}
            to={"/focus"}
          >
            <h1>
              <span>Focus</span> <i className="fa fa-sun-o"></i>{" "}
              <div className="Uipseudo-element"></div>
            </h1>
          </Link>
          <Link
            className="UIListItem"
            onPointerEnter={() => Underlinepseudoelement(1)}
            onPointerLeave={() => DeUnderlinepseudoelement(1)}
            to="/todo"
          >
            {" "}
            <h1>
              <span>To-Do</span>{" "}
              <img src="./Todo.png" id="icon" alt="icon"></img>
              <div className="Uipseudo-element"></div>
            </h1>
          </Link>
          <Link
            className="UIListItem"
            onPointerEnter={() => Underlinepseudoelement(2)}
            onPointerLeave={() => DeUnderlinepseudoelement(2)}
            to="/expense-tracker"
          >
            <h1>
              <span>Expense-Tracker</span> <i className="fa fa-money"></i>
              <div className="Uipseudo-element"></div>
            </h1>
          </Link>
          <Link
            className="UIListItem"
            onPointerEnter={() => Underlinepseudoelement(3)}
            onPointerLeave={() => DeUnderlinepseudoelement(3)}
            to="/weather"
          >
            {currentWeather} <div className="Uipseudo-element"></div>
          </Link>
        </ul>
      </nav>
    </>
  );
}
