import Dashboard from 'components/Dashboard'
import AddCompany from 'components/forms/AddCompany'
import AddJob from 'components/forms/AddJob'
import AddRole from 'components/forms/AddRole'
import AddJobLoader from 'components/loaders/AddJobLoader'
import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from 'utils/dataFetcher'

const Add = () => {
  const { data: roles } = useSWR('/api/roles', fetcher)
  const { data: companies } = useSWR('/api/companies', fetcher)

  if (!roles || !companies)
    return (
      <Dashboard>
        <AddJobLoader />
      </Dashboard>
    )

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
        <AddJob roles={roles} companies={companies} />
        <AddCompany />
        <AddRole />
      </Dashboard>
    </>
  )
}

export default Add
