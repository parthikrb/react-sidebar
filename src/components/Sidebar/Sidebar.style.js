import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
  cursor: pointer;

  &:hover {
    color: #ecf0f1;
  }
`
