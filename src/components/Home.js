import React, {useState} from 'react'

const Home = () => {

     const [input, setInput] = useState(" ");
    
    async function weatherInfo() {
        try {
            const data = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            const weatherData = await data.json();
            console.log(weatherData);
            console.log(input);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <input  className="input" type="text" name="input" placeholder="Which city / country" value={input} onChange={(e) => setInput(e.target.value)}/><br></br>
            <button className="submit" onClick={weatherInfo}>Submit</button>
        </div>
    )
}

export default Home;