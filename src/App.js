import React, {useState} from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import './App.scss';

function App() {

  const [cityWeather, setCityWeather] = useState([])
  const [location, setLocation] = useState('')

  return(
    <div className="App">
      
        <p className="page__info">نام شهر یا کشور را وارد کنید: </p>
        <SearchBar location={location} setLocation={setLocation} setCityWeather={setCityWeather}/>
        { cityWeather.length !== 0 && ( <WeatherInfo cityWeather={cityWeather} /> )}
    </div>
  );
};

export default App;
