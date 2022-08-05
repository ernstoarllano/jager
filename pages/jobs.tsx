import Dashboard from 'components/Dashboard'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

const Jobs = () => {
  return (
    <>
      <Head>
        <title>Jäger</title>
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

export default Jobs
