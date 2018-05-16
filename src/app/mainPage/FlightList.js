import React from 'react';
import FlightListItem from './FlightListItem';
import compass from '../../images/compass.png';

const FlightList = (props) => {
    return (
        <div className="container-fluid" className="flights-back">
            <div className="container main-list">
                <ul className="list-group list-group-item-action">
                    <li className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-2 "><img src={compass} alt="compass" className="compas-logo" /></div>
                            <div className="col-5  list-info">Altitude</div>
                            <div className="col-5 col-sm-5 list-info">Flight Code Number</div>
                        </div>
                    </li>
                    {props.flights.map((flight) => {
                        return (
                            <FlightListItem oneFlight={flight} key={flight.id} />

                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FlightList;