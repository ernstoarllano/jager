import Companies from 'components/Companies'
import Dashboard from 'components/Dashboard'
import Lists from 'components/Lists'
import Managers from 'components/Managers'
import Recruiters from 'components/Recruiters'
import Roles from 'components/Roles'
import Screenings from 'components/Screenings'
import Stat from 'components/Stat'
import Stats from 'components/Stats'
import { HomeProps } from 'interfaces/Pages'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getCompanies } from 'services/getCompanies'
import { getEliminatedJobs } from 'services/getEliminatedJobs'
import { getManagers } from 'services/getManagers'
import { getRecruiters } from 'services/getRecruiters'
import { getRoles } from 'services/getRoles'
import { getScreenings } from 'services/getScreenings'
import { getTotalApplications } from 'services/getTotalApplications'
import { getTotalInterviews } from 'services/getTotalInterviews'
import { getTotalScreenings } from 'services/getTotalScreenings'

const Home = ({
  totalEliminated,
  totalScreenings,
  totalInterviews,
  totalApplications,
  roles,
  screenings,
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
          <Stat title="Eliminated" count={totalEliminated} />
          <Stat title="Screenings" count={totalScreenings} />
          <Stat title="Interviews" count={totalInterviews} />
          <Stat title="Applications" count={totalApplications} />
        </Stats>
        <Roles roles={roles} />
        <Lists>
          <Screenings screenings={screenings} />
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
    const { totalEliminated } = await getEliminatedJobs()
    const { totalScreenings } = await getTotalScreenings()
    const { totalInterviews } = await getTotalInterviews()
    const { totalApplications } = await getTotalApplications()
    const { roles } = await getRoles()
    const { screenings } = await getScreenings()
    const { companies } = await getCompanies()
    const { recruiters } = await getRecruiters()
    const { managers } = await getManagers()

    return {
      props: {
        totalEliminated,
        totalScreenings,
        totalInterviews,
        totalApplications,
        roles,
        screenings,
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
