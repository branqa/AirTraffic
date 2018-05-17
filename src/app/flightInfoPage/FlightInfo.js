import React from 'react';
import { Link } from "react-router-dom";

const FlightInfo = (props) => {
    const flightList = JSON.parse(localStorage.getItem('Allflights'));
    let oneFlight = (flightList.filter((flight) => props.match.params.id === flight.id.toString()))[0]
    let logoUrl = oneFlight.logo.replace(/\s|[0-9]/g, '').toLowerCase() + '.com';
    let imageSrc = `https://logo.clearbit.com/${logoUrl}`;

    return (

        <div className="jumbotron" className=" flights-back">
            <div className="container-fluid  main-list">
                <div className="card">
                    <h4 className="card-title details-heading">Details about flight</h4>
                    <div className="row details-info">
                        <div className="col-lg-5">
                            <div className="card-img">
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card-block">
                                <div className="card-text"><h6> Model:</h6>
                                    <h5>{oneFlight.model}</h5><hr />
                                    <div><h6>Route: </h6><h5>{oneFlight.originAirport}-{oneFlight.destination}</h5></div>
                                </div>
                                <hr />
                                <h6> Company Logo:</h6>
                                <img src={imageSrc} alt="company-logo" className="company-logo" />
                                <hr />
                                <div className="right-align">
                                    <Link to="/main/prevlist"><div className="btn btn-primary btn-lg">Back to current list</div></Link>
                                    <Link to="/main"><div className="btn btn-primary btn-lg">New list</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FlightInfo;