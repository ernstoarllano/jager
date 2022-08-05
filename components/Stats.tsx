import { StatsProps } from 'interfaces/Stats'

const Stats = ({ children }: StatsProps) => {
  return (
    <section className="grid lg:grid-cols-3 border-b border-solid border-gray-200">
      {children}
    </section>
  )
}

export default Stats
