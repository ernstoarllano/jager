import Dashboard from 'components/Dashboard'
import ManagersTable from 'components/tables/ManagersTable'
import { ManagersProps } from 'interfaces/Pages'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getManagers } from 'services/getManagers'

const Managers = ({ managers }: ManagersProps) => {
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
        <ManagersTable managers={managers} />
      </Dashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { managers } = await getManagers()

    return {
      props: { managers },
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default Managers
