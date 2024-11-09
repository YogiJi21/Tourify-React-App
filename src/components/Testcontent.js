import loc from "./image/icons/icons8-address-100.png"
import food from "./image/icons/icons8-restaurant-96.png"
import bed from "./image/icons/icons8-bed-96.png"
import compass from "./image/icons/icons8-compass-96.png"
import calender from "./image/icons/icons8-calendar-96.png"
import calendar from "./image/icons/icons8-calendar-96.png"
// himachal pradesh
import hp from "./image/manali.jpg"
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
// punjab
import pb from "./image/img8.jpg"
// import indilanguage from "https://images.unsplash.com/photo-1508154048109-de555266b5d4"  // Indian Language

// import vt_rj_1 from "https://images.pexels.com/photos/1009082/pexels-photo-1009082.jpeg"  // Jaipur
// import vt_rj_2 from "https://images.unsplash.com/photo-1541354197109-9b5bf60e0ab1"  // Udaipur
// import vt_rj_3 from "https://images.pexels.com/photos/3597989/pexels-photo-3597989.jpeg"  // Jaisalmer
// import vt_rj_4 from "https://images.unsplash.com/photo-1504198266281-16587aed2a9d"  // Jodhpur
// import dalbaati from "https://images.unsplash.com/photo-1589302078094-356cb2f1b6a7"  // Dal Baati
// import gatte from "https://images.unsplash.com/photo-1600375526960-d12dcf8c9c83"  // Gatte
// import laalmaas from "https://images.pexels.com/photos/1667721/pexels-photo-1667721.jpeg"  // Laal Maas
// import kachori from "https://images.unsplash.com/photo-1598962526400-3e799524f0c4"  // Kachori
// import ghewar from "https://images.unsplash.com/photo-1621361202544-4c8c5d08d39a"  // Ghewar
// import pushkarfair from "https://images.unsplash.com/photo-1605881194493-0aab3c55e7f3"  // Pushkar Fair
// import desertfestival from "https://images.unsplash.com/photo-1582719478256-ddec6a18b7d0"  // Desert Festival
// import gangaur from "https://images.unsplash.com/photo-1599736597262-2bc7d924ea23"  // Gangaur
// import teej from "https://images.unsplash.com/photo-1619611030367-2870fc1094e3"  // Teej
// import bandhani from "https://images.unsplash.com/photo-1593538573937-58b80f87fc7c"  // Bandhani
// import pagri from "https://images.unsplash.com/photo-1594737625785-016c09d35f1c"  // Pagri
// import ghagracholi from "https://images.unsplash.com/photo-1621570281427-3b2a41b6ff16"  // Ghagra Choli
// import angrakha from "https://images.unsplash.com/photo-1586420262866-1291b3a39b52"  // Angrakha
// import folkdance from "https://images.unsplash.com/photo-1581579184874-7ef7d633f64e"  // Folk Dance
// import temple from "https://images.unsplash.com/photo-1582719478256-ddec6a18b7d0"  // Temple
// import handicraft from "https://images.unsplash.com/photo-1572374007153-cd3245b8203d"  // Handicraft
// import village from "https://images.unsplash.com/photo-1597692665756-08aabbc83e14"  // Village
// import agriculture from "https://images.unsplash.com/photo-1506060181588-56d0f6b9dbe5"  // Agriculture
// import market from "https://images.unsplash.com/photo-1519500528355-8987d90f7958"  // Market


export const commonIcons = {
  destination: loc,
  cuisine: food,
  events: calender,
  culture: compass,
  accommodation: bed
};

