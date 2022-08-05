import Link from 'next/link'

const ScheduledInterviews = () => {
  return (
    <article className="lg:col-span-12 p-8 border border-solid border-gray-200 rounded-3xl space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Scheduled Interviews</span>
        <Link href="/">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        <li>
          <div className="flex items-center justify-between">
            <time className="font-semibold text-purple-500">
              Aug 8th, 2022 @ 10:30am
            </time>
            <span>Stephanie Rendón</span>
          </div>
        </li>
      </ul>
    </article>
  )
}

export default ScheduledInterviews