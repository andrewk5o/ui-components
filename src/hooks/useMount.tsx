import * as React from "react"

type useMountArgs = {
  opened: boolean
  unmountDelay: number
}

const useMount = ({ opened, unmountDelay }: useMountArgs) => {
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

export { useMount }
