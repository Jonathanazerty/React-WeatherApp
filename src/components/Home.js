import React, {useState} from 'react'
import './Home.css';

const Home = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);
    
    const weatherInfo = (e) => {
        if(e.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setCity('');
                    console.log(result)
                })
        }
    }
    // const weatherInfo = async (e) => {
    //     // e.preventDefault();
        
    //     try {
    //         const data = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    //         const weatherData = await data.json();
    //         setWeather(weatherData)
    //         setCity("")
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    // const nameCity = weather.city.name;
    // const nameCountry = weather.city.country;
    // const temperature = weather.list[0].main.temp;
    // const description = weather.list[0].weather[0].description;
    return (

        <div className={
            (typeof weather.main != "undefined") 
                ? ((weather.main.temp > 15) 
                    ? 'weather warm'
                    : 'weather')
                : 'weather'}>
            <main>
                <input  
                    className="input" 
                    type="text" 
                    name="input" 
                    placeholder="Which city / country" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={weatherInfo}
                /><br></br>
                {/* <button className="submit" onClick={weatherInfo}>Submit</button> */}
                {(typeof weather.main != "undefined") ? (
                    <div className="weather-info">
                        <div className="location">
                            <div>{weather.name}, {weather.sys.country}</div>
                        </div>
                        <div className="icon">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icon"/>
                        </div>
                        <div className="temperature">
                            <div>{Math.round(weather.main.temp)}°C</div>
                        </div>
                        <div className="description">
                            <div>{weather.weather[0].main}</div>
                        </div>
                        {/* {nameCity}<br></br>
                        {nameCountry}<br></br>
                        {Math.round(temperature)}°C<br></br>
                        {description}<br></br> */}
                    </div>
                ) : ('')}
            </main>
        </div>

    )
}

export default Home;