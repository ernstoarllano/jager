export default function Welcome({ user }: any) {
  return (
    <section>
      <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
    </section>
  )
}
