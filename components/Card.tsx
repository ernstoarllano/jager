const Card = ({ children }: any) => {
  return (
    <div className="flex flex-col lg:h-full p-8 bg-white border border-solid border-gray-200 rounded-2xl shadow-lg">
      {children}
    </div>
  )
}

export default Card
