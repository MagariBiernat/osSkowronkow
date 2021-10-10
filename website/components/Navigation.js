import React from "react"
import styles from "./Navigation.module.scss"
import Logo from "@public/images/logo-wesola-navbar.png"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"
import cn from "classnames"
import { Link } from "react-scroll"

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <nav className={styles.NavWrapper}>
      <div className="content">
        <div className={styles.NavbarLogo}>
          <img src={Logo} />
        </div>
        <div className={styles.Menu}>
          <ul>
            <li>
              <Link to="investment" smooth={true}>
                <p>inwestycja</p>
              </Link>
            </li>
            <li>
              <Link to="offer" smooth={true}>
                <p>mieszkania</p>
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true}>
                <p>galeria</p>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
                <p>kontakt</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.MenuMobile}>
          <Hamburger onClick={() => setMobileOpen(!mobileOpen)} />
          <div
            className={cn([
              styles.MenuMobileContent,
              { [styles.slideIn]: mobileOpen },
              { [styles.slideOut]: !mobileOpen },
            ])}
          >
            <ul>
              <li>
                <Link
                  to="investment"
                  smooth={true}
                  onClick={() => setMobileOpen(false)}
                >
                  <p>inwestycja</p>
                </Link>
              </li>
              <li>
                <Link
                  to="offer"
                  smooth={true}
                  onClick={() => setMobileOpen(false)}
                >
                  <p>mieszkania</p>
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  smooth={true}
                  onClick={() => setMobileOpen(false)}
                >
                  <p>galeria</p>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  onClick={() => setMobileOpen(false)}
                >
                  <p>kontakt</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
