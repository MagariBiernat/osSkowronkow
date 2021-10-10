import Header from "@components/Header"
import Investment from "@components/Investment"
import Offer from "@components/Offer"
import Layout from "@components/Layout"
import React from "react"
import Gallery from "@components/Gallery"
import Contact from "@components/Contact"

import Slide from "@components/Slide"

const Index = () => {
  return (
    <Layout>
      <Header />
      <Slide duration={0.6} from={"left"}>
        <Investment />
      </Slide>
      <Slide duration={0.8} from={"right"}>
        <Offer />
      </Slide>
      <Slide duration={0.8} from={"left"}>
        <Gallery />
      </Slide>
      <Slide duration={0.6} from={"right"}>
        <Contact />
      </Slide>
    </Layout>
  )
}

export default Index
