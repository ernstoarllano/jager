import Status from 'components/Status'
import { JobsTableProps } from 'interfaces/Components'
import { formatCurrency } from 'utils/formatCurrency'
import { formatDate } from 'utils/formatDate'

const JobsTable = ({ jobs }: JobsTableProps) => {
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <table className="w-full table-auto">
        <thead className="text-left">
          <tr>
            <th className="table-head">Role</th>
            <th className="table-head">Recruiter</th>
            <th className="table-head">Manager</th>
            <th className="table-head">Company</th>
            <th className="table-head">Pay</th>
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
            >
              <td className="py-5">
                <span>{job.role.name}</span>
              </td>
              <td className="py-5">
                {job.recruiter && (
                  <span>
                    {job.recruiter.firstName} {job.recruiter.lastName}
                  </span>
                )}
              </td>
              <td className="py-5">
                {job.manager && (
                  <span>
                    {job.manager.firstName} {job.manager.lastName}
                  </span>
                )}
              </td>
              <td className="py-5">
                <a
                  href={job.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.company.name}
                </a>
              </td>
              <td className="py-5">{formatCurrency(job.salary)}</td>
              <td className="py-5">
                {job.screenedOn && <span>{formatDate(job.screenedOn)}</span>}
              </td>
              <td className="py-5">
                {job.interviewedOn && (
                  <span>{formatDate(job.interviewedOn)}</span>
                )}
              </td>
              <td className="py-5 text-center">
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
