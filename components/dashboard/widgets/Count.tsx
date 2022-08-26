import Card from 'components/Card'
import { CountProps } from 'interfaces/interfaces'

const Count = ({ text, count }: CountProps) => {
  return (
    <Card>
      <h3>{text}</h3>
      <span className="text-4xl font-bold">{count}</span>
    </Card>
  )
}

export default Count
