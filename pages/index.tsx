import Dashboard from 'components/Dashboard'
import Welcome from 'components/dashboard/Welcome'
import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const Home = () => {
  const { data, error } = useSWR('/api/stats', fetcher)

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
        <Welcome data={data} error={error} />
      </Dashboard>
    </>
  )
}

export default Home
