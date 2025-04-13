import { useState, useEffect } from "react"
import Header from "./components/layout/Header"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Testimonials from "./components/sections/Testimonials"
import JoinThePack from "./components/sections/JoinThePack.tsx"
import Footer from "./components/layout/Footer"
import "./styles/Home.css"

const App = () => {
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        const updateHeight = () => {
            const header = document.querySelector("header")
            if (header) {
                setHeaderHeight(header.offsetHeight)
            }
        }
    
        updateHeight()
        window.addEventListener("resize", updateHeight)
        return () => window.removeEventListener("resize", updateHeight)
    }, [])

    return (
        <>
            <Header />
            <main style={{ paddingTop: `${headerHeight}px` }}>
                <section id="home" ><Home /></section>
                <section id="about"><About /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="joinThePack"><JoinThePack /></section>
            </main>
            <Footer />
        </>
    )
}

export default App
