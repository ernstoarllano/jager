import Experience from 'components/Experience'
import { ManagersProps } from 'interfaces/Components'
import Link from 'next/link'

const Managers = ({ managers }: ManagersProps) => {
  return (
    <article className="lg:col-span-4 p-8 border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Managers</span>
        <Link href="/managers">
          <a className="text-sm font-medium text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        {managers.map((manager) => (
          <li
            key={manager.id}
            className="flex items-center justify-between font-light text-gray-500"
          >
            <span>
              {manager.firstName} {manager.lastName}
            </span>
            <Experience experience={manager.positiveExperience} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Managers
