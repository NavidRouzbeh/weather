import axios from "axios";
import React , { useState , useEffect } from "react";
import './WeatherDetail.scss';

const WeatherDetail = ({cityWeather}) => {

    const [cityForecast , setCityForcast] = useState ([]);

    const fetchForcast = async () => {
        const{data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&exclude=hourly,minutely,current&appid=895284fb2d2c50a520ea537456963d9c&lang=fa&units=metric`);
        setCityForcast(data);
    }

    useEffect(() => {
        fetchForcast()
    },[cityWeather]);

    return (
    <section className="forecast">
        <p>پیش بینی آب و هوا در هفته:</p>
        <div className="forcast_page">
            { cityForecast.daily && cityForecast.daily.map((item) => (
            <div key={item.dt} className="forcast_page--item">
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather icon" />
                <div className="forcast_page--detail">
                <p>{Math.round(item.temp.min)}º</p>
                <p>{Math.round(item.temp.max)}º</p>
                </div>
            </div>
            )) }
        </div>
    </section>
    );
};

export default WeatherDetail;