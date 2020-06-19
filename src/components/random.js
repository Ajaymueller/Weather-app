import React from "react";
import PropTypes from "prop-types";

const Random = () => {
    const tasks = ['walk the dog', 'cook the dinner', 'code something', 'watch a movie'];

    return (
        <div>
            <h2>Random Tasks</h2>
            <ul>
                {tasks.map(task => 
                    <li>{task} </li>
                    )}
            </ul>
        </div>
    )
}

export default Random;