import { ListsProps } from 'interfaces/Lists'

const Lists = ({ children }: ListsProps) => {
  return (
    <section className="grid grid-cols-12 gap-8 p-10 border-b border-solid border-gray-200">
      {children}
    </section>
  )
}

export default Lists
