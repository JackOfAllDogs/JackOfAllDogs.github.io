import { useState } from "react"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        dog_name: "",
        owner_name: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("Sending...")

        try {
        const response = await fetch("https://email-worker.jackofalldogs.workers.dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setStatus("Message sent successfully!")
            setFormData({ dog_name: "", owner_name: "", email: "", message: "" })
        } else {
            setStatus("Failed to send message.")
        }
        } catch (error) {
            setStatus("Error sending message.")
        }
    }

    return (
        <div className="contact-form">
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="dog_name" placeholder="Dog's Name"
                        value={formData.dog_name} onChange={handleChange} required />
                    <input type="text" name="owner_name" placeholder="Your Name"
                        value={formData.owner_name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" 
                        value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Message" 
                        value={formData.message} onChange={handleChange} required />
                    <button type="submit">Send</button>
                </form>
        {status && <p>{status}</p>}
        </div>
    )
}

export default ContactForm
