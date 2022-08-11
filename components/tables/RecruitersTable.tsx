import { PlusIcon } from '@heroicons/react/outline'
import Experience from 'components/Experience'
import { RecruitersTableProps } from 'interfaces/Components'

const RecruitersTable = ({ recruiters }: RecruitersTableProps) => {
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <article className="p-8 bg-white border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
        <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
          <h2 className="text-3xl font-bold">Recruiters</h2>
          <button className="flex items-center px-6 py-3 text-sm font-semibold text-day bg-purple-500 rounded-full space-x-2">
            <span>Add New Manager</span>
            <PlusIcon className="w-4 h-4 stroke-[3px] stroke-day" />
          </button>
        </div>
        <table className="w-full table-auto">
          <thead className="text-left">
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Company</th>
              <th className="table-head">LinkedIn</th>
              <th className="table-head">Experience</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {recruiters.map((recruiter) => (
              <tr
                key={recruiter.id}
                className="border-b border-solid border-gray-200 last:border-b-0"
              >
                <td className="table-data">
                  <span>
                    {recruiter.firstName} {recruiter.lastName}
                  </span>
                </td>
                <td className="table-data">
                  {recruiter.company && (
                    <span>{recruiter.company[0].name}</span>
                  )}
                </td>
                <td className="table-data">
                  {recruiter.linkedIn && (
                    <a
                      className="inline-flex items-center"
                      href={recruiter.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        className="w-5 h-5 mr-2 fill-blue-500"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                  )}
                </td>
                <td className="table-data">
                  <Experience experience={recruiter.positiveExperience} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default RecruitersTable