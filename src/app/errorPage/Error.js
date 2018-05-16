import React from 'react';
import { Link } from "react-router-dom";
import crash from '../../images/airplane-crash.jpg';

const Error = () => {
    return (
        <div className="container-fluid error-page">
            <img src={crash} className="crash" alt="crash"/>
            <div className="jumbotron">
                <h2>Sorry, you must allow usage of geolocation to use the app</h2>
                <Link to="/"> <div className="btn btn-primary btn-lg" role="button">Go back</div></Link>
            </div>
        </div>
    )
}

export default Error;