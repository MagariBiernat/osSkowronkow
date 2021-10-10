import React from "react"
import styles from "./Contact.module.scss"

import LogoBorysDeweloper from "@public/images/LogoBorysDeweloper.png"
import ContactImage from "@public/images/Contact.png"

import ContactMap from "@public/images/ContactMap.png"
import GmailLogo from "@public/icons/Gmail logo.png"
import Marker from "@public/icons/Marker.png"
import Mobile from "@public/icons/Mobile.png"

const Contact = () => {
  return (
    <div className={styles.Wrapper} id="contact">
      <div className="content">
        <div className={styles.Content}>
          <a
            href="https://www.google.com/maps/place/Wesoła,+39-200+Dębica/@50.051095,21.445257,16z/data=!4m5!3m4!1s0x473d099ef1e1fc3f:0x7d633f8793977518!8m2!3d50.0510948!4d21.4452573?hl=pl"
            target="_blank"
          >
            <img src={ContactMap} alt="Apartamenty Wesoła - Lokalizacja" />
          </a>
          <div>
            <h1>BIURO SPRZEDAŻY MIESZKAŃ</h1>
            <img src={LogoBorysDeweloper} alt="Grupa Borys Deweloper" />
            <p className={styles.Date}>poniedziałek - piątek</p>
            <p className={styles.Date}>8:00 - 16:00</p>
            <div>
              <img src={Mobile} alt="Telefon" />
              <p className={styles.Bold}>
                +48 600 467 817 <br /> +48 606 691 578
              </p>
            </div>
            <div>
              <img src={GmailLogo} alt="Mail" />{" "}
              <p>grupaborysdeweloper@wp.pl</p>
            </div>
            <div>
              <img src={Marker} alt="Adres" />
              <p>
                GAWRZYŁOWSKA 69A <br /> 39-200 DĘBICA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
