import classNames from 'classnames'

const Status = ({ screened, interviewed, eliminated }: any) => {
  const classes = classNames({
    'is-awaiting': !screened && !interviewed && !eliminated,
    'is-reviewing': screened && !interviewed && !eliminated,
    'is-waiting': interviewed && !eliminated,
    'is-eliminated': eliminated,
  })

  switch (classes) {
    case 'is-awaiting':
      return <span className={`status ${classes}`}>In Wait</span>
    case 'is-reviewing':
      return <span className={`status ${classes}`}>In Review</span>
    case 'is-waiting':
      return <span className={`status ${classes}`}>In Decision</span>
    case 'is-eliminated':
      return <span className={`status ${classes}`}>Eliminated</span>
    default:
      return <span className={`status ${classes}`}>In Wait</span>
  }
}

export default Status
