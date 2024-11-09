import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Booking.css"
import airportData from './airports_in_ind.json';
import FlightResults from './FlightResults';

const TravelBookingInterface = () => {
  const [activeService, setActiveService] = useState('Flights');
  const [tripType, setTripType] = useState('oneWay');
  const [specialFare, setSpecialFare] = useState('regular');
  const [tabsize, settabsize] = useState(77);
 
  
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [fromInfo, setFromInfo] = useState('');
  const [toInfo, setToInfo] = useState('');

  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flightResults, setFlightResults] = useState(null);

  const services = [
    { icon: '✈️', label: 'Flights' },
    { icon: '🏨', label: 'Hotels' },
    { icon: '🏠', label: 'Homestays & Villas' },
    { icon: '🌴', label: 'Holiday Packages' },
    { icon: '🚂', label: 'Trains' },
    { icon: '🚌', label: 'Buses' },
    { icon: '🚕', label: 'Cabs' },
    // { icon: '💳', label: 'Forex Card & Currency' },
    // { icon: '🛡️', label: 'Travel Insurance' },
  ];

  const specialFares = [
    { id: 'regular', label: 'Regular', description: 'Regular fares' },
    { id: 'student', label: 'Student', description: 'Extra discounts/baggage' },
    { id: 'senior', label: 'Senior Citizen', description: 'up to ₹600 off' },
    { id: 'armed', label: 'Armed Forces', description: 'up to ₹600 off' },
    { id: 'doctor', label: 'Doctor and Nurses', description: 'up to ₹600 off' },
  ];

   // booking tab
   const activate=(num)=>{
    settabsize(num);
    if(num==='Homestays & Villas'){settabsize(45)}
    else if(num==='Holiday Packages'){settabsize(45)}
    else if(num==='Trains'){settabsize(45)}
    else if(num==='Buses'){settabsize(45)}
    else if(num==='Cabs'){settabsize(45)}
    else if(num==='Hotels'){settabsize(670);}
    else{settabsize(77)}

  }

  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async () => {
    const fromIATA = airportData[fromCity]?.["IATA Code"];
    const toIATA = airportData[toCity]?.["IATA Code"];
  
    if (!fromIATA || !toIATA || !departureDate) {
      alert("Please fill in all required fields");
      return;
    }
  
    try {
      const params = new URLSearchParams({
        engine: "google_flights",
        departure_id: fromIATA,
        arrival_id: toIATA,
        outbound_date: departureDate,
        currency: "INR",
        hl: "en"
      });
  
      if (tripType === 'roundtrip') {
        params.append('return_date', returnDate);
        params.append('type', '1');
      } else {
        params.append('type', '2');
      }
  
      const response = await fetch(`http://localhost:5001/api/flights?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
  
      setFlightResults(data);
      setSearchPerformed(true);
      console.log("Flight search results:", data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  useEffect(() => {
    if (flightResults) {
      console.log("Updated flight results:", flightResults);
    }
  }, [flightResults]);

  const updateAirportInfo = (input, setInfo) => {
    const selectedCity = input.split(' - ')[0];
    const airport = airportData[selectedCity];
    if (airport && airport["IATA Code"]) {
      setInfo(`${airport["Airport Name"]} (${airport["IATA Code"]})`);
    } else {
      setInfo('');
    }
  };

  const handleInputChange = (e, setCity, setInfo) => {
    const value = e.target.value.split(' - ')[0];
    setCity(value);
    updateAirportInfo(e.target.value, setInfo);
  };

  const renderFlightInterface = () => (
    <>
      <div className="trip-type-container">
  <div className="trip-type-options">
    {[
      { value: 'oneway', label: 'One Way' },
      { value: 'roundtrip', label: 'Round Trip' },
      { value: 'multicity', label: 'Multi City' }
    ].map((type) => (
      <label key={type.value} className="trip-type-label">
        <input
          type="radio"
          name="tripType"
          value={type.value}
          checked={tripType === type.value}
          onChange={(e) => setTripType(e.target.value)}
        />
        {type.label}
      </label>
    ))}
  </div>
  <p className="book-info">Book International and Domestic Flights</p>
</div>

      <div className="search-fields-container">
       
      <div className="search-field">
          <label htmlFor="from">From</label>
          <input 
            type="text" 
            id="from" 
            list="fromList" 
            placeholder="Enter city or airport"
            value={fromCity}
            onChange={(e) => handleInputChange(e, setFromCity, setFromInfo)}
          />
          {fromInfo && <label className='airport-info'>{fromInfo}</label>}
          <datalist id="fromList">
            {Object.entries(airportData).map(([city, airport]) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>
        <div className="search-field">
          <label htmlFor="to">To</label>
          <input 
            type="text" 
            id="to" 
            list="toList" 
            placeholder="Enter city or airport"
            value={toCity}
            onChange={(e) => handleInputChange(e, setToCity, setToInfo)}
          />
          {toInfo && <label className='airport-info'>{toInfo}</label>}
          <datalist id="toList">
            {Object.entries(airportData).map(([city, airport]) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>

        <div className="search-field">
  <label>Departure</label>
  <input
    type="date"
    value={departureDate}
    onChange={(e) => setDepartureDate(e.target.value)}
  />
</div>
        <div className="search-field">
  <label>Return</label>
  <input
    type="date"
    value={returnDate}
    onChange={(e) => setReturnDate(e.target.value)}
    disabled={tripType !== 'roundtrip'}
  />
</div>
      </div>

      <div className="special-fare-container">
        <p className="special-fare-title">Select a special fare</p>
        <div className="special-fare-options">
          {specialFares.map((fare) => (
            <label key={fare.id} className={`special-fare-label ${specialFare === fare.id ? 'active' : ''}`}>
              <input
                type="radio"
                name="specialFare"
                value={fare.id}
                checked={specialFare === fare.id}
                onChange={(e) => setSpecialFare(e.target.value)}
              />
              <div>
                <p className="fare-label">{fare.label}</p>
                <p className="fare-description">{fare.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );

//  hotel booking
const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [hotelResults, setHotelResults] = useState(null);

  const handleHotelSearch = async () => {
    if (!location || !checkInDate || !checkOutDate) {
      alert("Please fill in all required fields");
      return;
    }

    const params = new URLSearchParams({
      engine: "google_hotels",
      q: location,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      adults: guests.toString(),
      currency: "INR",
      gl: "in",
      hl: "en"
    });

    try {
      const response = await fetch(`http://localhost:5001/api/flights?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setHotelResults(data);
      console.log("Hotel search results:", data);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  const renderHotelInterface = () => {
    const totalResults = hotelResults?.properties?.length || 0;
    
    return (
      <div className="hotel-search-container">
        <div className="search-fields-container">
          <div className="search-field">
            <label htmlFor="location">Where</label>
            <input 
              type="text" 
              id="location" 
              placeholder="Enter a destination" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="checkIn">Check-in</label>
            <input 
              type="date" 
              id="checkIn"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="checkOut">Check-out</label>
            <input 
              type="date" 
              id="checkOut"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="guests">Guests</label>
            <input 
              type="number" 
              id="guests" 
              min="1" 
              placeholder="2 adults"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button className="search-button" onClick={handleHotelSearch}>Search</button>
        
        {hotelResults && (
          <div className="hotel-results">
            <h2>{location} Hotels • {totalResults} results found</h2>
            {hotelResults.properties && hotelResults.properties.map((hotel, index) => (
              <div key={index} className="hotel-card">
                {hotel.images && hotel.images.length > 0 && hotel.images[0].thumbnail && (
                  <img src={hotel.images[0].thumbnail} alt={hotel.name} className="hotel-image" />
                )}
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  {hotel.sponsored && <span className="sponsored-tag">Sponsored</span>}
                  <p>From {hotel.prices && hotel.prices.length > 0 ? hotel.prices[0].source : 'N/A'}</p>
                  <div className="hotel-rating">
                    <span className="rating">{hotel.overall_rating}</span>
                    <span className="review-count">({hotel.reviews} reviews)</span>
                  </div>
                  <p className="hotel-class">{hotel.extracted_hotel_class} stars</p>
                  <div className="hotel-amenities">
                    {hotel.amenities && hotel.amenities.slice(0, 6).map((amenity, i) => (
                      <span key={i} className="amenity">{amenity}</span>
                    ))}
                  </div>
                </div>
                <div className="hotel-price">
                  <h3>₹{hotel.rate_per_night?.extracted_lowest || 'N/A'}</h3>
                  <button className="view-offer-button">View Prices</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // train booking
  const renderTrainInterface = () => (
    <div className="search-fields-container">
      <div className="search-field">
        <label>From</label>
        <input type="text" placeholder="Enter city or station" />
      </div>
      <div className="search-field">
        <label>To</label>
        <input type="text" placeholder="Enter city or station" />
      </div>
      <div className="search-field">
        <label>Travel Date</label>
        <input type="date" />
      </div>
    </div>
  );

  const renderBusInterface = () => (
    <div className="search-fields-container">
      <div className="search-field">
        <label>From</label>
        <input type="text" placeholder="Enter city" />
      </div>
      <div className="search-field">
        <label>To</label>
        <input type="text" placeholder="Enter city" />
      </div>
      <div className="search-field">
        <label>Travel Date</label>
        <input type="date" />
      </div>
    </div>
  );

  const renderInterface = () => {
    switch (activeService) {
      case 'Flights':
        return renderFlightInterface();
      case 'Hotels':
      case 'Homestays & Villas':
        return renderHotelInterface();
      case 'Trains':
        return renderTrainInterface();
      case 'Buses':
        return renderBusInterface();
      default:
        return <p>Interface for {activeService} is not implemented yet.</p>;
    }
  };


  return (
    <div className="kohli">
    
    <div style={{height:`${tabsize}vh`}} className="travel-booking-container">
      <h1>Book With Tourify</h1>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.label}
            className={`service-item ${activeService === service.label ? 'active' : ''}`}
            onClick={() => {setActiveService(service.label);activate(service.label)}}
          >
            <span className="service-icon">{service.icon}</span>
            <span className="service-label">{service.label}</span>
          </div>
        ))}
      </div>
      
      {renderInterface()}

      <button className="search-button" onClick={handleSearch}>SEARCH</button>
    </div>
    {searchPerformed && (
        <div className="results-container">
          <FlightResults results={flightResults} />
        </div>
      )}
    </div>
  );
};


export default TravelBookingInterface;
