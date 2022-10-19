import React, {useEffect,useState} from 'react'
import './home.css'
import vid1 from '../../assets/videos/vid1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [topic, setTopic] = useState('None');
  useEffect(()=>{
    Aos.init({duration: 1800})
  },[])
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={vid1} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos='fade-up' className="smallText">
            Our Packages
          </span>
          <h1 data-aos='fade-up' className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type='text' placeholder='Enter name here...'></input>
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Search by image:</label>
            <div className="input flex">
            <input type="file" className="fileIpt" name="avatar" accept="image/png, image/jpeg"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Search by topic:</label>
              <h3 className='total'>{topic}</h3>
            </div>
            <div className="input flex">
            <select name="topic" id="topics" onChange={(e)=>setTopic(e.target.value)}>
              <option value="None">None</option>
              <option value="Topic1">Topic1</option>
              <option value="Topic2">Topic2</option>
              <option value="Topic3">Topic3</option>
            </select>
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>SEARCH</span>
          </div>
        </div>
    
        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>

          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home