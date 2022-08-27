import ContentLoader from 'react-content-loader'

const AddJobLoader = () => {
  return (
    <section className="px-10 py-20 space-y-12">
      <ContentLoader viewBox="0 0 1300 300" uniqueKey="welcome-skeleton">
        <rect x="0" y="0" rx="0" ry="0" width="185" height="32" />
        <rect x="0" y="40" rx="0" ry="0" width="339" height="20" />
        <rect x="448" y="0" rx="0" ry="0" width="92" height="20" />
        <rect x="448" y="28" rx="0" ry="0" width="869" height="36" />
        <rect x="448" y="80" rx="0" ry="0" width="92" height="20" />
        <rect x="448" y="108" rx="0" ry="0" width="869" height="36" />
        <rect x="448" y="160" rx="0" ry="0" width="92" height="20" />
        <rect x="448" y="188" rx="0" ry="0" width="869" height="36" />
      </ContentLoader>
    </section>
  )
}

export default AddJobLoader
