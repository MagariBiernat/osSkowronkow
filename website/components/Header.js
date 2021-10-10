import React from "react"
import Slider from "react-slick"
import Head from "next/head"
import styles from "./Header.module.scss"

import header1 from "@public/images/header1.png"
import header2 from "@public/images/header2.png"
import header3 from "@public/images/header3.png"

const sliderSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000 * 5,
}

const images = [header1, header2, header3]

const Header = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/slick.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick-theme.css" />
      </Head>
      <header className={styles.HeaderWrapper}>
        <div className="content">
          <Slider {...sliderSettings}>
            {images.map((item, index) => (
              <div className={styles.SliderElement} key={index}>
                <img src={item} />
              </div>
            ))}
          </Slider>
          <div className={styles.HeaderInfo}>
            <div>
              <h1>
                KOMFORT I JAKOŚĆ
                <br /> ZA ROZSĄDNĄ CENĘ
              </h1>
              <p className={styles.Wymiar}>nowy wymiar domu</p>
              <p>Zadzwoń teraz</p>
              <h2>606 467 817</h2>
              <h2>606 691 578</h2>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
