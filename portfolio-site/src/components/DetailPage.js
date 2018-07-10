import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = (props) => (
    <div>
        <h3>Details</h3>
        <p>This is my portfolio {props.match.params.id}</p>
    </div>
);

export default Details;