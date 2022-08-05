import { StatProps } from 'interfaces/Stat'

const Stat = ({ title, count }: StatProps) => {
  return (
    <article className="flex flex-col items-center py-10 lg:even:border-l lg:even:border-r lg:even:border-solid lg:even:border-gray-200 space-y-3">
      <span className="font-light text-gray-500">Total {title}</span>
      <span className="text-4xl font-bold">{count}</span>
    </article>
  )
}

export default Stat