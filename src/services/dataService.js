import Flight from '../entities/Flight'

class DataService {
    getFlights = (lat, long) => {
        return fetch(`http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${lat}&lng=${long}&fDstL=0&fDstU=100`, {
            method: 'GET'
        })
            .then((data) => {
                if (data.status !== 200) {
                    var error = new Error(data.statusText);
                    throw error
                }
                return data;
            })
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then(response => response.acList)
            .then((flights) => flights.map((flight) => new Flight(flight)))
            .catch((error) => {
                console.log(error);
                return { error: error.toString() }
            })

    }

}

export const dataService = new DataService();