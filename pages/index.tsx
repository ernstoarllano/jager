import Dashboard from 'components/Dashboard'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jäger</title>
      </Head>
      <Dashboard />
    </>
  )
}

export default Home
