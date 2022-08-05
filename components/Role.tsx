import { RoleProps } from 'interfaces/Role'

const Role = ({ count, role }: RoleProps) => {
  return (
    <article className="flex items-center space-x-3">
      <span className="text-xl font-bold">{count}</span>
      <span className="text-base font-light text-gray-500">{role}</span>
    </article>
  )
}

export default Role
