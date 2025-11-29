import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={heroBanner} alt="Hero" className='banner-img' />
        <div className='hero-caption'>
          <img src={heroTitle} className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className='hero-btns'>
            <button className='btn'><img src={playIcon} />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} />More Info</button>
          </div>
          <TitleCards title="Popular on Netflix"/>
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title="Blockbuster Movie"/>
        <TitleCards title="Only on Netflix"/>
        <TitleCards title="Upcoming"/>
        <TitleCards title="Top Picks for You"/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
