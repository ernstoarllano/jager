import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-10 border-b border-solid border-gray-200">
      <span className="text-2xl">Hello, welcome Ernesto! 👋🏻</span>
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
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
    </header>
  )
}

export default Header
