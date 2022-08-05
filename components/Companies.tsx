import { CompaniesProps } from 'interfaces/Components'
import Link from 'next/link'

const Companies = ({ companies }: CompaniesProps) => {
  return (
    <article className="lg:col-span-4 p-8 border border-solid border-gray-200 rounded-3xl space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Companies</span>
        <Link href="/companies">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        {companies.map((company) => (
          <li key={company.id}>
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Companies
