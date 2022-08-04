const Applications = ({ ...rest }) => {
  return (
    <article className={`flex flex-col items-center py-10 ${rest}`}>
      <span className="font-light text-gray-500">Total Applications</span>
      <span className="text-4xl font-bold">40</span>
    </article>
  )
}

export default Applications
