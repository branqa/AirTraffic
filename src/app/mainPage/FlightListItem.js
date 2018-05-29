import React from 'react';
import { Link } from "react-router-dom";
import airplanelogo from '../../images/airplane-logo.png';

const FlightListItem = (props) => {
    return (
        <Link to={`/flightinfo/${props.oneFlight.id}`} className="link-decoration">
            <li className="list-group-item list-group-item-action list-group-item-light">
                <div className="row">
                    <div className="col-2 col-sm-2">
                        <img src={airplanelogo} alt='airplane-logo' className={props.oneFlight.flightNumber.replace(/[^0-9]/g, '') % 2 === 0 ? "east" : "west"} />
                    </div>
                    <div className="col-5 col-sm-5 one-flight-list">{props.oneFlight.altitude}</div>
                    <div className="col-5 col-sm-5 one-flight-list">{props.oneFlight.flightCodeNumber}</div>
                </div>
            </li>
        </Link>
    )
}

export default FlightListItem;