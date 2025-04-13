import React from "react"
import "../../styles/Footer.css"
import footerImage from "../../assets/images/footer_image.webp"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={footerImage} alt="Coldfall snow" className="home-image" loading="lazy" />
            <div className="fade-overlay-footer"></div>
            <div className="footer-content">
                <div className="footer-left">
                    <span>© {new Date().getFullYear()} Jack of all dogs</span>
                </div>
                <div className="footer-centre">
                    <span>
                        Photos by <a href="https://mashamaxwell.co.uk/" target="_blank" rel="noopener noreferrer">Masha Maxwell</a>
                    </span>
                </div>
                <div className="footer-right">
                    <span>
                        Powered by <a href="https://hajdicdesigns.co.uk/" target="_blank" rel="noopener noreferrer">Hajdic designs</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
