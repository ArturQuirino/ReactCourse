import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>PORTFOLIO</h1>
        <p>This is my Portfolio Page!</p>
        <NavLink to="/portfolio/1" activeClassName="is-active" > Portfolio 1</NavLink>
        <NavLink to="/portfolio/2" activeClassName="is-active" > Portfolio 2</NavLink>
    </div>
);

export default PortfolioPage;