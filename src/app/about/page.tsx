import Image from 'next/image';

const About = () => {
  return(
  <section className="about-section">
    <div className="about-container">
      <div className="about-image-container">
        <Image src="/pics.png" width={400} height={400} alt="my pic" className="about-image" />
      </div>
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        With a deep passion for design and development, I bring creativity and precision to every project I take on. I believe in creating digital experiences that are as functional as they are visually engaging. From sleek user interfaces to responsive, efficient code, my goal is to connect with users in meaningful ways. Driven by curiosity and innovation, {`I’m`} always exploring new trends to craft experiences that stand out
        </p>
        <button className="about-button">Learn More</button>
      </div> 
    </div>
  </section>
)
}
export default About
