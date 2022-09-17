import classNames from 'classnames'
import { StatusProps } from 'interfaces/interfaces'

const Status = ({
  screenedOn,
  interviewedOn,
  eliminatedOn,
  hiredOn,
}: StatusProps) => {
  const classes = classNames({
    'is-awaiting': !screenedOn && !interviewedOn && !eliminatedOn && !hiredOn,
    'is-reviewing': screenedOn && !interviewedOn && !eliminatedOn && !hiredOn,
    'is-waiting': interviewedOn && !eliminatedOn && !hiredOn,
    'is-eliminated': eliminatedOn && !hiredOn,
    'is-hired': hiredOn,
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
    case 'is-hired':
      return <span className={`status ${classes}`}>Hired</span>
    default:
      return <span className={`status ${classes}`}>In Wait</span>
  }
}

export default Status
