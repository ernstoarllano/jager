export default function MainContainer({ children }: any) {
  return (
    <main className="lg:col-span-9 lg:flex lg:flex-col lg:px-8 lg:py-8 bg-gray-50">
      {children}
    </main>
  )
}
