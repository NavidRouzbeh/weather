import React from "react";
import WeatherDetail from "../WeatherDetails/WeatherDetail";


const WeatherInfo = ({cityWeather}) => {

    return(
    <section>
        <div className="city_name"> 
            { cityWeather.sys && (
            <div className="city_name">{cityWeather.name} <span className="city_country">({cityWeather.sys.country})</span></div>) 
            } 
            { cityWeather.weather && (
            <img className="city_weather-icon" src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt="Weather icon" />
            )}
        </div>

        { cityWeather.weather && (<p className="city_weather-desc"> {cityWeather.weather[0].description} </p>)} 

        { cityWeather.main && (
            <div> 
            <div className="city_temp">
                <p className="city_temp-headline"> {Math.round(cityWeather.main.temp)}º </p>
            </div>
            <p className="city_temp-span">دمایی که احساس میشود: {Math.round(cityWeather.main.feels_like)}º </p>
            </div>
        )}   

        <WeatherDetail cityWeather={cityWeather}/>
    </section>
    );
};

export default WeatherInfo;