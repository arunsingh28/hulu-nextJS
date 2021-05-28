import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* headers */}
      <Header />

      {/* nav */}
      <Nav/>

    </>
  )
}
