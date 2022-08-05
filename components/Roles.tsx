import Role from 'components/Role'
import { RolesProps } from 'interfaces/Components'

const Roles = ({ roles }: RolesProps) => {
  return (
    <section className="px-10 py-6 border-b border-solid border-gray-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {roles.map((role) => (
          <Role key={role.id} count={role._count.jobs} role={role.name} />
        ))}
      </div>
    </section>
  )
}

export default Roles
