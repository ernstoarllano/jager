import Role from 'components/Role'
import { RolesProps } from 'interfaces/Components'

const Roles = ({ roles }: RolesProps) => {
  return (
    <section className="px-10 py-20 border-b border-solid border-gray-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {roles.map((role) => (
          <Role key={role.id} count={role._count.job} role={role.name} />
        ))}
      </div>
    </section>
  )
}

export default Roles
