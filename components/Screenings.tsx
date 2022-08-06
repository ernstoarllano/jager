import { ScreeningsProps } from 'interfaces/Components'
import Link from 'next/link'
import { formatDateTime } from 'utils/formatDateTime'

const Screenings = ({ screenings }: ScreeningsProps) => {
  return (
    <article className="lg:col-span-12 p-8 border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Scheduled Screenings</span>
        <Link href="/">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <table className="w-full table-auto">
        <thead className="text-left">
          <tr>
            <th className="table-head">Date</th>
            <th className="table-head">Recruiter</th>
            <th className="table-head">Company</th>
            <th className="table-head">Role</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {screenings.map((screening) => (
            <tr
              key={screening.id}
              className="border-b border-solid border-gray-200 last:border-b-0"
            >
              <td className="table-data">
                <time className="font-medium text-purple-500">
                  {formatDateTime(screening.screenedOn)}
                </time>
              </td>
              <td className="table-data">
                {screening.recruiter && (
                  <span>
                    {screening.recruiter.firstName}{' '}
                    {screening.recruiter.lastName}
                  </span>
                )}
              </td>
              <td className="table-data">
                <span>{screening.company.name}</span>
              </td>
              <td className="table-data">
                <span>{screening.role.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Screenings
