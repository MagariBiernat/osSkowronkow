import React from "react"
import Layout from "./../components/Layout"
import NotFound from "@components/NotFound"
export default function Cztery0Cztery() {
  const goBack = () => {
    window.location.href = "/"
  }

  React.useEffect(() => {
    const timeout = setTimeout(goBack, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <NotFound goBack={goBack} />
}
