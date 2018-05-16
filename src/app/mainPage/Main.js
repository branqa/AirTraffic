import React, { Component } from 'react';
import Error from '../errorPage/Error';
import Loading from './Loading';
import { dataService } from '../../services/dataService';
import FlightList from './FlightList'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: '',
            loadingPage: false,
            permDenied: false,
            posUnavailable: false,
            timeout: false,
            flights: [],
            errorMsg:''
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.sucess, this.error)
    }

    sucess = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            loadingPage: true
        })

        dataService.getFlights(this.state.latitude, this.state.longitude)
            .then(allFlights => {
                if (allFlights.error) {
                    this.setState({
                        errorMsg: allFlights.error
                    })
                } else {
                    localStorage.setItem('Allflights', JSON.stringify(allFlights))
                    this.setState({
                        flights: allFlights
                    })
                }
            }
            )
        this.interval = setInterval(() => {
            dataService.getFlights(this.state.latitude, this.state.longitude)
        }, 60000)
    }

    error = (error) => {
        if (error.code === error.PERMISSION_DENIED) {
            this.setState({
                loadingPage: true,
                permDenied: true
            })
        } else if (error.code === error.POSITION_UNAVAILABLE) {
            this.setState({
                loadingPage: true,
                posUnavailable: true
            })
        } else if (error.code === error.TIMEOUT) {
            this.setState({
                loadingPage: true,
                timeout: true
            })
        }
    }

    handleErrors = () => {
        if (this.state.permDenied) {
            return <Error />
        } else if (this.state.posUnavailable) {
            return (
                <div className="container-fluid error-page">
                    <div className="jumbotron error-jumbo">
                        <h2>Location information is unavailable.</h2>
                    </div>
                </div>
            )
        } else if (this.state.timeout) {
            return (
                <div className="container-fluid error-page">
                    <div className="jumbotron error-jumbo">
                        <h2>The request to get user location timed out.</h2>
                    </div>
                </div>
            )
        } else {
            const sortedFlights = (this.state.flights).sort((a, b) => b.altitude - a.altitude)
            return (
                <FlightList flights={sortedFlights} />
            )
        }
    }
errorFetch = ()=>{
    return (
        <div className="container-fluid error-page">
            <div className="jumbotron error-jumbo">
                <h2>{this.state.errorMsg}</h2>
            </div>
        </div>
    )
}

    render() {
        return (
            this.state.errorMsg ? this.errorFetch() :
            (this.state.loadingPage ? this.handleErrors() : <Loading />)
        )
    }

}
export default Main;