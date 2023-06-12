import { useState } from "react"

export const useSaving = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false)

  return {
    isSaving,
    setIsSaving
  }
}