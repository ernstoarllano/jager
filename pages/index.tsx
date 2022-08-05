import Companies from 'components/Companies'
import Dashboard from 'components/Dashboard'
import Lists from 'components/Lists'
import Managers from 'components/Managers'
import Recruiters from 'components/Recruiters'
import Roles from 'components/Roles'
import ScheduledInterviews from 'components/ScheduledInterviews'
import Stat from 'components/Stat'
import Stats from 'components/Stats'
import { HomeProps } from 'interfaces/Pages'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getCompanies } from 'services/getCompanies'
import { getEliminatedJobs } from 'services/getEliminatedJobs'
import { getJobRoles } from 'services/getJobRoles'
import { getManagers } from 'services/getManagers'
import { getRecruiters } from 'services/getRecruiters'
import { getTotalApplications } from 'services/getTotalApplications'

const Home = ({
  roles,
  eliminated,
  applications,
  companies,
  recruiters,
  managers,
}: HomeProps) => {
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
        <Stats>
          <Stat title="Eliminated" count={eliminated} />
          <Stat title="Interviews" count={1} />
          <Stat title="Applications" count={applications} />
        </Stats>
        <Roles roles={roles} />
        <Lists>
          <ScheduledInterviews />
          <Companies companies={companies} />
          <Recruiters recruiters={recruiters} />
          <Managers managers={managers} />
        </Lists>
      </Dashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { eliminated } = await getEliminatedJobs()
    const { applications } = await getTotalApplications()
    const { roles } = await getJobRoles()
    const { companies } = await getCompanies()
    const { recruiters } = await getRecruiters()
    const { managers } = await getManagers()

    return {
      props: {
        eliminated,
        applications,
        roles,
        companies,
        recruiters,
        managers,
      },
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default Home
