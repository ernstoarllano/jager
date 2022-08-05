import Role from 'components/Role'

const Roles = () => {
  return (
    <section className="px-10 py-6 border-b border-solid border-gray-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        <Role count={0} role="Senior Full-Stack Developer" />
        <Role count={0} role="Senior Front-End Developer" />
        <Role count={1} role="Front-End Engineer" />
        <Role count={0} role="Senior Web Developer" />
      </div>
    </section>
  )
}

export default Roles
