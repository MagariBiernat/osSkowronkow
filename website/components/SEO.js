import Head from "next/head"
const SEO = ({
  title = "Title Strony",
  description = "Description",
  url = "url",
  image = "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80&h=800",
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <link key="canonical" rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="Keywordsy...." />
      <meta charset="UTF-8" />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={url} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:image" property="og:image" content={image} />
    </Head>
  )
}

export default SEO
