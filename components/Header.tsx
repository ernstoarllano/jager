import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-10 border-b border-solid border-gray-200">
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
          <span className="font-light">Hire Me!</span>
        </div>
      </div>
      <ul className="flex items-center space-x-3">
        <li>
          <a
            className="inline-flex items-center"
            href="https://www.linkedin.com/in/ernstoarllano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="w-5 h-5 mr-2 fill-night"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center"
            href="https://github.com/ernstoarllano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h-5 mr-2 fill-night"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
