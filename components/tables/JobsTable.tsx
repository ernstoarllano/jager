import Status from 'components/Status'
import { JobsTableProps } from 'interfaces/Components'
import Link from 'next/link'
import { formatCurrency } from 'utils/formatCurrency'
import { formatDate } from 'utils/formatDate'

const JobsTable = ({ jobs }: JobsTableProps) => {
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <article className="p-8 bg-white border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
        <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
          <h2 className="text-3xl font-bold">Jobs</h2>
          <Link href="/job/add">
            <a className="flex items-center px-6 py-3 text-sm font-semibold text-day bg-purple-500 rounded-full space-x-2">
              Add Job
            </a>
          </Link>
        </div>
        <table className="w-full table-auto">
          <thead className="text-left">
            <tr>
              <th className="table-head">Role</th>
              <th className="table-head">Recruiter</th>
              <th className="table-head">Manager</th>
              <th className="table-head">Company</th>
              <th className="table-head">Salary</th>
              <th className="table-head">Screened On</th>
              <th className="table-head">Interviewed On</th>
              <th className="table-head">Eliminated</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-solid border-gray-200 last:border-b-0"
                data-id={job.id}
              >
                <td className="table-data">
                  <span>{job.role.name}</span>
                </td>
                <td className="table-data">
                  {job.recruiter && (
                    <span>
                      {job.recruiter.firstName} {job.recruiter.lastName}
                    </span>
                  )}
                </td>
                <td className="table-data">
                  {job.manager && (
                    <span>
                      {job.manager.firstName} {job.manager.lastName}
                    </span>
                  )}
                </td>
                <td className="table-data">
                  <a
                    href={job.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company.name}
                  </a>
                </td>
                <td className="table-data">{formatCurrency(job.salary)}</td>
                <td className="table-data">
                  {job.screenedOn && <span>{formatDate(job.screenedOn)}</span>}
                </td>
                <td className="table-data">
                  {job.interviewedOn && (
                    <span>{formatDate(job.interviewedOn)}</span>
                  )}
                </td>
                <td className="table-data">
                  <Status eliminated={job.eliminated} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default JobsTable
