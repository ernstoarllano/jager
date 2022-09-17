import Card from 'components/Card'
import { ScheduleProps } from 'interfaces/interfaces'
import Link from 'next/link'
import { formatCompany } from 'utils/formatCompany'
import { formatDateTime } from 'utils/formatDateTime'
import { getCompanyId } from 'utils/getCompanyId'

const Schedule = ({ upcoming }: ScheduleProps) => {
  return (
    <Card>
      <h3>Upcoming Interviews</h3>
      {upcoming && upcoming.length > 0 ? (
        <div className="space-y-2">
          {upcoming.map((interview) => (
            <div
              key={interview.id}
              className="flex items-center justify-between p-5 rounded-2xl even:bg-gray-50"
            >
              <div className="space-y-1">
                <span className="block text-sm text-purple-700">
                  <Link href={`/company/${getCompanyId(interview.company)}`}>
                    <a>{formatCompany(interview.company)}</a>
                  </Link>
                </span>
              </div>
              <time
                className="font-medium text-purple-700"
                dateTime={interview.interviewedOn || interview.screenedOn}
              >
                {formatDateTime(
                  interview.interviewedOn || interview.screenedOn
                )}
              </time>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">
                There are no scheduled interviews.
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

export default Schedule
