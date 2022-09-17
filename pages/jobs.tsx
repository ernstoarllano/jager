import Dashboard from 'components/Dashboard'
import WelcomeLoader from 'components/loaders/WelcomeLoader'
import JobsTable from 'components/tables/Jobs'
import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const Jobs = () => {
  const { data, error } = useSWR('/api/jobs', fetcher)

  if (!data)
    return (
      <Dashboard>
        <WelcomeLoader />
      </Dashboard>
    )
  if (error) return <p>Error!</p>

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
        <JobsTable jobs={data} />
      </Dashboard>
    </>
  )
}

export default Jobs
