import {
  BriefcaseIcon,
  OfficeBuildingIcon,
  TemplateIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavPageProps {
  title: string
  icon: React.ReactNode
  url: string
}

const Nav = () => {
  const { asPath } = useRouter()

  const pages: NavPageProps[] = [
    {
      title: 'Dashboard',
      icon: <TemplateIcon />,
      url: '/',
    },
    {
      title: 'Jobs',
      icon: <BriefcaseIcon />,
      url: '/jobs',
    },
    {
      title: 'Companies',
      icon: <OfficeBuildingIcon />,
      url: '/companies',
    },
    {
      title: 'Recruiters',
      icon: <UserGroupIcon />,
      url: '/recruiters',
    },
    {
      title: 'Managers',
      icon: <UserGroupIcon />,
      url: '/managers',
    },
  ]

  return (
    <>
      <nav className="pb-10">
        <ul className="space-y-1">
          {pages.map((page, idx) => (
            <li key={idx}>
              <Link href={page.url}>
                <a
                  className={`nav-item ${
                    asPath === page.url ? 'is-active' : ''
                  }`}
                >
                  {page.icon}
                  <span>{page.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
