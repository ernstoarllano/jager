import Card from 'components/Card'
import { ChartProps } from 'interfaces/interfaces'
import Link from 'next/link'
import { getPercentage } from 'utils/getPercentage'
import { VictoryPie } from 'victory'

const Chart = ({ interviews, applied, eliminated, hired }: ChartProps) => {
  return (
    <Card>
      <h3>Jobs Status</h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="order-2 lg:order-1 lg:w-2/3">
          <svg viewBox="0 0 400 400">
            <VictoryPie
              standalone={false}
              width={400}
              height={400}
              colorScale={['#FBBF24', '#FB7185', '#4ADE80']}
              data={[
                { x: 1, y: getPercentage(interviews, applied) },
                { x: 2, y: getPercentage(eliminated, applied) },
                { x: 2, y: getPercentage(hired, applied) },
              ]}
              innerRadius={110}
              labelRadius={100}
              style={{ labels: { display: 'none' } }}
            />
          </svg>
        </div>
        <div className="order-1 lg:order-2 flex lg:flex-col items-center lg:items-start justify-center lg:justify-start lg:w-1/3 space-x-6 lg:space-x-0 lg:space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-amber-400 rounded-sm"></div>
            <div className="text-sm">
              <span className="block font-bold">
                {getPercentage(interviews, applied)}%
              </span>{' '}
              Interviewed
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-rose-400 rounded-sm"></div>
            <div className="text-sm">
              <span className="block font-bold">
                {getPercentage(eliminated, applied)}%
              </span>{' '}
              Eliminated
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
            <div className="text-sm">
              <span className="block font-bold">
                {getPercentage(hired, applied)}%
              </span>{' '}
              Hired
            </div>
          </div>
        </div>
      </div>
      <Link href="/job/add">
        <a className="self-start mt-4 text-sm font-medium text-purple-700">
          Add Job
        </a>
      </Link>
    </Card>
  )
}

export default Chart
