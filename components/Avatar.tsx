import Image from 'next/image'
import Link from 'next/link'

const Avatar = () => {
  return (
    <div className="relative group">
      <div className="absolute left-0 z-50 w-12 h-12 rounded-full overflow-hidden">
        <Link href="/">
          <a>
            <Image
              src="/1517497599569.jpg"
              alt="Ernesto Arellano"
              layout="responsive"
              width={337}
              height={337}
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center h-12 pr-6 text-day bg-purple-500 rounded-3xl opacity-0 transition-all ease-in-out duration-300 group-hover:pl-16 group-hover:opacity-100">
        <span className="font-medium">Hire Me</span>
      </div>
    </div>
  )
}

export default Avatar
