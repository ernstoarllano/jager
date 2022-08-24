import Card from 'components/Card'
import Link from 'next/link'
import { formatCompany } from 'utils/formatCompany'
import { formatDateTime } from 'utils/formatDateTime'
import { formatInterviewer } from 'utils/formatInterviewer'
import { getCompanyId } from 'utils/getCompanyId'

const Schedule = ({ upcoming }: any) => {
  return (
    <Card>
      <h3 className="mb-8 text-xl font-light">Upcoming Interviews</h3>
      {upcoming && (
        <div className="space-y-2">
          {upcoming.map((interview: any) => (
            <div
              key={interview.id}
              className="flex items-center justify-between p-5 rounded-2xl even:bg-gray-50"
            >
              <div className="space-y-1">
                <span className="block font-medium">
                  {formatInterviewer(interview.recruiter || interview.manager)}
                </span>
                <span className="block text-sm text-purple-700">
                  <Link href={`/company/${getCompanyId(interview.company)}`}>
                    <a>{formatCompany(interview.company)}</a>
                  </Link>
                </span>
              </div>
              <time
                className="font-medium text-purple-700"
                dateTime={interview.screenedOn || interview.interviewedOn}
              >
                {formatDateTime(
                  interview.screenedOn || interview.interviewedOn
                )}
              </time>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default Schedule
