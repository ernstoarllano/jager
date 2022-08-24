import Card from 'components/Card'

const Count = ({ text, count }: any) => {
  return (
    <Card>
      <h3 className="mb-4 text-xl font-light">{text}</h3>
      <span className="text-4xl font-bold">{count}</span>
    </Card>
  )
}

export default Count
