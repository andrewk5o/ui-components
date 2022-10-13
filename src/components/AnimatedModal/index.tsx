import { Portal } from "@components/Portal"
import { useMount } from "@hooks/useMount"
import * as React from "react"

import { ANIMATION_TIME } from "./constants"
import { Layout } from "./Layout"

type AnimatedModalProps = {
  opened: boolean
  onClose: () => void
  children: React.ReactNode
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  opened,
  onClose,
  children,
}) => {
  const mounted = useMount({
    opened,
    unmountDelay: ANIMATION_TIME,
  })

  if (!mounted) {
    return null
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  )
}

export { AnimatedModal }
