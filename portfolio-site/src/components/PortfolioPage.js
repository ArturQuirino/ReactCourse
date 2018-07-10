import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>PORTFOLIO</h1>
        <p>This is my Portfolio Page!</p>
        <Link to="/portfolio/1" activeClassName="is-active" > Portfolio 1</Link>
        <Link to="/portfolio/2" activeClassName="is-active" > Portfolio 2</Link>
    </div>
);

export default PortfolioPage;