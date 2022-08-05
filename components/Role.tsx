import { RoleProps } from 'interfaces/Role'

const Role = ({ count, role }: RoleProps) => {
  return (
    <article className="flex flex-col lg:flex-row items-center lg:space-x-3">
      <span className="text-xl font-bold">{count}</span>
      <span className="text-base font-light text-gray-500 text-center lg:text-left">
        {role}
      </span>
    </article>
  )
}

export default Role
