import WelcomeMessage from 'components/dashboard/WelcomeMessage'
import Chart from 'components/dashboard/widgets/Chart'
import Count from 'components/dashboard/widgets/Count'
import Offers from 'components/dashboard/widgets/Offers'
import Recent from 'components/dashboard/widgets/Recent'

import { WelcomeProps } from 'interfaces/interfaces'

const Welcome = ({ data }: WelcomeProps) => {
  console.log(data)
  return (
    <section className="p-10 space-y-12">
      <WelcomeMessage />
      <div className="lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:gap-8">
        <div className="lg:col-span-3 lg:row-span-2 lg:row-start-1 lg:row-end-4">
          <Count text="Total Applied" count={data.applied} />
        </div>
        <div className="lg:col-span-3 lg:row-span-2 lg:row-start-4 lg:row-end-7">
          <Count text="Total Interviews" count={data.interviews} />
        </div>
        <div className="lg:col-span-4 lg:row-span-full">
          <Chart
            interviews={data.interviews}
            applied={data.applied}
            eliminated={data.eliminated}
            hired={data.hired}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-full">
          <Offers offers={data.offers} />
        </div>
      </div>
      <Recent recent={data.recent} />
    </section>
  )
}

export default Welcome
