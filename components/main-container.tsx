export default function MainContainer({ children }: any) {
  return (
    <main className="lg:col-span-10 lg:flex lg:flex-col bg-white">
      {children}
    </main>
  )
}
