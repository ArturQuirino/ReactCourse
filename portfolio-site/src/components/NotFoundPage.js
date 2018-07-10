import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>NOT FOUND</h1>
        404 - <Link to="/">Go home!</Link>
    </div>
);

export default NotFoundPage;