import Link from 'next/link'

const Companies = () => {
  return (
    <article className="p-8 border border-solid border-gray-200 rounded-3xl space-y-6">
      <div className="flex items-center justify-between pb-5 border-b border-solid border-gray-200">
        <span className="font-semibold">Companies</span>
        <Link href="/">
          <a className="text-sm font-semibold text-purple-500">See All</a>
        </Link>
      </div>
      <ul className="space-y-3">
        <li>Uber</li>
        <li>Google</li>
        <li>Apple</li>
        <li>Facebook</li>
        <li>Amazon</li>
        <li>Netflix</li>
      </ul>
    </article>
  )
}

export default Companies
