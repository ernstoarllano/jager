import { useGreeting } from 'hooks/useGreeting'

const WelcomeMessage = () => {
  const { greeting } = useGreeting('Ernesto')

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">{greeting}</h2>
      <p className="font-light text-gray-500">
        Here is what is happening with your recent job applications.
      </p>
    </div>
  )
}

export default WelcomeMessage
