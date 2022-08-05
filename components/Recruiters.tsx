import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { RecruitersProps } from 'interfaces/Components'
import Link from 'next/link'

const Recruiters = ({ recruiters }: RecruitersProps) => {
  return (
    <article className="lg:col-span-4 p-8 border border-solid border-gray-200 rounded-3xl space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Recruiters</span>
        <Link href="/recruiters">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        {recruiters.map((recruiter) => (
          <li key={recruiter.id} className="flex items-center justify-between">
            <span>
              {recruiter.firstName} {recruiter.lastName}
            </span>
            {recruiter.positiveExperience && (
              <>
                {!recruiter.positiveExperience ? (
                  <ThumbDownIcon className="w-5 h-5 stroke-red-500" />
                ) : (
                  <ThumbUpIcon className="w-5 h-5 stroke-green-500" />
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Recruiters
