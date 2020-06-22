import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import '../styles/app.css';
import ForecastDetails from './ForecastDetails';
import SearchForm from './SearchForm';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({
    city: " ", 
    country: " ",
  })

  useEffect(() => {
    axios
      .get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
      });
  }, []);

  const searchForCity = (city) => {
    const query = city
    !query?
    alert('Please enter a city name!')
    : axios
    .get('https://mcr-codes-weather.herokuapp.com/forecast?city=' + query)
    .then((res) => {
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    }).catch((error) => {
      alert('City could not be found!')
    })
  }

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelector = date => {
    selectedDate === date ? 
      setSelectedDate(0)
      :setSelectedDate(date)
  }

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm searchCity={searchForCity}/>
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelector}
      />
      <br />
      {
        selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
      }
    </div>
  )
}

export default App;
