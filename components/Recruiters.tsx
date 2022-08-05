import Link from 'next/link'

const Recruiters = () => {
  return (
    <article className="col-span-3 p-8 border border-solid border-gray-200 rounded-3xl space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Recruiters</span>
        <Link href="/recruiters">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        <li>Dave Herbert</li>
      </ul>
    </article>
  )
}

export default Recruiters
