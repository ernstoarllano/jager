import Dashboard from 'components/Dashboard'
import AddCompany from 'components/forms/AddCompany'
import AddJob from 'components/forms/AddJob'
import Head from 'next/head'

const Add = () => {
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
        <AddCompany />
        <AddJob />
      </Dashboard>
    </>
  )
}

export default Add
