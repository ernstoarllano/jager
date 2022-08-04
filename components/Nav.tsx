import {
  BriefcaseIcon,
  CogIcon,
  LogoutIcon,
  OfficeBuildingIcon,
  TemplateIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

const Nav = () => {
  return (
    <>
      <nav className="pb-10 border-b border-solid border-gray-200">
        <ul className="space-y-1">
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-gray-50 rounded-full space-x-2"
              href="#"
            >
              <TemplateIcon className="w-5 h-5 stroke-purple-500" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-transparent rounded-full space-x-2"
              href="#"
            >
              <BriefcaseIcon className="w-5 h-5 stroke-gray-500" />
              <span>Jobs</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-transparent rounded-full space-x-2"
              href="#"
            >
              <OfficeBuildingIcon className="w-5 h-5 stroke-gray-500" />
              <span>Companies</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="pb-10 border-b border-solid border-gray-200">
        <ul>
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-transparent rounded-full space-x-2"
              href="#"
            >
              <UserCircleIcon className="w-5 h-5 stroke-gray-500" />
              <span>Account</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-transparent rounded-full space-x-2"
              href="#"
            >
              <CogIcon className="w-5 h-5 stroke-gray-500" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a
              className="inline-flex items-center w-full px-6 py-3 bg-transparent rounded-full space-x-2"
              href="#"
            >
              <LogoutIcon className="w-5 h-5 stroke-gray-500" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
