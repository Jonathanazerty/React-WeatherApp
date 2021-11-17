import React from 'react'

const Home = () => {
    async function weatherInfo() {
        try {
            const data = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            const weatherData = await data.json();
            console.log(weatherData);
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <div>
                <h1>
                    Weather app
                    <button onClick={weatherInfo}>Submit</button>
                </h1>
            </div>
        </div>
    )
}

export default Home;