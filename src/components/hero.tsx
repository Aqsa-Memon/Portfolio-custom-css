'use client';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return(
    <section className="hero-section">
      <div className="hero-content">
      <h1 className="hero-title">
  Hello, I'm <span className="hero-name"> <Typewriter
    options={{
      strings: ['AQSA'],
      autoStart: true,
      loop: true,
    }}
  /></span>
</h1>
<div className="hero-subtitle">
  <Typewriter
    options={{
      strings: ['Web Developer', 'UI/UX Designer'],
      autoStart: true,
      loop: true,
    }}
  />
</div>

        <p className="hero-subtitle">As a dedicated web developer and UI/UX designer, I bring ideas to life through thoughtful, user-centered design and clean, efficient code. My goal is to create digital experiences that are not only visually stunning but also seamlessly functional.</p>
        <button className="hero-button">Explore More</button>
      </div>
      <div className="particles"></div>
    </section>
    
  )
}
  export default Hero;
  
  