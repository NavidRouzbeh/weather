import axios from 'axios';
import React from 'react';

const SearchBar = ({location, setLocation , setCityWeather}) => {

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=895284fb2d2c50a520ea537456963d9c&lang=fa&units=metric`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(api).then((response) => {
                setCityWeather(response.data)
            })
            setLocation('')
        }
    }

    return(

        <div className="search">
            <input value={location} onChange={event => setLocation(event.target.value)} onKeyDown={searchLocation} type="text" />
        </div>

    );
};

export default SearchBar;