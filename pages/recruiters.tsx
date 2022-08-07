import Dashboard from 'components/Dashboard'
import RecruitersTable from 'components/tables/RecruitersTable'
import { RecruitersProps } from 'interfaces/Components'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getRecruiters } from 'services/getRecruiters'

const Recruiters = ({ recruiters }: RecruitersProps) => {
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
        <RecruitersTable recruiters={recruiters} />
      </Dashboard>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { recruiters } = await getRecruiters()

    return {
      props: { recruiters },
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default Recruiters
