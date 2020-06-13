import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) =>  {
    
   return (
   <div>
       <div>
       <span className = "date">`${props.date}`</span>
       </div>
        <div>
        <span className = "temperature">`${props.temperature}`</span>
        </div>
        <div>
        <span className = "description">`${props.description}`</span>
        </div>
        <div>
        <span className = "icon">`${props.icon}</span>
        </div>
    </div>
   );
    }

/*ForecastSummary.propTypes = {
    date: PropTypes.string.isRequired, 
    temperature: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
}*/

export default ForecastSummary;