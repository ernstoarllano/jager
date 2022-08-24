import ContentLoader from 'react-content-loader'

const WelcomeSkeleton = () => {
  return (
    <section className="px-10 py-20 space-y-12">
      <ContentLoader viewBox="0 0 2000 500">
        <rect x="0" y="0" rx="0" ry="0" width="298" height="165" />
        <rect x="0" y="195" rx="0" ry="0" width="298" height="165" />
        <rect x="328" y="0" rx="0" ry="0" width="408" height="362" />
        <rect x="766" y="0" rx="0" ry="0" width="550" height="362" />
      </ContentLoader>
    </section>
  )
}

export default WelcomeSkeleton
