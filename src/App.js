import React, {useState} from 'react';
import SearchForm from './SearchForm';
import FlightList from './FlightList';

function App() {
    const [airports, setAirports] = useState([]);
    const [flightResults, setFlightResults] = useState([]);
    const [searchParams, setSearchParams] = useState({
        departureCity: '',
        arrivalCity: '',
        startDate: '',
        endDate: '',
        radius: 300
    });

    React.useEffect(() => {
        fetch('https://api.ticketradar.online/airports')
            .then(response => response.json())
            .then(data => setAirports(data.data));
    }, []);

    const handleSearch = () => {
        console.log("GOT!", searchParams);
        const url = `https://api.ticketradar.online/radar?departures=${searchParams.departureCity}&arrivals=${searchParams.arrivalCity}&departure_start_date=${searchParams.startDate}&departure_end_date=${searchParams.endDate}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setFlightResults(data));
    };

    return (
        <div className="App">
            <SearchForm onSearch={handleSearch} searchParams={searchParams} setSearchParams={setSearchParams}/>
            <FlightList flights={flightResults}/>
        </div>
    );
}

export default App;
