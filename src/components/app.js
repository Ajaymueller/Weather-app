
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastSummary from "./forecast-summary";
import { render } from "react-dom";

const sayHello = () => {
  console.log("hello");
}

const App = (props) => (
  <div>
 <LocationDetails
    city={props.location.city}
    country={props.location.country}
  />
  <button onClick={sayHello}>Hello World</button>

  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
