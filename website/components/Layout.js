import SEO from "@components/SEO"
import Link from "next/link"
import Navigation from "@components/Navigation.js"
import styles from "./Layout.module.scss"
import CookieConsent, { Cookies } from "react-cookie-consent"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app

export default function Layout({ children }) {
  return (
    <div className={styles.LayoutWrapper}>
      <SEO />
      <Navigation />
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        buttonText="Rozumiem"
        cookieName="apartamentyWesolaCookieAgreement"
        style={{
          background: "#424242",
          fontSize: "0.8rem",
          fontStyle: "italic",
        }}
        contentStyle={{
          margin: "4px 16px",
        }}
        buttonStyle={{ padding: "8px 12px", fontSize: "1rem" }}
      >
        Ta strona korzysta z plików cookie, aby poprawić komfort przeglądania i
        zapewnić dodatkowe funkcje.
        <a
          className="prywatnosc_consent"
          href="/rodowesola.pdf"
          target="_blank"
        >
          {" "}
          Prywatność{" "}
        </a>
      </CookieConsent>
    </div>
  )
}
