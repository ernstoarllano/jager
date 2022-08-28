import classNames from 'classnames'
import { StatusProps } from 'interfaces/interfaces'

const Status = ({ screenedOn, interviewedOn, eliminatedOn }: StatusProps) => {
  const classes = classNames({
    'is-awaiting': !screenedOn && !interviewedOn && !eliminatedOn,
    'is-reviewing': screenedOn && !interviewedOn && !eliminatedOn,
    'is-waiting': interviewedOn && !eliminatedOn,
    'is-eliminated': eliminatedOn,
  })

  switch (classes) {
    case 'is-awaiting':
      return <span className={`status ${classes}`}>Waiting</span>
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
