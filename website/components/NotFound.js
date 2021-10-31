import React from "react"
import styles from "./NotFound.module.scss"
import Logo from "@public/images/logo-wesola-navbar.png"

const NotFound = ({ goBack }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <img src={Logo} alt="" />
        <h1>Nie znaleziono strony,</h1>
        <h4>za chwilę zostaniesz przekierowany na stronę główną...</h4>
        <button onClick={goBack}>Strona główna</button>
      </div>
    </div>
  )
}

export default NotFound
