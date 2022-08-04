import Applications from 'components/Applications'
import Companies from 'components/Companies'
import Header from 'components/Header'
import Interviews from 'components/Interviews'
import Lists from 'components/Lists'
import Logo from 'components/Logo'
import Nav from 'components/Nav'
import Recruiters from 'components/Recruiters'
import Rejections from 'components/Rejections'
import Roles from 'components/Roles'
import Stats from 'components/Stats'

const Dashboard = ({ children }: any) => {
  return (
    <main className="grid grid-cols-12 h-screen">
      <aside className="col-span-2 p-10 border-r border-solid border-gray-200 space-y-12">
        <Logo />
        <Nav />
      </aside>
      <div className="col-span-10">
        <Header />
        <Stats>
          <Rejections />
          <Interviews classes="border-l border-r border-solid border-gray-200" />
          <Applications />
        </Stats>
        <Roles />
        <Lists>
          <Companies />
          <Recruiters />
        </Lists>
        {children}
      </div>
    </main>
  )
}

export default Dashboard
