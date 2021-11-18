import React, {useState} from 'react'

const Home = () => {

     const [city, setCity] = useState("");
    //  const [temperature, setTemperature] = useState("");
    const [weather, setWeather] = useState([{}]);
    
    async function weatherInfo() {
        try {
            const data = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            const weatherData = await data.json();
            setWeather(weatherData)
            console.log(weatherData.city.name)
            console.log(weatherData.city.country)
            console.log(weatherData.list[0].main.temp)
            console.log(weatherData.list[0].weather[0].description)
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(weather)
    const nameCity = weather.city.name;
    const nameCountry = weather.city.country;
    const temperature = weather.list[0].main.temp;
    const description = weather.list[0].weather[0].description;
    return (

        <div>
            <input  
                className="input" 
                type="text" 
                name="input" 
                placeholder="Which city / country" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                /><br></br>
                <button className="submit" onClick={weatherInfo}>Submit</button>
            <div onClick={weatherInfo}>
                {nameCity}<br></br>
                {nameCountry}<br></br>
                {Math.round(temperature)}°C<br></br>
                {description}<br></br>
            </div>
        </div>

    )
}

export default Home;