import React from 'react'

const FlightResults = ({ results }) => {
  if (!results || results.best_flights.length === 0) {
    return <p>No flights found.</p>;
  }

  return (
    <>
    
    <div className="flight-results">
      <h2 style={{textAlign:'center'}}>Popular Flights</h2>
      {results.best_flights.map((flight, index) => (
        <div key={index} className="flight-card">
          <div className="flight-header">
            <img src={flight.airline_logo} alt="Airline Logo" className="airline-logo" />
            <span  className="flight-type">{flight.type}</span>
          </div>
          {flight.flights.map((segment, segIndex) => (
            <div key={segIndex} className="flight-segment">
              <div className="flight-details">
                <div className="departure">
                  <p className="time">{segment.departure_airport.time}</p>
                  <p className="airport">{segment.departure_airport.id}</p>
                </div>
                <div className="flight-duration">
                  <p>{segment.duration} min</p>
                  <hr />
                  <p>{segment.airline}</p>
                </div>
                <div className="arrival">
                  <p className="time">{segment.arrival_airport.time}</p>
                  <p className="airport">{segment.arrival_airport.id}</p>
                </div>
              </div>
              <div className="flight-info">
                <p>Flight: {segment.flight_number}</p>
                <p>Aircraft: {segment.airplane}</p>
              </div>
            </div>
          ))}
          {flight.layovers && flight.layovers.length > 0 && (
            <div className="layovers">
              <p>Layovers:</p>
              {flight.layovers.map((layover, layoverIndex) => (
                <p key={layoverIndex}>{layover.duration} min at {layover.name} ({layover.id})</p>
              ))}
            </div>
          )}
          <div className="flight-footer">
            <div className="carbon-emissions">
              <p>Carbon Emissions: {flight.carbon_emissions.this_flight / 1000} kg</p>
              <p>Compared to average: {flight.carbon_emissions.difference_percent}%</p>
            </div>
            <div className="flight-price">
              <p className="price">₹{flight.price}</p>
              <button className="view-details">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="flight-results">
      <h2 style={{textAlign:'center'}}>Flights</h2>
      {results.other_flights.map((flight, index) => (
        <div key={index} className="flight-card">
          <div className="flight-header">
            <img src={flight.airline_logo} alt="Airline Logo" className="airline-logo" />
            <span  className="flight-type">{flight.type}</span>
          </div>
          {flight.flights.map((segment, segIndex) => (
            <div key={segIndex} className="flight-segment">
              <div className="flight-details">
                <div className="departure">
                  <p className="time">{segment.departure_airport.time}</p>
                  <p className="airport">{segment.departure_airport.id}</p>
                </div>
                <div className="flight-duration">
                  <p>{segment.duration} min</p>
                  <hr />
                  <p>{segment.airline}</p>
                </div>
                <div className="arrival">
                  <p className="time">{segment.arrival_airport.time}</p>
                  <p className="airport">{segment.arrival_airport.id}</p>
                </div>
              </div>
              <div className="flight-info">
                <p>Flight: {segment.flight_number}</p>
                <p>Aircraft: {segment.airplane}</p>
              </div>
            </div>
          ))}
          {flight.layovers && flight.layovers.length > 0 && (
            <div className="layovers">
              <p>Layovers:</p>
              {flight.layovers.map((layover, layoverIndex) => (
                <p key={layoverIndex}>{layover.duration} min at {layover.name} ({layover.id})</p>
              ))}
            </div>
          )}
          <div className="flight-footer">
            <div className="carbon-emissions">
              <p>Carbon Emissions: {flight.carbon_emissions.this_flight / 1000} kg</p>
              <p>Compared to average: {flight.carbon_emissions.difference_percent}%</p>
            </div>
            <div className="flight-price">
              <p className="price">₹{flight.price}</p>
              <button className="view-details">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FlightResults