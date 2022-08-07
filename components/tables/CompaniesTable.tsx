import { GlobeAltIcon, PlusIcon } from '@heroicons/react/outline'
import { CompaniesTableProps } from 'interfaces/Components'

const CompaniesTable = ({ companies }: CompaniesTableProps) => {
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <article className="p-8 border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
        <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
          <h2 className="text-3xl font-bold">Companies</h2>
          <button className="flex items-center px-6 py-3 text-sm font-semibold text-day bg-purple-500 rounded-full space-x-2">
            <span>Add New Manager</span>
            <PlusIcon className="w-4 h-4 stroke-[3px] stroke-day" />
          </button>
        </div>
        <table className="w-full table-auto">
          <thead className="text-left">
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Website</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {companies.map((company) => (
              <tr
                key={company.id}
                className="border-b border-solid border-gray-200 last:border-b-0"
              >
                <td className="table-data">{company.name}</td>
                <td className="table-data">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlobeAltIcon className="w-5 h-5 stroke-blue-500" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default CompaniesTable
