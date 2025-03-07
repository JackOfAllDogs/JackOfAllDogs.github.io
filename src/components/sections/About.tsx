import React from "react"
import "../../styles/About.css"

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">Why Choose Jack of All Dogs?</h2>
                <div className="about-content">
                    <p className="about-text">
                        My name is Jack, and I specialise in working with large, 
                        high-energy dogs, as well as those who need extra patience, 
                        structure, and understanding. With years of experience handling 
                        working breeds, I know that every dog is different - some need 
                        structured leadership, some need confidence-building, and some 
                        simply need a consistent, familiar presence to feel secure. 
                        <br/><br/>
                        Walks with me are more than just exercise - they are an opportunity 
                        for your dog to engage, learn, and explore safely. Whether we are 
                        reinforcing good leash manners, following a routine route, or 
                        incorporating play and mental stimulation, every outing is tailored 
                        to your dog's needs.
                    </p>
                    <p className="about-text">
                        Unlike services that rely on driving from one client to another, 
                        I am fully dedicated to on-foot dog walking. This means no 
                        wasted time in a vehicle - every minute of our time together is spent 
                        outside, actually walking. Your dog gets my full attention without 
                        distractions, and I can easily adjust routes based on their energy 
                        levels, preferences, and the day's weather conditions.
                        <br/><br/>
                        My primary catchment areas include East Finchley, Fortis Green, 
                        Muswell Hill, Highgate, Alexandra Park, Hornsey and Crouch End, but 
                        I am happy to consider walks outside these locations whenever possible. 
                        If you're unsure whether I can cover your area, feel free to reach out 
                        - I am always happy to discuss options.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
