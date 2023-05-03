import Navbar from "@/components/Navbar"
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="description" content="Next js Practice"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="OLeei Ullah"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Homepage</title>
      </Head>
      <Navbar />
      <h1>THis is the homepage</h1>
    </>
  )
}

export default index