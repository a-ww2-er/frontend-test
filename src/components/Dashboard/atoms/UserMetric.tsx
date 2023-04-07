type UserMetricProps = {
  text: string;
  metric: number | string
  children: JSX.Element
}

const UserMetric = ({text, metric, children}: UserMetricProps) => {
  return (
    <div>
        {children}
        <p>{text}</p>
        <span>{metric}</span>
    </div>
  )
}

export default UserMetric