import React, {useState} from 'react'
import './Home.css';

const Home = () => {

    const options = {weekday: 'long'}
    const date = new Date();
    let today = date.toLocaleDateString("en-US", options) + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    
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
    // const weatherdescription = weather.weather[0].description;

    // if (weatherdescription === "mist") {
    //     console.log('mist')
    // } else if (weatherdescription === "scatteredclouds") {
    //     console.log('scatteredclouds')
    // } else if (weatherdescription === "brokenclouds") {
    //     console.log('brokenclouds')
    // } else if (weatherdescription === "showerrain") {
    //     console.log('showerrain')
    // } else if (weatherdescription === "rain") {
    //     console.log('rain')
    // } else if (weatherdescription === "thunderstorm") {
    //     console.log('thunderstorm')
    // } else if (weatherdescription === "snow") {
    //     console.log('snow')
    // } else if (weatherdescription === "fewclouds") {
    //     console.log('fewclouds')
    // }  else {
    //     console.log('weather')
    // }

    // switch (weatherdescription) {
    //     case 'weather mist':
    //         console.log('mist')
            
    //         break;
        
    //     case 'weather scatteredclouds':
    //         console.log('scatteredclouds')
    //         break;

    //     case 'weather brokenclouds':
    //         console.log('brokenclouds')
    //         break;

    //     case 'weather showerrain':
    //         console.log('showerrain')
    //         break;

    //     case 'weather rain':
    //         console.log('rain')
    //         break;

    //     case 'weather thunderstorm':
    //         console.log('thunderstorm')
    //         break;

    //     case 'weather snow':
    //         console.log('snow')
    //         break;

    //     case 'weather fewclouds':
    //         console.log('fewclouds')
    //         break;
    
    //     default:
    //         console.log('weather')
    //         break;
    // }
    return (

        <div className={
            (typeof weather.main != "undefined") 
                ? ((weather.weather[0].description) 
                    ? 'weather mist' || 'weather scatteredclouds' || 'weather brokenclouds' || 'weather showerrain' || 'weather rain' || 'weather thunderstorm' || 'weather snow' || 'weather fewclouds'
                    : 'weather')
                : 'weather'}>
            <div className="header">{today}</div>
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
                        <div className="todaysdate"> 
                            <div>{today}</div>
                        </div>
                        <div className="location">
                            <div>{weather.name}, {weather.sys.country}</div>
                        </div>
                        <div className="temperature">
                            <div>{Math.round(weather.main.temp)}??C</div>
                        </div>
                        <div className="icon">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icon"/>
                        </div>
                        <div className="description">
                            <div>{weather.weather[0].description}</div>
                        </div>
                        {/* {nameCity}<br></br>
                        {nameCountry}<br></br>
                        {Math.round(temperature)}??C<br></br>
                        {description}<br></br> */}
                    </div>
                ) : ('')}
            </main>
        </div>

    )
}

export default Home;