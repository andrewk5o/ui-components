import React from "react"
import { useMount } from "../../hooks/useMount"
import { Portal } from "../Portal/Portal"
import { Layout } from "./Layout"

const AnimatedModal = ({opened, onClose, children}) => {
  const mounted = useMount(opened)

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