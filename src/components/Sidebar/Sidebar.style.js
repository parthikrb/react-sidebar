import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import { Arrow } from '../../assets/Icons/index'

export const SidebarDrawer = styled(motion.div)`
  height: 100vh;
  max-width: 280px;
  min-width: 60px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  background-color: #222f3e;
  color: #bdc3c7;
`

export const MenuContainer = styled(motion.div)`
  width: 100%;
`

export const SubMenuContainer = styled(motion.div)`
  width: 100%;
`

export const Toggle = styled.div`
  position: absolute;
  width: 20%;
  margin: 0 auto;
  right: 0;
  left: 0;
  bottom: 10px;
  color: #bdc3c7;
  cursor: pointer;
`
export const ArrowIcon = styled(Arrow)`
  width: 1.3em;
  height: 1.3em;
  fill: #bdc3c7;
  stroke: #bdc3c7;

  ${(props) =>
    props.open
      ? css`
          transform: rotate(-180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
  transition: 0.4s transform;

  &:hover {
    fill: #ecf0f1;
  }
`
