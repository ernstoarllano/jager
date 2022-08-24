import Card from 'components/Card'
import Status from 'components/Status'
import { RecentProps } from 'interfaces/interfaces'
import Link from 'next/link'
import { formatCompany } from 'utils/formatCompany'
import { formatDate } from 'utils/formatDate'
import { formatRole } from 'utils/formateRole'
import { getCompanyId } from 'utils/getCompanyId'

const Recent = ({ recent }: RecentProps) => {
  console.log(recent)
  return (
    <Card>
      <h3 className="mb-8 text-lg font-regular">Recent Applications</h3>
      {recent && (
        <div className="space-y-2">
          {recent.map((job) => (
            <div
              key={job.id}
              className="lg:flex lg:items-center lg:justify-between p-5 rounded-2xl even:bg-gray-50"
            >
              <div className="lg:w-1/2">
                <span className="block font-medium">
                  {formatRole(job.role)}
                </span>
                <span className="block text-sm text-purple-700">
                  <Link href={`/company/${getCompanyId(job.company)}`}>
                    <a>{formatCompany(job.company)}</a>
                  </Link>
                </span>
              </div>
              <div className="lg:w-1/4">
                <span className="block text-base text-gray-500">
                  {formatDate(job.appliedOn)}
                </span>
              </div>
              <div className="lg:w-1/4 lg:text-right">
                <Status
                  screened={job.screened}
                  interviewed={job.interviewed}
                  eliminated={job.eliminated}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default Recent
