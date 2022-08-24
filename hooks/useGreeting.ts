import { useEffect, useState } from 'react'

export const useGreeting = (name: string) => {
  const [greeting, setGreeting] = useState<string | null>(null)

  useEffect(() => {
    const now = new Date()

    if (now.getHours() > 5 && now.getHours() <= 12) {
      setGreeting(`Good morning, ${name}`)
    } else if (now.getHours() > 12 && now.getHours() <= 18) {
      setGreeting(`Good afternoon, ${name}`)
    } else if (now.getHours() > 18 && now.getHours() <= 22) {
      setGreeting(`Good evening, ${name}`)
    } else if (now.getHours() > 22 || now.getHours() <= 5) {
      setGreeting('Why are you still awake?')
    }
  }, [name])

  return { greeting }
}
