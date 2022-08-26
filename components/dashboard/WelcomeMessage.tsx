import { useGreeting } from 'hooks/useGreeting'

const WelcomeMessage = () => {
  const { greeting } = useGreeting('Ernesto')

  return (
    <div className="space-y-3">
      <h2>{greeting}</h2>
      <p>Here is what is happening with your recent job applications.</p>
    </div>
  )
}

export default WelcomeMessage
