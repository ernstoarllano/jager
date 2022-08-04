import Link from 'next/link'

const Logo = () => {
  return (
    <h1 className="text-5xl font-bold uppercase">
      <Link href="/">
        <a>Jäger</a>
      </Link>
    </h1>
  )
}

export default Logo
