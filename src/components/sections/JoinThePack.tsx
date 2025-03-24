import "../../styles/JoinThePack.css"
import ContactForm from "./ContactForm"

const JoinThePack = () => {
    return (
        <section className="joinThePack">
            <div className="services">
                <h2>Tailored Walks for Every Dog</h2>
                <p>
                    I provide one-on-one walks tailored to your dog's needs, ensuring a structured, 
                    engaging, and fulfilling experience. A full hour walk is available for <strong>£22</strong>. 
                    For more details, feel free to reach out.
                </p>
            </div>

            <ContactForm />
        </section>
    )
}

export default JoinThePack
