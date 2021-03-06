import React from "react"
import styles from "./Investment.module.scss"

import Logo from "@public/images/logo-wesola-navbar.png"

import ShopIcon from "@public/icons/Shopping Cart.png"
import ChurchIcon from "@public/icons/Church.png"
import ToyIcon from "@public/icons/Toy Car.png"
import CapsuleIcon from "@public/icons/Capsules.png"

const Investment = () => {
  return (
    <div className={styles.Wrapper} id="investment">
      <div className="content">
        <div className={styles.Content}>
          <img src={Logo} alt="Wesoła" />
          <div className={styles.Description}>
            <p>
              <span className={styles.Bold}>Apartamenty WESOŁA </span> to druga
              z kolei, oprócz
              <span className={styles.Bold}> Osiedla SKOWRONKÓW </span>
              inwestycja realizowana przez rodzinną firmę BORYS DEWELOPER. Przy
              ulicy Wesołej w Dębicy powstanie nowoczesny kompleks 46 mieszkań.
              Zaprojektowano 5 szeregów, gdzie mieszkania na parterze będą
              posiadały własne ogrody oraz odpowiednio większe i przestronne
              apartamenty z balkonami na piętrze. Oferujemy różnorodne metraże,
              od 53 mkw do 74 mkw.
            </p>
            <p className={styles.Bold} style={{ marginTop: "4px" }}>
              <a href="http://skowronkow.com" target="_blank">
                ZOBACZ OSIEDLE SKOWRONKÓW
              </a>
            </p>
            <p className={styles.MarginTop}>
              Atrakcyjne położenie, bliskość terenów rekreacyjnych oraz
              korzystne połączenie z centrum sprawiają, że powstające osiedle
              będzie doskonałym miejscem dla wszystkich, którzy cenią sobie
              uroki spokoju, a także swobodny dostęp do wszelkich udogodnień
              oferowanych przez tętniącą życiem aglomerację miejską.
              <span className={styles.Bold}>Apartamenty WESOŁA</span> to jedno z
              najbardziej perspektywicznych miejsc Dębicy.
            </p>
          </div>
          <div className={styles.Details}>
            <div>
              <img src={ShopIcon} alt="Sklep" />
              <p>sklep</p>
              <p>600m</p>
            </div>
            <div>
              <img src={ChurchIcon} alt="Kosciół" />
              <p>kościół</p>
              <p>2000m</p>
            </div>
            <div>
              <img src={ToyIcon} alt="Przedszkole" />
              <p>przedszkole</p>
              <p>350m</p>
            </div>
            <div>
              <img src={CapsuleIcon} alt="Apteka" />
              <p>apteka</p>
              <p>1300m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment
