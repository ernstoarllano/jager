import Avatar from 'components/Avatar'
import Social from 'components/Social'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-10 border-b border-solid border-gray-200">
      <Avatar />
      <Social />
    </header>
  )
}

export default Header
