import Flight from '../entities/Flight'

class DataService {
    getFlights = (lat, long) => {
        return fetch(`http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${lat}&lng=${long}&fDstL=0&fDstU=100`, {
            method: 'GET'
        })
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then(response => response.acList)
            .then((flights) => flights.map((flight) => new Flight(flight)))

    }

}

export const dataService = new DataService();