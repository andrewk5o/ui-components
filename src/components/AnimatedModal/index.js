import { Portal } from "@components/Portal"
import { useMount } from "@hooks/useMount"

import { ANIMATION_TIME } from "./constants"
import { Layout } from "./Layout"

const AnimatedModal = ({ opened, onClose, children }) => {
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
