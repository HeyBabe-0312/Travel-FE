import React, {useEffect} from 'react'
import './main.css'
import img from '../../assets/images/caurong.jpg'
import img2 from '../../assets/images/cauvang.jpg'
import img3 from '../../assets/images/chualinhung.jpg'
import img4 from '../../assets/images/hoian.jpg'
import img5 from '../../assets/images/mykhe.jpg'
import img6 from '../../assets/images/nguhanhson.jpg'
import {HiOutlineLocationMarker,HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Dragon Bridge',
    location: 'Viet Nam',
    grade: 'BRIDGE MODERN',
    fees: '$0',
    description: "Dragon Bridge is undoubtedly one of the best highlights Danang has to offer. It's built over the mighty Han river which itself empties into the South China Sea.",
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Golden Bridge',
    location: 'Viet Nam',
    grade: 'BRIDGE MODERN RELAX',
    fees: '$50',
    description: "Golden Bridge is 'Cau Vang' in Vietnamese. The yellow-hued bridge is supported by two gigantic hands just like the hands of God. This symbolizes a mystery of nature as God is carrying the gift from the ground.",
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Linh Ung Pagoda',
    location: 'Viet Nam',
    grade: 'PAGODA RELAX CULTURAL',
    fees: '$0',
    description: "Linh Ung Pagoda attracts a large number of tourists and Buddhists all over the world who come to explore its beauty and learn more about Buddhist culture. The pagoda is considered a Buddhist paradise on earth.",
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Hoi An Ancient Town',
    location: 'Viet Nam',
    grade: 'TOWN CULTURAL ANCIENT',
    fees: '$0',
    description: "Hoi An Ancient Town is an exceptionally well-preserved example of a South-East Asian trading port dating from the 15th to the 19th century.",
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'My Khe Beach',
    location: 'Viet Nam',
    grade: 'BEACH RELAX',
    fees: '$0',
    description: "My Khe beach is one of the most beautiful beaches in Vietnam. It has been selected by Forbes magazine as one of the six most attractive beaches in the world. If you are wondering where to stop by on your Vietnam vacation trip, then My Khe beach will be the first choice in the list of places to go in Da Nang.",
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Ngu Hanh Son Mountain',
    location: 'Viet Nam',
    grade: 'TOWN CULTURAL ANCIENT',
    fees: '$5',
    description: "The Ngu Hanh Son mountain is a complete system having five different mountains with their own unique features. The stunning natural master piece looks like a sky from above and this is considered as a sacred land for the Vietnamese people. You can easily see this because of its appearance, temples, pagodas and sacred vibes. The names of the mountains in the group are Kim Son, Thuy Son, Tho Son, Moc Son and Hoa Son. They were named during the Nguyen Dynasty by the King Ming Mang. ",
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 1800})
  },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
          Mosy visited destinations
        </h3>
      </div>

      <div className="secContent grid">
      {
      Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
        return(
          <div key={id}  data-aos='fade-up' className="singleDestination">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">
                {destTitle}  
              </h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className="icon"></HiOutlineClipboardCheck>
              </button>
            </div>
          </div>
        )
      })
      }
      </div>
    </section>
  )
}

export default Main