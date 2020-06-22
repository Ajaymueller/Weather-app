import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from 'react-icons-weather';
import moment from 'moment'
import '../styles/forecast-summary.css';

const ForecastSummary = (props) =>  {
    
   return (
   <div className="forecast-summary">
       <div>
       <span className = "date" data-testid="date-id">{moment(props.date).format('ddd Do MMM')}</span>
       </div>
       <div className = "icon" data-testid="icon-id">
          <WeatherIcon name="owm" iconId={props.icon} />
          </div>
        <div>
        <span className = "temperature" data-testid="temperature-id">{props.temperature}</span>
        </div>
        <div>
        <span className = "description" data-testid="description-id">{props.description}</span>
        </div>
        <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
   );
    }

     ForecastSummary.propTypes = {
        forecasts: PropTypes.shape({
          date: PropTypes.number.isRequired,
          temperature: PropTypes.object.isRequired,
          description: PropTypes.string.isRequired,
          icon: PropTypes.object.isRequired,
        }),
      };

export default ForecastSummary;