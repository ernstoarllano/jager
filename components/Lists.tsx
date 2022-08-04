const Lists = ({ children }: any) => {
  return (
    <section className="grid grid-cols-4 gap-8 p-10 border-b border-solid border-gray-200">
      {children}
    </section>
  )
}

export default Lists
