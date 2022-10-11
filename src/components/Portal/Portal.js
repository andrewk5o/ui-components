import React from "react"
import ReactDOM from "react-dom"

const Portal = ({children}) => {
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