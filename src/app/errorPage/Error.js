import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container-fluid error-page">
            <div className="jumbotron error-jumbo">
                <h2>Sorry, you must allow usage of geolocation to use the app</h2>
                <Link to="/"> <div className="btn btn-secondary btn-lg" role="button">Go back</div></Link>
            </div>
        </div>
    )
}

export default Error;