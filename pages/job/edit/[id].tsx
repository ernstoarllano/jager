import Dashboard from 'components/Dashboard'
import EditJob from 'components/forms/EditJob'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const Edit = ({ id }: any) => {
  const { data, error } = useSWR(`/api/job/${id}`, fetcher)

  if (!data) return <Dashboard>Loading...</Dashboard>
  if (error) return <Dashboard>Failed to load</Dashboard>

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
        <EditJob data={data} />
      </Dashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  return {
    props: {
      id: parseInt(id as string),
    },
  }
}

export default Edit
