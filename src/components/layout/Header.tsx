import React, { useState, useEffect } from 'react'
// import { slide as Menu } from "react-burger-menu"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import instagramLogo from "../../assets/logos/logo_instagram.svg"
import facebookLogo from "../../assets/logos/logo_facebook.png"
import whatsappLogo from "../../assets/logos/logo_whatsapp.svg"
import burgerIcon from "../../assets/logos/burger_menu.svg"
import "../../styles/Header.css"

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    // const [menuOpen, setMenuOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // MUI Menu State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    // Handle scrolling to change header height
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle window resize to determine when to switch to burger menu
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Check if mobile view (adjust the breakpoint as needed)
    const isMobile = windowWidth < 900

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <a href="/">Jack of all Dogs</a>
                </div>
                
                <div className="right-section">
                    {!isMobile && (
                        <nav className="nav-menu">
                            <a href="#about">About</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#joinThePack">Join the Pack</a>
                        </nav>
                    )}

{isMobile && (
            <>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src={burgerIcon} alt="Menu" style={{ width: "2rem", height: "2rem" }} />
                </Button>

                <Menu
                    id="mobile-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                    }}
                    transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                    }}
                >
                    <MenuItem onClick={handleClose}>
                    <a href="#about">About</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <a href="#testimonials">Testimonials</a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <a href="#joinThePack">Join the Pack</a>
                    </MenuItem>
                </Menu>
            </>
          )}

          <div className="social-links">
            <a
              href="https://instagram.com/jackofalldogsuk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/groups/jackofalldogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a
              href="https://wa.me/447980715768"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header