import * as React from "react"
import * as ReactDOM from "react-dom"

type PortalProps = {
  children: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [container] = React.useState(() => document.createElement("div"))

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export { Portal }
