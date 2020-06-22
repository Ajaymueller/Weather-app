import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = (props) => {
    return (
        <div className='forecast-details'>
        <div>
        {moment(props.forecast.date).format('ddd Do MMM')}
        </div>
        <div className="max-temp">
        Max Temperature: {props.forecast.temperature.max}°c
        </div>
        <div className="min-temp">
        Min Temperature: {props.forecast.temperature.min}°c
        </div>
        <div className="humidity">
        Humidity: {props.forecast.humidity}%
        </div>
        <div className="wind-speed">
        Wind Speed: {props.forecast.wind.speed}mph
        </div>
        <div className="wind-direction">
        Wind direction: {props.forecast.wind.direction.toUpperCase()}
        </div>

    </div>
    )
}

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
      date: PropTypes.number.isRequired,
      temperature: PropTypes.object.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.object.isRequired,
    }),
  };

export default ForecastDetails;