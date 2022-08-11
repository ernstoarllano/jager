import Experience from 'components/Experience'
import { RecruitersProps } from 'interfaces/Components'
import Link from 'next/link'

const Recruiters = ({ recruiters }: RecruitersProps) => {
  return (
    <article className="lg:col-span-4 p-8 bg-white border border-solid border-gray-200 rounded-3xl shadow-lg space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Recruiters</span>
        <Link href="/recruiters">
          <a className="text-sm font-medium text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        {recruiters.map((recruiter) => (
          <li
            key={recruiter.id}
            className="flex items-center justify-between font-light text-gray-500"
          >
            <span>
              {recruiter.firstName} {recruiter.lastName}
            </span>
            <Experience experience={recruiter.positiveExperience} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Recruiters
