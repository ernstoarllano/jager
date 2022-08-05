import Companies from 'components/Companies'
import Dashboard from 'components/Dashboard'
import Lists from 'components/Lists'
import Recruiters from 'components/Recruiters'
import Roles from 'components/Roles'
import ScheduledInterviews from 'components/ScheduledInterviews'
import Stat from 'components/Stat'
import Stats from 'components/Stats'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Jäger</title>
      </Head>
      <Dashboard>
        <Stats>
          <Stat title="Eliminated" count={1} />
          <Stat title="Interviews" count={1} />
          <Stat title="Applications" count={1} />
        </Stats>
        <Roles />
        <Lists>
          <Companies />
          <Recruiters />
          <ScheduledInterviews />
        </Lists>
      </Dashboard>
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

export default Home
