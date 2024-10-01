import React from 'react'
import nightcity from '../assets/nightcity.mp4'

const Hero = () => {
  return (
    <div className='hero-container'>
        <video

        className='background-video'
        autoPlay
        loop
        muted
        playsInline
        >
            <source src={nightcity} type='video/mp4'/>
        </video>
        
    </div>
  )
}
  
export default Hero