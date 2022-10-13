import { AnimatedModal } from "@components/AnimatedModal"
import * as React from "react"

import { Button, ModalContent } from "./styles"

const App: React.FC = () => {
  const [opened, setOpened] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpened(true)}>Click</Button>
      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <ModalContent>Content</ModalContent>
      </AnimatedModal>
    </>
  )
}

export { App }
