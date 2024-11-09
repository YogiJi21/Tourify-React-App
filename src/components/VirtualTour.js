import React, { useRef } from 'react';
import "./VirtualTour.css";
import loc from "./image/icons/icons8-address-100.png"
import food from "./image/icons/icons8-restaurant-96.png"
import bed from "./image/icons/icons8-bed-96.png"
import compass from "./image/icons/icons8-compass-96.png"
import calender from "./image/icons/icons8-calendar-96.png"
import vt_hp_1 from "./image/virtualTour/himachal/vt_hp_1.jpg"
import vt_hp_2 from "./image/virtualTour/himachal/vt_hp_2.jpg"
import vt_hp_3 from "./image/virtualTour/himachal/vt_hp_3.jpg"
import vt_hp_4 from "./image/virtualTour/himachal/vt_hp_4.jpg"
import babru from "./image/virtualTour/himachal/babru.jpg"
import dham from "./image/virtualTour/himachal/Dham-1.jpg"
import troutfish from "./image/virtualTour/himachal/kullu_trout_fish.png"
import mittha from "./image/virtualTour/himachal/mittha.png"
import siddu from "./image/virtualTour/himachal/siddu.jpg"
import losar from "./image/virtualTour/himachal/Losar-Festival-Ladakh.png"
import hpshivratri from "./image/virtualTour/himachal/Shivratri-Jaleb-Mand-Shivratri-Insta-Himachal-1.jpeg"
import halda from "./image/virtualTour/himachal/halda-festival4.jpg"
import kulludushera from "./image/virtualTour/himachal/kullu_dussehra_main_procession.jpg.png"
import indilanguage from "./image/virtualTour/indi_language.png"
import hp_shawl from "./image/virtualTour/himachal/kullu-shawls-500x500.png"
import hp_topi from "./image/virtualTour/himachal/hp_topi.png"
import hp_traditional from "./image/virtualTour/himachal/hp_traditional dress.jpg"
import hp_gagra from "./image/virtualTour/himachal/hp_gagra.jpg"
import hp_nati from "./image/virtualTour/himachal/Kinnauri_Nati_dance.jpg"
import hp_temple from "./image/virtualTour/himachal/mandir_chintpurni.jpg"
import hp_handicraft from "./image/virtualTour/himachal/hp_Mohra-Banner.jpg"
import hp_village from "./image/virtualTour/himachal/hp_village.jpg"
import hp_agriculture from "./image/virtualTour/himachal/hp_agriculture.jpg"
import hp_market from "./image/virtualTour/himachal/hp_market.png"


