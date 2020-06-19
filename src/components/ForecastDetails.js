import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

const ForecastDetails = (props) => {
    return (
        <div className='forecast-details'>
        <div>
        {moment(props.forecast.date).format('ddd Do MMM')}
        </div>
        <div>
        {props.forecast.temperature.max}
        </div>
        <div>
            {props.forecast.temperature.min}
        </div>
        <div>
            {props.forecast.humidity}
        </div>
        <div>
            {props.forecast.wind.speed}
        </div>
        <div>
            {props.forecast.wind.direction}
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