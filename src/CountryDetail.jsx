
import {useEffect, useState} from 'react'
import axios from 'axios'

const CountryDetail = ({country}) => {
    const [weather, setWeather] = useState(null)
    const capital = country.capital?.[0]
    const api_key = import.meta.env.VITE_WEATHER_KEY
console.log(api_key);

    useEffect(() => {
        if (!capital) return
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
        axios.get(url).then(res => setWeather(res.data))
    }, [capital, api_key])
  

    return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital?.[0]}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
            {Object.values(country.languages || {}).map((lang, i) => (
                <li key={i}>{lang}</li>
            ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
         {weather && (
        <>
          <h3>Weather in {capital}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          <p>Wind: {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}


export default CountryDetail