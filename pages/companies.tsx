import Dashboard from 'components/Dashboard'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getCompanies } from 'services/getCompanies'

const Companies = ({ companies }: any) => {
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
    const { companies } = await getCompanies()

    return {
      props: { companies },
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default Companies
