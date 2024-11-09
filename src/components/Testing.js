import React from 'react';
import "./VirtualTour.css";
import { stateData } from './Testcontent'; // We'll create this file to hold all state data
import hp from "./image/manali.jpg"
function VirtualTour({ currentState }) {
  const content = stateData[currentState];

  if (!content) {
    return <div>No data available for the selected state.</div>;
  }

  return (
    <>
      <header style={{ backgroundImage: `url(${content.bgimage})` }} className="hero">
        <div className="hero-content">
          <h1 className='chai'>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <a  href="#joy" className="btun">{content.name}
          </a>
        </div>
      </header>

      <main className="tour-sections">
        <div className="container">
          <h2>{content.mainTitle}</h2>
          <div id='joy' className="tour-grid">
            <div className="tour-card">
              <img src={content.icons.destination} alt="" />
              <h3>Destinations</h3>
              <div className="destination_content">
                {content.destinations.map((destination, index) => (
                  <div key={index} className={`vt_center_page${index + 1}`}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="vt_leftpart">
                          <h1>{destination.title}</h1>
                          <p>{destination.description}</p>
                        </div>
                        <img src={destination.image} alt={destination.title} />
                      </>
                    ) : (
                      <>
                        <img src={destination.image} alt={destination.title} />
                        <div className="vt_leftpart">
                          <h1>{destination.title}</h1>
                          <p>{destination.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-card">
              <img src={content.icons.cuisine} alt="" />
              <h3>Local Cuisine</h3>
              <div className="destination_content">
                {content.cuisine.map((dish, index) => (
                  <div key={index} className={`vt_center_page${index + 1}`}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="vt_leftpart">
                          <h1>{dish.title}</h1>
                          <p>{dish.description}</p>
                        </div>
                        <img src={dish.image} alt={dish.title} />
                      </>
                    ) : (
                      <>
                        <img src={dish.image} alt={dish.title} />
                        <div className="vt_leftpart">
                          <h1>{dish.title}</h1>
                          <p>{dish.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-card">
              <img src={content.icons.events} alt="" />
              <h3>Events & Festivals</h3>
              <div className="destination_content">
                {content.festivals.map((festival, index) => (
                  <div key={index} className={`vt_center_page${index + 1}`}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="vt_leftpart">
                          <h1>{festival.title}</h1>
                          <p>{festival.description}</p>
                        </div>
                        <img src={festival.image} alt={festival.title} />
                      </>
                    ) : (
                      <>
                        <img src={festival.image} alt={festival.title} />
                        <div className="vt_leftpart">
                          <h1>{festival.title}</h1>
                          <p>{festival.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="tour-card">
              <img src={content.icons.culture} alt="" />
              <h3>Cultural Immersion</h3>
              <div className="destination_content">
                <div className="vt_center_page1">
                  <div className="vt_leftpart">
                    <h1>{content.culture.languages.title}</h1>
                    <p className='lang'>{content.culture.languages.description}</p>
                  </div>
                  <img className='gol' src={content.culture.languages.image} alt="Languages" />
                </div>
                <h2 style={{textAlign:'center',color:'#3498db'}}>Popular Attires</h2>
                <div className="attire">
                  {content.culture.attires.map((attire, index) => (
                    <div key={index} className={`at${index + 1}`}>
                      {index % 2 === 0 ? (
                        <>
                          <img src={attire.image} alt={attire.title} />
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{attire.title}</h2>
                            {attire.description}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{attire.title}</h2>
                            {attire.description}
                          </p>
                          <img src={attire.image} alt={attire.title} />
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <h2 style={{textAlign:'center',color:'#3498db',margin:'2rem'}}>Cultural Practices & Traditions</h2>
                <div className="practices_traditions">
                  {content.culture.traditions.map((tradition, index) => (
                    <div key={index} className={`at${index + 1}`}>
                      {index % 2 === 0 ? (
                        <>
                          <img src={tradition.image} alt={tradition.title} />
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{tradition.title}</h2>
                            {tradition.description}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{tradition.title}</h2>
                            {tradition.description}
                          </p>
                          <img src={tradition.image} alt={tradition.title} />
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <h2 style={{textAlign:'center',color:'#3498db',margin:'2rem'}}>Community Life and Social Structure</h2>
                <div className="practices_traditions">
                  {content.culture.community.map((item, index) => (
                    <div key={index} className={`at${index + 1}`}>
                      {index % 2 === 0 ? (
                        <>
                          <img src={item.image} alt={item.title} />
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{item.title}</h2>
                            {item.description}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <h2 style={{marginTop:'.5rem'}}>{item.title}</h2>
                            {item.description}
                          </p>
                          <img src={item.image} alt={item.title} />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="tour-card">
              <img src={content.icons.accommodation} alt="" />
              <h3>{content.accommodations.title}</h3>
              <p>{content.accommodations.description}</p>
            </div> */}
          </div>
        </div>
      </main>

      {/* <section className="cta">
        <div className="container">
          <h2>{content.cta.title}</h2>
          <p>{content.cta.description}</p>
          <a href="#" className="btn">{content.cta.buttonText}</a>
        </div>
      </section> */}
    </>
  )
}

export default VirtualTour