import React from "react"
import styles from "./Offer.module.scss"

import OfertaZdjecie from "@public/images/oferta1.png"
import Logo from "@public/images/logo-wesola-navbar.png"

import { animateScroll as scroll, Link } from "react-scroll"

import PreviewIcon from "@public/icons/Preview.png"
import AskIcon from "@public/icons/Ask.png"

const Offer = () => {
  const [floor, setFloor] = React.useState("parter")
  const [showMore, setShowMore] = React.useState(false)
  const [pietro, setPietro] = React.useState(null)
  const [parter, setParter] = React.useState(null)

  React.useEffect(() => {
    const getPietro = async () => {
      await fetch("/Pietro.json")
        .then((res) => res.json())
        .then((res) => setPietro(res))
    }

    const getParter = async () => {
      await fetch("/Parter.json")
        .then((res) => res.json())
        .then((res) => setParter(res))
    }
    getPietro()
    getParter()
  }, [])
  const handleGoBottom = () => {
    scroll.scrollToBottom()
  }
  return (
    <>
      <div className={styles.Wrapper} id="offer">
        <div className="content">
          <div className={styles.Content}>
            <img
              src={Logo}
              alt="Apartamenty Wesoła"
              className={styles.ContentTopLogo}
            />
            <h1 className={styles.ContentTopTitle}>
              Mieszkania na sprzedaż w naszej ofercie
            </h1>
            <img
              src={OfertaZdjecie}
              alt="Apartamenty Wesoła"
              className={styles.ContentImage}
            />
            <p className={styles.ContentP}>Wybierz poziom</p>
            <div className={styles.ContentButtonsContainer}>
              <button
                className={floor === "parter" ? "active" : undefined}
                onClick={() => setFloor("parter")}
              >
                <h5>Parter</h5>
              </button>
              <button
                className={floor === "pietro" ? "active" : undefined}
                onClick={() => setFloor("pietro")}
              >
                <h5>Piętro</h5>
              </button>
            </div>
            <p className={styles.ContentP}>Wybierz mieszkanie</p>
          </div>
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className={styles.ShowMore}
        >
          {showMore ? "Pokaż mniej" : "Pokaż wiecej"}
        </button>
        <div className={`${styles.TableWrapper} ${showMore && styles.Active}`}>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>Numer</th>
                  <th>Poziom</th>
                  <th>Liczba pokoi</th>
                  <th>
                    Metraż
                    <br />
                    (mkw)
                  </th>
                  <th>
                    Ogród
                    <br />
                    (mkw)
                  </th>
                  <th>Status</th>
                  <th>Podgląd</th>
                  <th>Zapytaj</th>
                </tr>
              </thead>
              <tbody>
                {floor === "parter"
                  ? parter?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.numer}</td>
                        <td>{item.floor}</td>
                        <td>{item.rooms}</td>
                        <td>{item.yardage}</td>
                        <td>{item.garden}</td>
                        <td>{item.status ? "Dostępne" : "Niedostępne"}</td>
                        <td>
                          <a href={item.previewLink} target="_blank">
                            <img
                              src={PreviewIcon}
                              alt="Apartamenty Dębica mieszkanie sprzedaż"
                            />
                          </a>
                        </td>
                        <td>
                          <Link to="contact">
                            <img
                              src={AskIcon}
                              alt=""
                              onClick={handleGoBottom}
                            />
                          </Link>
                        </td>
                      </tr>
                    ))
                  : pietro?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.numer}</td>
                        <td>{item.floor}</td>
                        <td>{item.rooms}</td>
                        <td>{item.yardage}</td>
                        <td>{item.garden ? item.garden : "Brak"}</td>
                        <td>{item.status ? "Dostępne" : "Niedostępne"}</td>
                        <td>
                          <a href={item.previewLink} target="_blank">
                            <img
                              src={PreviewIcon}
                              alt="Apartamenty Dębica mieszkanie sprzedaż"
                            />
                          </a>
                        </td>
                        <td>
                          <Link to="contact">
                            <img
                              src={AskIcon}
                              alt=""
                              onClick={handleGoBottom}
                            />
                          </Link>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
