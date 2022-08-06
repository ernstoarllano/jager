import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Experience = ({ experience }: any) => {
  return (
    <>
      {!experience ? (
        <ThumbDownIcon className="w-5 h-5 stroke-red-500" />
      ) : (
        <ThumbUpIcon className="w-5 h-5 stroke-green-500" />
      )}
    </>
  )
}

export default Experience
