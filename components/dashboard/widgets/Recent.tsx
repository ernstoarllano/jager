import Card from 'components/Card'
import Status from 'components/Status'
import { RecentProps } from 'interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { formatCompany } from 'utils/formatCompany'
import { formatDate } from 'utils/formatDate'
import { formatRole } from 'utils/formateRole'
import { formatLogo } from 'utils/formatLogo'
import { formatWebsite } from 'utils/formatWebsite'
import { getCompanyId } from 'utils/getCompanyId'

const Recent = ({ recent }: RecentProps) => {
  return (
    <Card>
      <h3>Recent Applications</h3>
      {recent && (
        <div className="space-y-2">
          {recent.map((job) => (
            <div
              key={job.id}
              className="lg:flex lg:items-center lg:justify-between p-5 rounded-2xl even:bg-gray-50"
            >
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-3">
                  <a
                    className="flex flex-col items-center relative"
                    href={formatWebsite(job.company)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={formatLogo(job.company)}
                      alt={formatCompany(job.company)}
                      width={40}
                      height={40}
                    />
                  </a>
                  <div>
                    <span className="block font-medium">
                      {formatRole(job.role)}
                    </span>
                    <span className="block text-sm text-purple-700">
                      <Link href={`/company/${getCompanyId(job.company)}`}>
                        <a>{formatCompany(job.company)}</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4">
                <span className="block text-sm text-gray-500">
                  {formatDate(job.appliedOn)}
                </span>
              </div>
              <div className="lg:w-1/4 lg:text-right">
                <Status
                  screenedOn={job.screenedOn}
                  interviewedOn={job.interviewedOn}
                  eliminatedOn={job.eliminatedOn}
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
