class Flight {
    constructor(flight) {
        this.id = flight.Id;
        this.altitude = flight.Alt;
        this.flightNumber = flight.Call || '';
        this.flightCodeNumber = flight.CNum || 'No code number';
        this.model = flight.Mdl;
        this.destination = flight.To;
        this.originAirport = flight.From;
        this.logo = flight.Op || ''

    }
}

export default Flight;