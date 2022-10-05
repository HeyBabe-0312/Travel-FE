import React,{useEffect} from 'react'
import './footer.css'
import vid2 from '../../assets/videos/vid2.mp4'
import {FiSend,FiChevronRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1800})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vid2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email Address'/>
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND <FiSend className="icon"></FiSend>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos='fade-right' data-aos-duration="1000" className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon"/> Travel.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.
            </div>

            <div data-aos='fade-up' className='footerSocials'>
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* GROUP 1 */}
            <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Services
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Payment
              </li>
            </div>
             {/* GROUP 2 */}
            <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Bookings
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Rentcars
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>HostelWorld
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Trivago
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>TripAdvisor
              </li>
            </div>
             {/* GROUP 3 */}
            <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>London
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>California
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Vietnam
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Europe
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon"/>Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - HOMINHIU 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer