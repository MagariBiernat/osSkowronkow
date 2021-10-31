import React from "react"
import styles from "./FBIcon.module.scss"

import { GrFacebook as FacebookIcon } from "react-icons/gr"
const FBUrl = "https://www.facebook.com/Apartamenty-Wesoła-101764668923279/"

const FBIcon = () => {
  return (
    <a className={styles.FBWrapper} href={FBUrl} target="_blank">
      <FacebookIcon />
    </a>
  )
}

export default FBIcon