const content = {
  hero: {
    title: "Discover India Through Virtual Adventures",
    description: "Immerse yourself in breathtaking landscapes and rich cultures from the comfort of your home.",
    buttonText: "Himachal Pradesh"
  },
  mainTitle: "Explore Our Virtual Experiences",
  destinations: [
    {
      title: "Manali",
      description: "Manali, nestled in the heart of the Himalayas, is a picturesque haven for nature lovers and adventure enthusiasts. Known for its stunning landscapes, serene temples, and vibrant culture, it's the perfect getaway for a rejuvenating retreat.",
      image: vt_hp_1
    },
    {
      title: "Shimla",
      description: "Shimla, the Queen of Hills, offers a unique blend of colonial charm and natural beauty. Its cool climate, lush greenery, and historic architecture make it a favorite summer retreat.",
      image: vt_hp_2
    },
    {
      title: "Dharamshala",
      description: "Dharamshala, home to the Dalai Lama, is known for its spiritual ambiance, Tibetan culture, and scenic beauty. It's a tranquil retreat for those seeking peace and rejuvenation.",
      image: vt_hp_3
    },
    {
      title: "Kullu",
      description: "Kullu, renowned for its majestic hills and valley of gods, offers a perfect blend of adventure and tranquility. Its vibrant festivals and serene landscapes are a delight for travelers.",
      image: vt_hp_4
    }
  ],
  cuisine: [
    {
      title: "Siddu",
      description: "Siddu is a local bread made from wheat flour and yeast. It is stuffed with a variety of fillings, including mashed pulses or poppy seeds, and is typically steamed. Siddu is often enjoyed with ghee or clarified butter.",
      image: siddu
    },
    {
      title: "Babru",
      description: "Babru is a Himachali variation of the popular North Indian kachori. It is a deep-fried bread stuffed with black gram paste. Babru is often served as a snack or with a meal, accompanied by tamarind chutney or potato curry.",
      image: babru
    },
    {
      title: "Kullu Trout Fish",
      description: "Kullu Trout is a specialty from the Kullu region, where freshwater trout is marinated in a mix of local spices and herbs and then grilled or fried. This dish highlights the region's fresh and flavorful produce.",
      image: troutfish
    },
    {
      title: "Mittha",
      description: "Mittha is a traditional sweet dish from Himachal Pradesh made with rice, sugar, ghee, and dry fruits. It's a festive dessert often enjoyed during celebrations and special occasions. This simple yet delightful treat highlights the region's rich culinary heritage.",
      image: mittha
    },
    {
      title: "Dham",
      description: "Dham is a traditional festive meal served during festivals and special occasions. It's a complete meal comprising rice, dal, rajma, curd, and a sweet dish. The preparation and serving of Dham are done by special chefs known as \"botis\".",
      image: dham
    }
  ],
  festivals: [
    {
      title: "Kullu Dussehra",
      description: "Celebrated with great enthusiasm, Kullu Dussehra marks the victory of good over evil. The festival lasts for a week, featuring processions of deities, traditional music, dance performances, and a large fair. It attracts visitors from all over the country and is a vibrant display of the region's rich cultural heritage.",
      image: kulludushera
    },
    {
      title: "Mandi Shivaratri",
      description: "This week-long festival in Mandi town is dedicated to Lord Shiva. It features colorful processions, cultural performances, and religious rituals. Hundreds of deities from the surrounding areas are brought to the town to pay homage to Lord Shiva, making it a grand and spiritually significant event.",
      image: hpshivratri
    },
    {
      title: "Losar Festival",
      description: "Celebrated by the Tibetan and Buddhist communities, Losar marks the Tibetan New Year. It involves elaborate rituals, prayers, and festivities that include traditional music, dance, and feasting. The festival is a time for families to come together, honor their deities, and celebrate with joy and positivity.",
      image: losar
    },
    {
      title: "Halda",
      description: "Celebrated primarily in the Lahaul region, the Halda Festival is dedicated to Shashikar Apa, the goddess of wealth. The festival involves the lighting of cedar twigs and is marked by ritualistic ceremonies performed by Lamas. Families gather to pray for prosperity and happiness, and the festival is a significant cultural event that showcases the traditions of the region.",
      image: halda
    }
  ],
  culture: {
    languages: {
      title: "Languages Spoken",
      description: "Hindi is widely spoken and understood across Himachal Pradesh. Pahari dialects like Kullu, Mandeali, and Kinnauri highlight the state's linguistic diversity. Punjabi is spoken near the Punjab border, while Tibetan is common in Dharamshala.",
      image: indilanguage
    },
    attires: [
      {
        title: "Shawls",
        description: "Handwoven Kullu shawls are famous for their intricate patterns and vibrant colors. These shawls are a staple in traditional Himachali attire, especially during the colder months.",
        image: hp_shawl
      },
      {
        title: "Himachali Topi",
        description: "The traditional Himachali cap, known as \"topi,\" is often adorned with colorful patterns and is a distinctive feature of the local attire. It is worn by men and women alike, symbolizing pride and cultural identity.",
        image: hp_topi
      },
      {
        title: "Traditional",
        description: "The traditional attire of Himachal Pradesh is vibrant and colorful, reflecting the rich cultural heritage of the region. Men wear the \"Bushehri Topi\" and \"Chola,\" while women adorn the \"Dhatu,\" \"Ghagri,\" and silver jewelry.",
        image: hp_traditional
      },
      {
        title: "Ghaghra & Choli",
        description: "Women wear traditional attire such as ghaghra (long skirt) and choli (blouse), often complemented by a dupatta (scarf) and elaborate jewelry.",
        image: hp_gagra
      }
    ],
    traditions: [
      {
        title: "Folk Music and Dance",
        description: "Traditional dance forms like Nati are performed during festivals and celebrations. These dances, accompanied by folk music, reflect the joyful spirit and cultural heritage of the region.",
        image: hp_nati
      },
      {
        title: "Religious Practices",
        description: "Himachal Pradesh is home to numerous temples and monasteries, reflecting its diverse religious landscape. Hinduism and Buddhism are the predominant religions, and religious ceremonies are an integral part of daily life.",
        image: hp_temple
      },
      {
        title: "Art and Handicrafts",
        description: "The state is renowned for its exquisite handicrafts, including shawls, carpets, and pottery. Wood carving and metalwork are also prominent, with artisans creating beautiful pieces that reflect the region's artistic heritage.",
        image: hp_handicraft
      }
    ],
    community: [
      {
        title: "Village Communities",
        description: "Life in Himachal Pradesh is often centered around village communities. These close-knit communities celebrate festivals together, share agricultural responsibilities, and maintain a strong sense of solidarity.",
        image: hp_village
      },
      {
        title: "Agricultural Practices",
        description: "Agriculture is a significant part of life in Himachal Pradesh. Traditional farming practices are still prevalent, with communities growing crops like rice, wheat, and maize, as well as fruits like apples and plums.",
        image: hp_agriculture
      },
      {
        title: "Handicrafts & Markets",
        description: "Local markets, or \"bazaars,\" are vibrant places where artisans sell their handmade products. Visiting these markets provides an opportunity to see the rich variety of crafts and interact with local artisans.",
        image: hp_market
      }
    ]
  },
  accommodations: {
    title: "Accommodations",
    description: "Explore extraordinary stays, from luxurious resorts to authentic homestays."
  },
  cta: {
    title: "Ready to Embark on Your Virtual Adventure?",
    description: "Join thousands of explorers discovering the world from home. Sign up now for exclusive access to our premium virtual tours.",
    buttonText: "Get Started"
  }
};

function VirtualTour() {
  const rajya = useRef(null);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <a ref={rajya} href="#" className="btun">{content.hero.buttonText}</a>
        </div>
      </header>

      <main className="tour-sections">
        <div className="container">
          <h2>{content.mainTitle}</h2>
          <div className="tour-grid">
            <div className="tour-card">
              <img src={loc} alt="" />
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
              <img src={food} alt="" />
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
              <img src={calender} alt="" />
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
              <img src={compass} alt="" />
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
            <div className="tour-card">
              <img src={bed} alt="" />
              <h3>{content.accommodations.title}</h3>
              <p>{content.accommodations.description}</p>
            </div>
          </div>
        </div>
      </main>

      <section className="cta">
        <div className="container">
          <h2>{content.cta.title}</h2>
          <p>{content.cta.description}</p>
          <a href="#" className="btn">{content.cta.buttonText}</a>
        </div>
      </section>
    </>
  )
}

export default VirtualTour