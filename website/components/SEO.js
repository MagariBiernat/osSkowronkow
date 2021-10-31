import Head from "next/head"

import imageLogo from "@public/images/logo-wesola-navbar.png"
const SEO = ({
  title = "Apartamenty Wesoła - Nowe mieszkania w Dębicy",
  description = "Nowe, komfortowe, w nowoczesnym stylu apartamenty, które powstają w zabudowie szeregowej przy ulicy Wesołej w Dębicy. Do dyspozycji na piętrze z balkonem lub na parterze z prywatnym ogrodem. Zajrzyj tutaj i sprawdź, jakie mieszkania budują się na podkarpaciu.",
  url = "https://apartamentywesola.com",
  image = { imageLogo },
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link key="canonical" rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content=" Mieszkanie, Apartamenty, Dębica, Sprzedaż mieszkania, mieszkanie 3 pokojowe, mieszkanie 4 pokojowe, apartamenty, apartamenty wesoła, podkarpacie "
      />
      <meta charset="UTF-8" />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={url} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:image" property="og:image" content={image} />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}
      ></script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=586934499418245&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
  )
}

export default SEO
