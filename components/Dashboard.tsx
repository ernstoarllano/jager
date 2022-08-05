import Header from 'components/Header'
import Logo from 'components/Logo'
import Nav from 'components/Nav'
import { DashboardProps } from 'interfaces/Dashboard'

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <main className="lg:grid lg:grid-cols-12 lg:h-screen">
      <aside className="col-span-2 p-10 bg-night border-r border-solid border-gray-200 space-y-12">
        <Logo />
        <Nav />
      </aside>
      <div className="col-span-10">
        <Header />
        {children}
      </div>
    </main>
  )
}

export default Dashboard
