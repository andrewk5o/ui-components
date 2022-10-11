import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const OverlayAnimation = styled(CSSTransition)`
  &.enter {
    opacity: 0;
  }

  &.enter-active {
    transition: opacity 300ms ease-out;
    opacity: 1;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
`

const ContentAnimation = styled(CSSTransition)`
  &.enter {
    opacity: 0;
    transform: scale(0.01);
  }

  &.enter-active {
    transition: opacity 100ms ease-out 200ms, transform 100ms ease-out 200ms;
    opacity: 1;
    transform: scale(1);
  }

  &.exit {
    opacity: 1;
    transform: scale(1);
  }

  &.exit-active {
    opacity: 0;
    transform: scale(0.01);
    transition: opacity 300ms ease-out, transform 300ms ease-out;
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Content = styled.div`
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: auto;
  background-color: #f8f8f8;
  z-index: 3;
  min-width: 400px;
  min-height: 600px;
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  cursor: pointer;
`

export {
  Container,
  Content,
  Overlay,
  OverlayAnimation,
  ContentAnimation
}