import React from "react"

import { ANIMATION_TIME } from "../constants"
import {
  Container,
  Content,
  ContentAnimation,
  Overlay,
  OverlayAnimation,
} from "./styles"

const Layout = ({ children, opened, onClose }) => {
  const overlayRef = React.useRef()
  const contentRef = React.useRef()
  const [animationIn, setAnimationIn] = React.useState(false)

  React.useEffect(() => {
    setAnimationIn(opened)
  }, [opened])

  return (
    <Container>
      <OverlayAnimation
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
      >
        <Overlay ref={overlayRef} onClick={onClose} />
      </OverlayAnimation>
      <ContentAnimation
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
      >
        <Content ref={contentRef}> {children}</Content>
      </ContentAnimation>
    </Container>
  )
}

export { Layout }
