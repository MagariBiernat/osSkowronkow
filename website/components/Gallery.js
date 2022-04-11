import React from "react"

import styles from "./Gallery.module.scss"
import Logo from "@public/images/logo-wesola-navbar.png"

import ImagesArray from "@public/gallery"
import ImagesFullSizeArray from "@public/galleryFullSize"

import Carousel, { Modal, ModalGateway } from "react-images"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  const closeLightbox = () => {
    setSelectedImage(0)
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.Wrapper} id="gallery">
        <div className="content">
          <div className={styles.Content}>
            <img src={Logo} alt="Apartamenty Wesoła" />
            <h1>Apartamenty Wesoła - Galeria</h1>
            <div className={styles.Gallery}>
              {ImagesArray.map((item, index) => (
                <img
                  src={item.source}
                  alt={`Apartamenty Dębica mieszkanie sprzedaż`}
                  key={index}
                  onClick={() => {
                    setSelectedImage(index)
                    setIsOpen(true)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={selectedImage}
              views={ImagesFullSizeArray}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Gallery
