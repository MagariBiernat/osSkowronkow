import React from "react"

import styles from "./Gallery.module.scss"
import Logo from "@public/images/logo-wesola-navbar.png"

import Lightbox from "react-image-lightbox"

import ImagesArray from "@public/gallery"
import ImagesFullSizeArray from "@public/galleryFullSize"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(-1)
  const [isOpen, setIsOpen] = React.useState(false)

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
                  src={item}
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
      {isOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={ImagesFullSizeArray[selectedImage]}
          nextSrc={
            ImagesFullSizeArray[
              (selectedImage + 1) % ImagesFullSizeArray.length
            ]
          }
          prevSrc={
            ImagesFullSizeArray[
              (selectedImage + ImagesFullSizeArray.length - 1) %
                ImagesFullSizeArray.length
            ]
          }
          onCloseRequest={() => setIsOpen(!isOpen)}
          onMovePrevRequest={() =>
            setSelectedImage(
              (selectedImage + ImagesFullSizeArray.length - 1) %
                ImagesFullSizeArray.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImage((selectedImage + 1) % ImagesFullSizeArray.length)
          }
        />
      )}
    </>
  )
}

export default Gallery
