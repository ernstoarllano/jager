import {
  BriefcaseIcon,
  OfficeBuildingIcon,
  TemplateIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <nav className="pb-10">
        <ul className="space-y-1">
          <li>
            <Link href="/">
              <a className="nav-item is-active">
                <TemplateIcon className="w-5 h-5 stroke-purple-500" />
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a className="nav-item">
                <BriefcaseIcon className="w-5 h-5 stroke-gray-500" />
                <span>Jobs</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/companies">
              <a className="nav-item">
                <OfficeBuildingIcon className="w-5 h-5 stroke-gray-500" />
                <span>Companies</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/recruiters">
              <a className="nav-item">
                <UserGroupIcon className="w-5 h-5 stroke-gray-500" />
                <span>Recruiters</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/managers">
              <a className="nav-item">
                <UserGroupIcon className="w-5 h-5 stroke-gray-500" />
                <span>Managers</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
