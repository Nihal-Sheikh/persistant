import { useEffect } from 'react';
export default function WeatherPage() {
    useEffect(() => {
        async function getWeather() {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;                        
                        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5554fa749437431fa7a125354240802&q=${latitude},${longitude}&aqi=no`);
                        const data = await response.json();
                        console.log(data);
                    }, () => {
                    });
                } else {
                    window.Error('No location detected: weather releted functions may not work');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    
        getWeather();
    }, []);

    return <section>
        <h1 className="header">Weather</h1>
        <p className="description">Get to know the current weather with Persistant and be prepared for any surprises from the sky.</p>
    </section>    
}