export const stateData = {
  HP: {
    name: "Himachal Pradesh",
    bgimage:hp,
    hero: {
      title: "Discover Himachal Pradesh Through Virtual Adventures",
      description: "Immerse yourself in breathtaking Himalayan landscapes and rich Pahari culture from the comfort of your home.",
    },
    mainTitle: "Explore Himachal Pradesh's Virtual Experiences",
    icons: {
      destination: loc,
      cuisine: food,
      events: calender,
      culture: compass,
      accommodation: bed
    },
    destinations: [
      {
        title: "Manali",
        description: "Manali, nestled in the heart of the Himalayas, is a picturesque haven for nature lovers and adventure enthusiasts. Known for its stunning landscapes, serene temples, and vibrant culture, it's the perfect getaway for a rejuvenating retreat.",
        image: vt_hp_1
      },
      {
        title: "Shimla",
        description:"Shimla, the Queen of Hills, offers a unique blend of colonial charm and natural beauty. Its cool climate, lush greenery, and historic architecture make it a favorite summer retreat.",
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
      title: "Accommodations in Himachal Pradesh",
      description: "From luxury resorts to cozy homestays, Himachal Pradesh offers a wide range of accommodation options. Whether you prefer a stay with a view of snow-capped mountains or a rustic experience in a traditional Himachali house, there's something for every traveler."
    },
    cta: {
      title: "Ready to Embark on Your Virtual Adventure in Himachal Pradesh?",
      description: "Join thousands of explorers discovering the beauty of Himachal Pradesh from home. Sign up now for exclusive access to our premium virtual tours.",
      buttonText: "Get Started"
    }
  },

  RJ: {
    name: "Rajasthan",
    bgimage:"https://c4.wallpaperflare.com/wallpaper/206/498/365/the-sky-sunset-lights-river-home-hd-wallpaper-preview.jpg",
    hero: {
      title: "Discover Rajasthan Through Virtual Adventures",
      description: "Experience the vibrant culture and majestic landscapes of Rajasthan from the comfort of your home."
    },
    mainTitle: "Explore Rajasthan's Virtual Experiences",
    icons: {
      destination: loc,
      cuisine: food,
      events: calendar,
      culture: compass,
      accommodation: bed
    },
    destinations: [
      {
        title: "Jaipur",
        description: "Jaipur, the Pink City, is known for its stunning palaces, historic forts, and vibrant markets. Its rich history and architectural beauty make it a must-visit destination for history buffs and culture enthusiasts.",
        image: "https://c4.wallpaperflare.com/wallpaper/815/680/990/palaces-hawa-mahal-wallpaper-preview.jpg"      },
      {
        title: "Udaipur",
        description: "Udaipur, often called the City of Lakes, is famous for its beautiful lakes, palaces, and romantic ambiance. The City Palace and Lake Pichola are highlights that offer picturesque views and a glimpse into Rajasthan's royal heritage.",
        image: "https://c4.wallpaperflare.com/wallpaper/206/498/365/the-sky-sunset-lights-river-home-hd-wallpaper-preview.jpg"
      },
      {
        title: "Jaisalmer",
        description: "Jaisalmer, the Golden City, is known for its golden sand dunes and the magnificent Jaisalmer Fort. It's a unique destination that offers a blend of history, architecture, and desert adventures.",
        image: "https://c4.wallpaperflare.com/wallpaper/329/353/199/fort-jaisalmer-wallpaper-preview.jpg"
      },
      {
        title: "Jodhpur",
        description: "Jodhpur, the Blue City, is renowned for its majestic Mehrangarh Fort and blue-painted houses. The city's vibrant bazaars and historic landmarks offer a rich cultural experience.",
        image: "https://c4.wallpaperflare.com/wallpaper/484/985/153/jodhpur-rajasthan-india-wallpaper-preview.jpg"
      }
    ],
    cuisine: [
      {
        title: "Dal Baati Churma",
        description: "Dal Baati Churma is a traditional Rajasthani dish consisting of lentil curry (dal), baked wheat rolls (baati), and sweetened crushed wheat (churma). It's a hearty and flavorful meal that reflects the region's culinary heritage.",
        image: "https://www.sharmispassions.com/wp-content/uploads/2020/12/19729847952_b5cc81291a_o.jpg",
        
        
      },
      {
        title: "Gatte ki Sabzi",
        description: "Gatte ki Sabzi is a popular curry made with gram flour dumplings cooked in a spicy yogurt-based sauce. This dish is a staple in Rajasthani cuisine and is enjoyed with rice or roti.",
        image: "https://maayeka.com/wp-content/uploads/2013/02/GATTA-CURRY.jpg"
      },
      {
        title: "Laal Maas",
        description: "Laal Maas is a fiery meat curry made with mutton, red chilies, and a blend of local spices. This dish is known for its intense flavors and is a favorite among meat lovers.",
        image: "https://i0.wp.com/www.ketoforindia.com/wp-content/uploads/2022/12/Keto-Red-Mutton.jpg?w=1920&ssl=1"
      },
      {
        title: "Pyaaz Kachori",
        description: "Pyaaz Kachori is a deep-fried pastry filled with a spicy onion mixture. It's a popular snack in Rajasthan, often enjoyed with tamarind chutney or yogurt.",
        image: "https://images.healthshots.com/healthshots/hi/uploads/2022/03/30175856/Pyaz-kachori-recipe-770x433.jpg"
      },
      {
        title: "Ghewar",
        description: "Ghewar is a traditional Rajasthani sweet made from flour, sugar, and ghee. It's typically prepared during festivals and special occasions, and its unique texture and rich flavor make it a delightful treat.",
        image: "https://lmbsweets.com/wp-content/uploads/2021/09/LMB-1-61.jpg"
      }
    ],
    festivals: [
      {
        title: "Pushkar Camel Fair",
        description: "The Pushkar Camel Fair is a vibrant event held annually in the town of Pushkar. It features camel races, cultural performances, and a bustling marketplace, attracting visitors from all over the world.",
        image: "https://www.travel-rajasthan.com/blog/wp-content/uploads/2019/07/PushkarCamelFair-768x512.jpg"
      },
      {
        title: "Desert Festival",
        description: "The Desert Festival in Jaisalmer is a three-day event that showcases the rich cultural heritage of Rajasthan. It includes folk music and dance performances, camel rides, and traditional competitions.",
        image: "https://www.savaari.com/blog/wp-content/uploads/2019/12/Desert-Festival-Jaisalmer.jpg"
      },
      {
        title: "Gangaur Festival",
        description: "Gangaur is one of the most important festivals in Rajasthan, celebrating the goddess Gauri. It involves colorful processions, traditional songs, and rituals performed by women for marital happiness and prosperity.",
        image: "https://mathinitravel.com/wp-content/uploads/2019/07/gangaur-festival-800x535.jpg"
      },
      {
        title: "Teej Festival",
        description: "Teej is a monsoon festival celebrated with great enthusiasm by women in Rajasthan. It involves dancing, singing, and feasting, and is dedicated to the goddess Parvati and her reunion with Lord Shiva.",
        image: "https://images.news18.com/ibnlive/uploads/2015/09/Reuters-Mehendi.jpg"
      }
    ],
    culture: {
      languages: {
        title: "Languages Spoken",
        description: "Hindi is widely spoken and understood across Rajasthan. Rajasthani dialects like Marwari, Mewari, and Shekhawati highlight the state's linguistic diversity. English is also commonly spoken, especially in urban areas.",
        image: indilanguage
      },
      attires: [
        {
          title: "Bandhani",
          description: "Bandhani is a traditional tie-dye textile art form that creates vibrant patterns on fabrics. This technique is commonly used to make sarees, turbans, and dupattas, reflecting the colorful spirit of Rajasthan.",
          image: "https://5.imimg.com/data5/IC/KK/TY/SELLER-55061345/rajasthani-bandhani-saree-with-gota-patti-250x250.jpg"
        },
        {
          title: "Pagri",
          description: "The traditional Rajasthani turban, known as \"pagri,\" is a distinctive feature of local attire. It comes in various styles and colors, symbolizing the wearer's social status and region.",
          image: "https://media.istockphoto.com/id/155351629/photo/indian-rural-senior-man-portrait.jpg?s=612x612&w=0&k=20&c=Uk9HU2eeHq2IOQ5B-hLWMIBD_viGnLT1uhU7_ymQwQo="
        },
        {
          title: "Ghagra Choli",
          description: "Women in Rajasthan wear the traditional ghagra (skirt) and choli (blouse), often accompanied by an odhni (scarf). These garments are adorned with intricate embroidery and mirror work.",
          image: "https://blog.g3fashion.com/wp-content/uploads/2021/01/blog-13.jpg"
        },
        {
          title: "Angrakha",
          description: "The Angrakha is a traditional men's garment, featuring a long, frock-style top with a flared skirt. It's often paired with a turban and dhoti or churidar.",
          image: "https://i.pinimg.com/736x/f0/f9/c0/f0f9c0d30307e7e9e398423d7e975a12.jpg"
        }
      ],
      traditions: [
        {
          title: "Folk Music and Dance",
          description: "Rajasthan is famous for its folk music and dance forms like Ghoomar and Kalbeliya. These performances are an integral part of festivals and celebrations, showcasing the vibrant culture of the region.",
          image: "https://assets.vogue.in/photos/64d6135bdfb7338d7a2fbbd1/3:4/w_2560%2Cc_limit/SAZ.jpeg"       },
        {
          title: "Religious Practices",
          description: "Rajasthan is home to numerous temples and religious sites, reflecting its diverse spiritual heritage. Hinduism is the predominant religion, with significant Jain and Muslim communities.",
          image: "https://hindi.holidayrider.com/wp-content/uploads/2019/11/compressed-9xod.jpg"
        },
        {
          title: "Art and Handicrafts",
          description: "The state is renowned for its exquisite handicrafts, including pottery, textiles, and jewelry. Artisans in Rajasthan create beautiful pieces that reflect the region's rich artistic traditions.",
          image: "https://cdn.cdnparenting.com/articles/2019/05/18105342/1044340012-H-1024x700.jpg"
        }
      ],
      community: [
        {
          title: "Village Communities",
          description: "Life in Rajasthan is often centered around village communities. These close-knit communities celebrate festivals together, share agricultural responsibilities, and maintain a strong sense of solidarity.",
          image: "https://i.pinimg.com/736x/97/72/4d/97724dccf99be019013a1219d106a314.jpg"
        },
        {
          title: "Agricultural Practices",
          description: "Agriculture is a significant part of life in Rajasthan. Traditional farming practices are still prevalent, with communities growing crops like millet, wheat, and pulses, as well as a variety of fruits and vegetables.",
          image: "https://www.timgrahamstock.com/img-get/I0000AdAwBFkcoxc/s/1200/I0000AdAwBFkcoxc.jpg"
        },
        {
          title: "Handicrafts & Markets",
          description: "Local markets, or \"bazaars,\" are vibrant places where artisans sell their handmade products. Visiting these markets provides an opportunity to see the rich variety of crafts and interact with local artisans.",
          image: "https://www.thomascook.in/blog/wp-content/uploads/2024/02/shop-in-rajasthan.jpg"
        }
      ]
    },
    accommodations: {
      title: "Accommodations in Rajasthan",
      description: "From luxury heritage hotels to charming guesthouses, Rajasthan offers a wide range of accommodation options. Whether you prefer a royal stay in a historic palace or a cozy experience in a traditional haveli, there's something for every traveler."
    },
    cta: {
      title: "Ready to Embark on Your Virtual Adventure in Rajasthan?",
      description: "Join thousands of explorers discovering the beauty of Rajasthan from home. Sign up now for exclusive access to our premium virtual tours.",
      buttonText: "Get Started"
    }
  },
  
  PB: {
    name: "Punjab",
    bgimage:pb,
    hero: {
      title: "Discover Punjab Through Virtual Adventures",
      description: "Experience the vibrant culture and lush landscapes of Punjab from the comfort of your home."
    },
    mainTitle: "Explore Punjab's Virtual Experiences",
    icons: {
      destination: loc,
      cuisine: food,
      events: calendar,
      culture: compass,
      accommodation: bed
    },
    destinations: [
      {
        title: "Amritsar",
        description: "Amritsar is home to the iconic Golden Temple, a significant spiritual and cultural site. The city's rich history and vibrant markets make it a must-visit destination.",
        image: "https://static.wixstatic.com/media/3417b6_9d136d18669d49d6ae8315c01402a94d~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3417b6_9d136d18669d49d6ae8315c01402a94d~mv2.jpg"
      },
      {
        title: "Chandigarh",
        description: "Chandigarh, the capital of Punjab, is known for its modern architecture and urban design. The city offers beautiful gardens, museums, and a serene lake.",
        image: "https://www.travelsiteindia.com/blog/wp-content/uploads/2018/07/sukhna-lake-things-to-do-in-chandigarh.jpg"
      },
      {
        title: "Patiala",
        description: "Patiala is famous for its royal heritage, palaces, and traditional attire. The Qila Mubarak complex and Sheesh Mahal are prominent attractions.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0b/4b/5e/gurdwara-dukh-nivaran.jpg?w=1200&h=-1&s=1"
      },
      {
        title: "Ludhiana",
        description: "Ludhiana is a bustling industrial city with a rich cultural heritage. It's known for its historic sites, shopping markets, and vibrant festivals.",
        image: "https://www.india-tours.com/images/tours/india-spiritual-tour-from-amritsar.jpg"
      }
    ],
    cuisine: [
      {
        title: "Makki di Roti and Sarson da Saag",
        description: "Makki di Roti and Sarson da Saag is a traditional Punjabi dish made with cornmeal flatbread and mustard greens. It's a hearty and flavorful meal, often enjoyed with white butter and jaggery.",
        image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1826_1_1.jpg"
      },
      {
        title: "Butter Chicken",
        description: "Butter Chicken is a famous Punjabi dish made with tender chicken pieces cooked in a rich, creamy tomato-based sauce. It's best enjoyed with naan or rice.",
        image:"https://saltedmint.com/wp-content/uploads/2024/01/Indian-Butter-Chicken-recipe-with-rice-500x375.jpg"
      },
      {
        title: "Chole Bhature",
        description: "Chole Bhature is a popular Punjabi dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature). It's a beloved dish for breakfast or lunch.",
        image: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11602740058453.jpg"
      },
      {
        title: "Amritsari Fish",
        description: "Amritsari Fish is a delectable fish fry dish from Amritsar. The fish is marinated in a spicy batter and deep-fried to perfection, offering a crispy and flavorful bite.",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/amritsari-fried-fish-scaled-e1621348565229.jpeg?v=1618226070"
      },
      {
        title: "Lassi",
        description: "Lassi is a traditional Punjabi drink made from yogurt, often sweetened and flavored with cardamom or fruits. It's a refreshing beverage, perfect for cooling down in the summer.",
        image: "https://as2.ftcdn.net/v2/jpg/05/12/58/51/1000_F_512585178_7hnfJGxxsybEDn0QXe4iQXg7CeiF7pju.jpg"
      }
    ],
    festivals: [
      {
        title: "Baisakhi",
        description: "Baisakhi is a major festival in Punjab, celebrating the harvest season and the founding of the Khalsa. It involves colorful processions, music, and dance.",
        image: "https://m.economictimes.com/thumb/msid-99319887,width-1200,height-900,resizemode-4,imgsize-179308/baisakhi-2023-date-significance-of-vaisakhi-sikh-new-year-harvest-festival.jpg"
      },
      {
        title: "Lohri",
        description: "Lohri is a winter festival celebrated with bonfires, music, and dance. It marks the end of winter and the arrival of longer days.",
        image: "https://static.abplive.com/wp-content/uploads/sites/2/2020/01/13180017/lohri.jpg"
      },
      {
        title: "Guru Nanak Jayanti",
        description: "Guru Nanak Jayanti commemorates the birth of Guru Nanak, the founder of Sikhism. It involves processions, prayers, and community meals at gurdwaras.",
        image: "https://images.news9live.com/h-upload/2022/11/07/578610-gurunanak.jpg?w=1200&enlarge=true"
      },
      {
        title: "Maghi",
        description: "Maghi is a Sikh festival observed to honor the memory of forty Sikh martyrs. It involves prayers, kirtan, and fairs with cultural performances.",
        image: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/1/2022_1$largeimg_160472165.jpg"
      }
    ],
    culture: {
      languages: {
        title: "Languages Spoken",
        description: "Punjabi is the primary language spoken in Punjab, reflecting the state's rich linguistic heritage. Hindi and English are also widely spoken and understood.",
        image: indilanguage
      },
      attires: [
        {
          title: "Phulkari",
          description: "Phulkari is a traditional embroidery technique used to create vibrant and intricate patterns on shawls, dupattas, and other garments. It's a hallmark of Punjabi textile art.",
          image: "https://valaikadesign.com/cdn/shop/products/SAI_7355_1024x1024@2x.jpg?v=1603555830"
        },
        {
          title: "Turban",
          description: "The turban, or \"pagri,\" is an important part of Punjabi attire, especially among Sikh men. It symbolizes honor, self-respect, and spiritual values.",
          image: "https://miro.medium.com/v2/resize:fit:1200/0*ufdVeTI3OgK2QTz8.jpg"
        },
        {
          title: "Salwar Kameez",
          description: "Salwar Kameez is a traditional outfit worn by Punjabi women, consisting of a long tunic (kameez) and loose-fitting trousers (salwar). It's often paired with a colorful dupatta.",
          image: "https://static.iwmbuzz.com/wp-content/uploads/2022/01/nazar-na-lag-jaye-tenu-shraddha-arya-looks-drop-dead-gorgeous-in-red-and-white-patiala-outfit-dheeraj-dhoopar-turns-sardar-ji-10.jpg"
        },
        {
          title: "Kurta Pajama",
          description: "Kurta Pajama is a traditional outfit for Punjabi men, featuring a long shirt (kurta) and comfortable trousers (pajama). It's a versatile and elegant attire.",
          image: "https://viestories.com/wp-content/uploads/2023/05/339539605_500432478805232_4010037942689677094_n.jpg"
        }
      ],
      traditions: [
        {
          title: "Bhangra and Gidda",
          description: "Bhangra and Gidda are traditional Punjabi dance forms that are energetic and joyful. They are performed during festivals and celebrations, showcasing the exuberant culture of Punjab.",
          image: "https://www.giddhabhangraboliyan.com/wp-content/uploads/2017/10/cropped-Bhangra-pic-1.jpg"
          
        },
        {
          title: "Religious Practices",
          description: "Punjab is the heartland of Sikhism, with numerous gurdwaras and spiritual sites. The Golden Temple in Amritsar is the most prominent religious landmark.",
          image: "https://www.global-gallivanting.com/wp-content/uploads/2016/08/golden-temple-inside-pictures-29.jpg"
        },
        {
          title: "Art and Handicrafts",
          description: "Punjab is known for its vibrant handicrafts, including phulkari embroidery, juttis (traditional footwear), and woodwork. These crafts reflect the state's rich artistic traditions.",
          image: "https://www.re-thinkingthefuture.com/art/a12250-handicraft-industry-of-punjab/attachment/a12250-handcrafts-of-punjab-image-4/"
        }
      ],
      community: [
        {
          title: "Village Communities",
          description: "Life in Punjab is often centered around village communities. These communities celebrate festivals together, share agricultural responsibilities, and maintain a strong sense of solidarity.",
          image: "https://qph.cf2.quoracdn.net/main-qimg-654349cb83402e36cdcdb02c56a52811-lq"
        },
        {
          title: "Agricultural Practices",
          description: "Punjab is known as the 'Granary of India,' with agriculture playing a vital role in its economy. The state's fertile soil supports the cultivation of wheat, rice, and other crops.",
          image: "https://www.thestatesman.com/wp-content/uploads/2017/08/1499784374-agriculture-517-twitter.jpg"
        },
        {
          title: "Handicrafts & Markets",
          description: "Local markets, or \"bazaars,\" are vibrant places where artisans sell their handmade products. Visiting these markets provides an opportunity to see the rich variety of crafts and interact with local artisans.",
          image: "https://cdn.shopify.com/s/files/1/0155/8131/files/Pinterest_i217_photobucket_com_480x480.jpg?v=1711994845"
        }
      ]
    },
    accommodations: {
      title: "Accommodations in Punjab",
      description: "From luxury hotels to cozy guesthouses, Punjab offers a wide range of accommodation options. Whether you prefer a modern stay in Chandigarh or a heritage experience in Amritsar, there's something for every traveler."
    },
    cta: {
      title: "Ready to Embark on Your Virtual Adventure in Punjab?",
      description: "Join thousands of explorers discovering the beauty of Punjab from home. Sign up now for exclusive access to our premium virtual tours.",
      buttonText: "Get Started"
    }
  },

  KL: {
    name: "Kerala",
    bgimage:"https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    hero: {
      title: "Discover Kerala Through Virtual Adventures",
      description: "Experience the serene backwaters and vibrant culture of Kerala from the comfort of your home."
    },
    mainTitle: "Explore Kerala's Virtual Experiences",
    icons: {
      destination: loc,
      cuisine: food,
      events: calendar,
      culture: compass,
      accommodation: bed
    },
    destinations: [
      {
        title: "Alleppey",
        description: "Alleppey, known as the 'Venice of the East,' is famous for its picturesque backwaters, houseboats, and serene landscapes. It's an ideal destination for a peaceful and scenic getaway.",
        image: "https://traveldudes.com/wp-content/uploads/2020/09/Alleppey.jpeg"
      },
      {
        title: "Munnar",
        description: "Munnar is a beautiful hill station known for its lush tea gardens, rolling hills, and cool climate. It's a popular destination for nature lovers and adventure enthusiasts.",
        image: "https://www.keralatourism.org/images/microsites/munnar/idukki-kerala.jpg"
      },
      {
        title: "Kochi",
        description: "Kochi, also known as Cochin, is a vibrant city with a rich history and a blend of modernity and tradition. It's famous for its historic Fort Kochi, Chinese fishing nets, and diverse cultural influences.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg"
      },
      {
        title: "Kumarakom",
        description: "Kumarakom is a serene village located on the Vembanad Lake, known for its bird sanctuary and beautiful backwaters. It's a perfect spot for birdwatching and tranquil boat rides.",
        image: "https://www.tourmyindia.com/states/kerala/images/vembanad-lake-kumarakom3.jpg"
      }
    ],
    cuisine: [
      {
        title: "Appam with Stew",
        description: "Appam with stew is a traditional Kerala breakfast dish made with fermented rice pancakes and a flavorful coconut-based vegetable or meat stew. It's a delicious and comforting meal.",
        image: "https://www.yummyoyummy.com/wp-content/uploads/2019/09/IMG_0482.jpg"
      },
      {
        title: "Puttu and Kadala Curry",
        description: "Puttu is a steamed rice cake made with rice flour and coconut, often served with kadala curry (black chickpea curry). It's a wholesome and nutritious dish enjoyed across Kerala.",
        image: "https://www.shutterstock.com/image-photo/popular-south-indian-breakfast-puttu-600nw-2211344653.jpg"
      },
      {
        title: "Kerala Sadya",
        description: "Kerala Sadya is a traditional feast served on a banana leaf, consisting of a variety of vegetarian dishes, rice, and payasam (dessert). It's a grand and flavorful meal enjoyed during festivals and celebrations.",
        image: "https://www.masalabox.co.in/wp-content/uploads/2020/08/onam-sadya.jpg"
      },
      {
        title: "Fish Moilee",
        description: "Fish Moilee is a mild and creamy fish curry made with coconut milk, turmeric, and spices. It's a delightful dish that pairs well with appam or rice.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3gCMETwPP4okQYGj4vXendbCifDLU5cMHgDayLLETk5dUEFgcuGRLEuMz7vCkeudMXKPaTvqolDJ30lWepmDC_Elj98iX04vuBHYUP21EgNnNQRc54RAwGiYE2OhljWrM-0ma1ls_rOtL-oyDUzLlm_1R6RDhWGdgkWn44i3hwgURsWTo4ZpUpsHTg/s800/1-IMG_3409-001.JPG"
      },
      {
        title: "Banana Chips",
        description: "Banana Chips are a popular snack in Kerala, made by deep-frying thin slices of raw bananas. They're crispy, salty, and a perfect snack to enjoy anytime.",
        image: "https://thekeralastore.com/wp-content/uploads/2022/07/Kerala_Banana_Chips.jpg"
      }
    ],
    festivals: [
      {
        title: "Onam",
        description: "Onam is the biggest festival in Kerala, celebrated with grand feasts, traditional dances, and boat races. It marks the homecoming of King Mahabali and is a time of joy and celebration.",
        image: "https://imgk.timesnownews.com/story/Onam_Kerala_PTI_photo.jpg?tr=w-1200,h-900"
      },
      {
        title: "Vishu",
        description: "Vishu is the traditional New Year festival of Kerala, celebrated with special rituals, a grand feast, and fireworks. It's a time to welcome the new year with hope and prosperity.",
        image: "https://www.sreestours.com/blog/wp-content/uploads/2016/10/Vishu_Kani_Calicut-1024x767.jpg"
      },
      {
        title: "Thrissur Pooram",
        description: "Thrissur Pooram is a spectacular temple festival held in Thrissur, featuring a grand parade of decorated elephants, traditional music, and fireworks. It's a vibrant and colorful celebration.",
        image: "https://www.memeraki.com/cdn/shop/articles/1024px-Thrissur_pooram_aanachamayam_1024x.jpg?v=1687532107"
      },
      {
        title: "Theyyam",
        description: "Theyyam is a traditional ritualistic festival in North Kerala, where performers don elaborate costumes and makeup to represent gods and spirits. It's a unique and mesmerizing cultural experience.",
        image: "https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/Witness-The-Vibrant-Theyyam-Festival-Kerala-3.jpg"
      }
    ],
    culture: {
      languages: {
        title: "Languages Spoken",
        description: "Malayalam is the official language of Kerala, reflecting the state's rich literary heritage. English and Hindi are also widely spoken and understood.",
        image: indilanguage
      },
      attires: [
        {
          title: "Kasavu Saree",
          description: "The Kasavu Saree is a traditional Kerala saree made with cotton and adorned with a golden border. It's worn by women during festivals and special occasions.",
          image: "https://www.bollywoodshaadis.com/img/article-2023824016463060390000.jpg"
        },
        {
          title: "Mundu",
          description: "Mundu is a traditional garment worn by men in Kerala. It's a piece of cloth wrapped around the waist, often paired with a shirt or kurta.",
          image: "https://static.wixstatic.com/media/253962_b19a61cfc97442f4b13661b0ae58d74c~mv2.jpg/v1/fill/w_638,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/253962_b19a61cfc97442f4b13661b0ae58d74c~mv2.jpg"
        },
        {
          title: "Settu Mundu",
          description: "Settu Mundu is a traditional two-piece garment worn by women, consisting of a blouse and a piece of cloth draped around the waist and over the shoulder. It's similar to a saree.",
          image:"https://i.pinimg.com/736x/37/aa/25/37aa255b0420a7542febf76eaa245c7c.jpg"
        },
        {
          title: "Kathakali Costume",
          description: "Kathakali is a traditional dance-drama form in Kerala, and performers wear elaborate costumes and makeup. These costumes are colorful and intricate, reflecting the art form's rich heritage.",
          image: "https://4.imimg.com/data4/GU/DE/GLADMIN-13023523/8-1000x1000.jpg"
        }
      ],
      traditions: [
        {
          title: "Ayurveda",
          description: "Kerala is known for its Ayurvedic treatments and practices, offering holistic healing and wellness therapies. Ayurveda is an integral part of Kerala's cultural and healthcare traditions.",
          image: "https://www.kerala-tourism.org/gifs/ayurveda-in-kerala.jpg"
        },
        {
          title: "Elephant Worship",
          description: "Elephants play a significant role in Kerala's culture and are often featured in temple festivals and rituals. They are revered and adorned with ornaments during celebrations.",
          image: "https://www.mangaloretoday.com/contentfiles/2022/jan/Elephant10jan2023.jpg"
        },
        {
          title: "Kalaripayattu",
          description: "Kalaripayattu is a traditional martial art form from Kerala, known for its dynamic movements and combat techniques. It's one of the oldest fighting systems in existence.",
          image: "https://picfit.tinggly.com/xcdn-cgi/image/fit=cover,quality=80,width=616,height=400,format=autohttps://images.musement.com/cover/0076/53/thumb_7552452_cover_header.jpeg?w=540"
        }
      ],
      community: [
        {
          title: "Fishing Communities",
        description: "Kerala's coastal regions are home to vibrant fishing communities. These communities follow traditional fishing practices and play a crucial role in the state's economy and culture.",
        image: "https://kerala.pscnotes.com/wp-content/uploads/2017/11/27THSARDINE2_1499452g.jpg"
      },
      {
        title: "Agricultural Practices",
        description: "Agriculture is a significant part of life in Kerala. The state is known for its spice plantations, paddy fields, and coconut groves, with communities practicing sustainable farming.",
        image:"https://www.keralatourism.org/images/picture/large/Paddy_fields_in_Kavalam_1735.jpg"
      },
      {
        title: "Handicrafts & Markets",
        description: "Local markets, or \"bazaars,\" are vibrant places where artisans sell their handmade products. Visiting these markets provides an opportunity to see the rich variety of crafts and interact with local artisans.",
        image: hp_market
      }
      ]
    },
    accommodations: {
      title: "Accommodations in Kerala",
      description: "From luxury houseboats to serene resorts, Kerala offers a wide range of accommodation options. Whether you prefer a tranquil stay on the backwaters or a cozy experience in the hills, there's something for every traveler."
    },
    cta: {
      title: "Ready to Embark on Your Virtual Adventure in Kerala?",
      description: "Join thousands of explorers discovering the beauty of Kerala from home. Sign up now for exclusive access to our premium virtual tours.",
      buttonText: "Get Started"
    }
  }


  // Other states would be added here...
};