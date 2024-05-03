import { useEffect, useState } from "react";
interface WeatherData {
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    is_day: number;
    precip_mm: number;
    wind_kph: number;
    wind_dir: string;
    condition: {
      text: string;
      code: number;
    };
  };
}
export default function WeatherPage() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  useEffect(() => {
    async function getWeather() {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=5554fa749437431fa7a125354240802&q=${latitude},${longitude}&aqi=no`
              );
              const data = await response.json();
              setCurrentWeather(data);
              console.log(data);
            },
            () => {}
          );
        } else {
          window.Error(
            "No location detected: weather releted functions may not work"
          );
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    getWeather();
  }, []);

  return (
    <section>
      <h1 className="header">Explore Weather with Persistant</h1>
      <p className="description">
        Stay informed with Persistant's comprehensive weather updates, ensuring
        you're prepared for any atmospheric surprises. Our reliable forecasts
        provide detailed insights into temperature, precipitation, and more,
        allowing you to plan your day with confidence. Count on Persistant to
        keep you ahead of the weather curve and ready for whatever nature brings
        your way.
      </p>
      <figure className="weather">
        <figure id="humidity">
          <div>
            <h1 className="header tempsub">Humidity: </h1>
            <h2 className="TemperatureHeaders">
              {currentWeather?.current?.humidity}%
            </h2>
            <h1 className="header tempsub">Wind Direction: </h1>
            <h2 className="TemperatureHeaders">
              {currentWeather?.current?.wind_dir}
            </h2>
          </div>
        </figure>
        <figure id="weatherIconTemperature">
          <div>
            <h1 className="header tempsub">Temperature: </h1>
            <h2 className="TemperatureHeaders">
              {currentWeather?.current?.temp_c}°C
            </h2>
          </div>
          <div>
            <h1 className="header tempsub">Feels Like: </h1>
            <h2 className="TemperatureHeaders">
              {currentWeather?.current?.feelslike_c}°C
            </h2>
          </div>
        </figure>
        <figure id="Precipitation">
          <div>
            <h1 className="header tempsub">Average rainfall: </h1>
            <h2 className="TemperatureHeaders">
              {currentWeather?.current?.precip_mm}mm
            </h2>
            <h1 className="header tempsub">Wind Speed: </h1>
            <h2>{currentWeather?.current?.wind_kph}</h2>
          </div>
        </figure>
      </figure>
    </section>
  );
}
