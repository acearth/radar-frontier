import React from 'react';

const SearchForm = ({onSearch, searchParams, setSearchParams}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch();
        }}>
            <input
                type="text"
                placeholder="Departure city"
                value={searchParams.departureCity}
                onChange={(e) => setSearchParams({...searchParams, departureCity: e.target.value})}
            />
            <input
                type="text"
                placeholder="Arrival city"
                value={searchParams.arrivalCity}
                onChange={(e) => setSearchParams({...searchParams, arrivalCity: e.target.value})}
            />
            <input
                type="date"
                placeholder="Start Date"
                value={searchParams.startDate}
                onChange={(e) => setSearchParams({...searchParams, startDate: e.target.value})}
            />
            <input
                type="date"
                placeholder="End Date"
                value={searchParams.endDate}
                onChange={(e) => setSearchParams({...searchParams, endDate: e.target.value})}
            />
            <button type="submit">Search Flights</button>
        </form>
    );
};

export default SearchForm;
