import React from "react"

export const useMount = ({opened, unmountDelay}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    if (opened && !mounted) {
      setMounted(true)
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, unmountDelay)
    }
  }, [opened])

  return mounted
}
