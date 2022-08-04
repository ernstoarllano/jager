const Roles = () => {
  return (
    <section className="px-10 py-6 border-b border-solid border-gray-200">
      <div className="grid grid-cols-4">
        <article className="flex items-center space-x-3">
          <span className="text-xl font-bold">40</span>
          <span className="text-base font-light text-gray-500">
            Senior Full-Stack Developer
          </span>
        </article>
        <article className="flex items-center space-x-3">
          <span className="text-xl font-bold">10</span>
          <span className="text-base font-light text-gray-500">
            Senior Front-End Developer
          </span>
        </article>
        <article className="flex items-center space-x-3">
          <span className="text-xl font-bold">10</span>
          <span className="text-base font-light text-gray-500">
            Front-End Engineer
          </span>
        </article>
        <article className="flex items-center space-x-3">
          <span className="text-xl font-bold">5</span>
          <span className="text-base font-light text-gray-500">
            Senior Web Developer
          </span>
        </article>
      </div>
    </section>
  )
}

export default Roles
