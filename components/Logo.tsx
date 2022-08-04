import Link from 'next/link'

const Logo = () => {
  return (
    <h1 className="text-7xl font-shoulders font-black uppercase">
      <Link href="/">
        <a>Jäger</a>
      </Link>
    </h1>
  )
}

export default Logo
