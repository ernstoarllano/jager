export default function MainNav({ children }: any) {
  return (
    <nav className="lg:col-span-3 lg:flex lg:flex-col lg:flex-no-wrap px-3 py-4 lg:px-6 lg:py-8 text-gray-100 lg:border-r-[1px]">
      {children}
    </nav>
  )
}
