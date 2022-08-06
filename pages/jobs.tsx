import Dashboard from 'components/Dashboard'
import JobsTable from 'components/tables/JobsTable'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getJobs } from 'services/getJobs'

const Jobs = ({ jobs }: any) => {
  return (
    <>
      <Head>
        <title>Jäger</title>
        <meta property="og:image" content="/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="759" />
        <meta property="og:image:height" content="485" />
      </Head>
      <Dashboard>
        <JobsTable jobs={jobs} />
      </Dashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { jobs } = await getJobs()

    return {
      props: { jobs },
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default Jobs
