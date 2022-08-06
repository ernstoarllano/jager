import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline'

const Status = ({ eliminated }: any) => {
  return (
    <>
      {!eliminated ? (
        <CheckIcon className="w-6 h-6 stroke-red-500" />
      ) : (
        <ExclamationIcon className="w-6 h-6 stroke-yellow-500" />
      )}
    </>
  )
}

export default Status
