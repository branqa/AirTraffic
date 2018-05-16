import React from 'react';
import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <div className="jumbotron welcome">
            <h1 className="display-4 main-heading">This is one awesome air traffic app</h1>
            <hr className="my-4" />
            <p className="lead">If you want to see all the airplanes that are flying over your current location you must agree to share your location with us</p>
            <div className="lead">
                <Link to="/main"> <div className="btn btn-primary btn-lg" role="button">I agree</div></Link>
                <Link to="/error"><div className="btn btn-primary btn-lg" role="button">I don't agree</div></Link>
            </div>
        </div>
    )
}

export default Welcome;