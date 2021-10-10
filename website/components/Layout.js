import SEO from "@components/SEO"
import Navigation from "@components/Navigation.js"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.LayoutWrapper}>
      <SEO />
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
