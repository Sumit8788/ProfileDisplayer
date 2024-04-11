import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css";

function Error() {
    return (
        <>
            <div id='Error-container'>
                <h1 id='eh1'>404 - Not Found</h1>
                <p id='ep'>The page you are looking for does not exist.</p>
                <Link to='/'>
                    <button id='error-btn'>Go to Home Page</button>
                </Link>
            </div>
        </>
    )
}

export default Error