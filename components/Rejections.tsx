const Rejections = ({ ...rest }) => {
  return (
    <article className={`flex flex-col items-center py-10 ${rest}`}>
      <span className="font-light text-gray-500">Total Rejections</span>
      <span className="text-4xl font-bold">5</span>
    </article>
  )
}

export default Rejections
