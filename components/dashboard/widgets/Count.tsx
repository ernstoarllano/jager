import Card from 'components/Card'
import { CountProps } from 'interfaces/interfaces'

const Count = ({ text, count }: CountProps) => {
  return (
    <Card>
      <h3 className="mb-4 text-xl font-light">{text}</h3>
      <span className="text-4xl font-bold">{count}</span>
    </Card>
  )
}

export default Count
