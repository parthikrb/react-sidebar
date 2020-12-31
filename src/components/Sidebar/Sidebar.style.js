import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
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

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => (props.selected ? '#1abc9c' : '#bdc3c7')};
`
export const MainMenu = styled(motion.div)`
  width: 100%;
  height: 2.7em;
  display: flex;
  position: relative;
  white-space: nowrap;

  cursor: pointer;
  ${(props) =>
    !props.expanded &&
    css`
      border-bottom: 1px solid gray;
      box-shadow: 0 2px 5px gray;
    `}

  &:hover {
    color: ${(props) => (props.selected ? '#1dd1a1' : '#ecf0f1')};
    transition: 0.1s ease-in all;
  }
`

export const MenuName = styled(motion.div)`
  display: ${(props) => (props.shouldExpand ? 'block' : 'none')};
  line-height: 2.5em;
`

export const MenuIcon = styled.div`
  width: 1.3em;
  height: 1.3em;
  margin: ${(props) => !props.shouldExpand && '0 auto'};
  padding-left: ${(props) => props.shouldExpand && '20px'};
  margin-right: ${(props) => (props.shouldExpand ? '30px' : 'auto')};
  line-height: 2.5em;
`

export const SubMenu = styled(NavLink)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`

export const SubMenuItem = styled(motion.div)`
  margin-left: 15px;
  display: flex;
  color: ${(props) => (props.selected ? '#1abc9c' : '#bdc3c7')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.selected ? '#1dd1a1' : '#ecf0f1')};
  }
`

export const DropDownIcon = styled.span`
  border: solid #ecf0f1;
  border-width: 0 1px 1px 0;
  transform: ${(props) => (props.open ? 'rotate(-135deg)' : 'rotate(45deg)')};
  position: absolute;
  right: 25px;
  top: ${(props) => (props.open ? '18px' : '19px')};
  padding: 3px;
  transition: 0.4s;
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
