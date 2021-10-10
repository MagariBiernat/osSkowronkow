import React from "react"

import styles from "./Gallery.module.scss"
import Logo from "@public/images/logo-wesola-navbar.png"

import ImagesArray from "@public/gallery"
const Gallery = () => {
  return (
    <div className={styles.Wrapper} id="gallery">
      <div className="content">
        <div className={styles.Content}>
          <img src={Logo} alt="Apartamenty Wesoła" />
          <h1>Galeria</h1>
          <div className={styles.Gallery}>
            {ImagesArray.map((item, index) => (
              <img src={item} alt={`Zdjęcie ${index}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
