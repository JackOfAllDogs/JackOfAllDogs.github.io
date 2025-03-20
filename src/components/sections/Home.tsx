import "../../styles/Home.css"
import jackImage from "../../assets/images/jack.webp"

const Home = () => {
  return (
    <section className="home">
      <img src={jackImage} alt="Jack" className="home-image" loading="lazy" />
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="fade-overlay"></div> {/* Fade effect at the bottom */}
    </section>
  )
}

export default Home
