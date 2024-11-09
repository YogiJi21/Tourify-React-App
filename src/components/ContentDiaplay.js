import React, {useRef, useState } from "react";
import "./ContentDiaplay.css";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import img5 from "./image/img5.jpg";
import img6 from "./image/img6.jpg";
import img7 from "./image/img7.jpg";
import img8 from "./image/img8.jpg";


function Sliding() {

    const next = useRef(null);
    const prev = useRef(null);
    const main_contain = useRef(null);
    const [bgindex, setbgindex] = useState(1);
    const [bgurl, setbgurl] = useState(NaN);
    
    //
    // set background
const setbkgrnd=()=>{
    
  let newIndex = bgindex + 1;
    let newUrl;

    if(newIndex===1){
      newUrl=img1;
    }
    else if(newIndex===2){
      newUrl=img2;
    }
    else if(newIndex===3){
      newUrl=img3;
    }
    else if(newIndex===4){
      newUrl=img4;
    }
    else if(newIndex===5){
      newUrl=img5;
    }
    else if(newIndex===6){
      newUrl=img6;
    }
    else if(newIndex===7){
      newUrl=img7;
    }
    else if(newIndex===8){
      newUrl=img8;
      newIndex=0;
    }
    

    console.log(newIndex);
    setbgindex(newIndex);
    setbgurl(newUrl);
    main_contain.current.style.background=`url(${bgurl}) no-repeat center fixed`;
    main_contain.current.style.backgroundSize="cover";
  }

  const next_content = () => {
    let items = document.querySelectorAll(".content-items");
    document.querySelector(".content-slider").appendChild(items[0]);
    setbkgrnd();
  };
  const prev_content = () => {
    let items = document.querySelectorAll(".content-items");
    document.querySelector(".content-slider").prepend(items[items.length - 1]);
  };

  return (
    <div  className="main-container">
      <div ref={main_contain} className="content-slider">

        <div className="content-items" style={{ backgroundImage: `url(${img1})` }}>
          <div className="contant">
            <div className="name">Delhi</div>
            <div className="dec">
            Delhi, the capital city of India, is far more than just a bustling metropolis; it is a city steeped in history and culture. Half of all the city's significant monuments and heritage sites ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img2})` }}>
          <div className="contant">
            <div className="name">Himachal Pradesh</div>
            <div className="dec">
            Himachal Pradesh, known for its breathtaking landscapes and serene hill stations, faces threats to its pristine ecosystems due to climate change and deforestation. The spiritual aura of places like Dharamshala and the colonial charm of Shimla offer unique experiences...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img3})` }}>
          <div className="contant">
            <div className="name">Rajasthan</div>
            <div className="dec">
            Rajasthan, the land of kings, boasts majestic palaces and vast deserts but faces risks to its heritage sites from erosion and urban encroachment. The bustling bazaars of Jaipur and the tranquil lakes of Udaipur reveal a royal legacy...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img4})` }}>
          <div className="contant">
            <div className="name">Kashmir</div>
            <div className="dec">
            Kashmir, often called "Paradise on Earth," is known for its stunning beauty and deep cultural significance, yet its environments like Dal Lake are at risk from environmental degradation. The serene beauty of Pahalgam and vibrant markets of Srinagar define Kashmir...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img5})` }}>
          <div className="contant">
            <div className="name">Uttar Pradesh</div>
            <div className="dec">
            Uttar Pradesh, a state rich in history and culture, faces threats to its iconic sites like the Taj Mahal and Varanasi Ghats from pollution and urban sprawl. The spiritual aura of Varanasi and the grandeur of Lucknow reveal a diverse heritage...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img6})` }}>
          <div className="contant">
            <div className="name">Uttarakhand</div>
            <div className="dec">
            Uttarakhand, the "Land of the Gods," offers sacred temples and adventure spots but faces threats to its ecosystems like Jim Corbett National Park. The spiritual aura of Rishikesh and scenic beauty of Nainital blend tranquility and adventure...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img7})` }}>
          <div className="contant">
            <div className="name">Karela</div>
            <div className="dec">
            Kerala, "God's Own Country," is famous for tranquil backwaters and lush landscapes, though ecosystems like the Western Ghats are at risk from overdevelopment. The serene beaches of Kovalam and cultural richness of Kochi define Kerala...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${img8})` }}>
          <div className="contant">
            <div className="name">Punjab</div>
            <div className="dec">
            Punjab, the "Land of Five Rivers," rich in culture and history, sees threats to sites like the Golden Temple from urbanization and pollution. The bustling streets of Amritsar and the serene countryside capture the essence of Punjab...
            </div>
            <button>See More</button>
          </div>
        </div>

        
      </div>

      <div className="arrows">
        <button onClick={prev_content} ref={prev}>
          {"<"}
        </button>
        <button onClick={next_content} ref={next}>
          {">"}
        </button>
      </div>

    </div>
  );
}

export default Sliding;
