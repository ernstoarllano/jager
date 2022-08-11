import Dashboard from 'components/Dashboard'
import AddJobForm from 'components/forms/AddJobForm'
import Head from 'next/head'

const AddJob = () => {
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
        <AddJobForm />
      </Dashboard>
    </>
  )
}

export default AddJob
