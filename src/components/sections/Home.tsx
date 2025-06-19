import "../../styles/Home.css"
import jackImage from "../../assets/images/jack.webp"

const Home = () => {
  return (
    <section className="home">
      <img src={jackImage} alt="Jack" className="home-image" />
    </section>
  )
}

export default Home
