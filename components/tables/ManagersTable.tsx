import { PlusIcon } from '@heroicons/react/outline'
import { ManagersTableProps } from 'interfaces/Components'

const ManagersTable = ({ managers }: ManagersTableProps) => {
  console.log(managers)
  return (
    <section className="p-10 border-b border-solid border-gray-200">
      <article className="p-8 border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
        <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
          <h2 className="text-3xl font-bold">Managers</h2>
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
            </tr>
          </thead>
          <tbody className="table-body">
            {managers.map((manager) => (
              <tr
                key={manager.id}
                className="border-b border-solid border-gray-200 last:border-b-0"
              >
                <td className="table-data">
                  <span>
                    {manager.firstName} {manager.lastName}
                  </span>
                </td>
                <td className="table-data">
                  {manager.company && <span>{manager.company[0].name}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default ManagersTable
