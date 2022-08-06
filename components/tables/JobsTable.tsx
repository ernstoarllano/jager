import Status from 'components/Status'
import { JobsTableProps } from 'interfaces/Components'
import { formatCurrency } from 'utils/formatCurrency'
import { formatDate } from 'utils/formatDate'

const JobsTable = ({ jobs }: JobsTableProps) => {
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <table className="w-full table-auto">
        <thead className="text-left bg-dusk">
          <tr>
            <th className="table-head p-5 font-medium text-day">Role</th>
            <th className="table-head p-5 font-medium text-day">Recruiter</th>
            <th className="table-head p-5 font-medium text-day">Manager</th>
            <th className="table-head p-5 font-medium text-day">Company</th>
            <th className="table-head p-5 font-medium text-day">Salary</th>
            <th className="table-head p-5 font-medium text-day">Screened On</th>
            <th className="table-head p-5 font-medium text-day">
              Interviewed On
            </th>
            <th className="table-head p-5 font-medium text-day">Eliminated</th>
          </tr>
        </thead>
        <tbody className="table-body border border-solid border-gray-200">
          {jobs.map((job) => (
            <tr
              key={job.id}
              className="border-b border-solid border-gray-200 last:border-b-0"
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
    </section>
  )
}

export default JobsTable
