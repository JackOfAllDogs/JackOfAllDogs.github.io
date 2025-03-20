import "../../styles/JoinThePack.css"

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

            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form action="https://contact-form.jackofalldogs.workers.dev/" method="POST">
                    <input type="text" name="dog_name" placeholder="Dog's Name" required />
                    <input type="text" name="owner_name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default JoinThePack
