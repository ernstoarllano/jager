import ContentLoader from 'react-content-loader'

const WelcomeLoader = () => {
  return (
    <section className="px-10 py-20 space-y-12">
      <ContentLoader viewBox="0 0 1300 662" uniqueKey="welcome-skeleton">
        <rect x="0" y="0" rx="0" ry="0" width="287" height="32" />
        <rect x="0" y="44" rx="0" ry="0" width="1320" height="24" />
        <rect x="0" y="124" rx="0" ry="0" width="298" height="165" />
        <rect x="0" y="319" rx="0" ry="0" width="298" height="165" />
        <rect x="328" y="124" rx="0" ry="0" width="408" height="362" />
        <rect x="766" y="124" rx="0" ry="0" width="550" height="362" />
      </ContentLoader>
    </section>
  )
}

export default WelcomeLoader
