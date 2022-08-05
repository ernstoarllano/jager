import Dashboard from 'components/Dashboard'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

const Recruiters = () => {
  return (
    <>
      <Head>
        <title>Jäger</title>
        <meta property="og:image" content="/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="759" />
        <meta property="og:image:height" content="485" />
      </Head>
      <Dashboard></Dashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      props: {},
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}

export default Recruiters
