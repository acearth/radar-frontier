import React from 'react';

const FlightList = ({flights}) => {
    return (
        <ul>
            {flights.map(flight => (
                <li key={flight.date}>
                    Date: {flight.date}, Price: {flight.price}, Departure: {flight.departure}, Arrival: {flight.arrival}
                    <a href={flight.listMobileLink} target="_blank" rel="noopener noreferrer">Book</a>
                </li>
            ))}
        </ul>
    );
};

export default FlightList;
