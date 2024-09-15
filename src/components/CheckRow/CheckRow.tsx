interface CheckRowProps {
  children?: React.ReactNode
}

const CheckRow = ({ children }: CheckRowProps) => {
  return <div className="my-2 flex space-x-2">{children}</div>
}

export default CheckRow
