import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

export const Menu = styled(motion.div)`
  width: 100%;
  height: 2.7em;
  display: flex;
  position: relative;
  white-space: nowrap;
  color: ${(props) => (props.isMenuSelected ? '#1abc9c' : '#bdc3c7')};
  cursor: pointer;
  ${(props) =>
    !props.isMenuExpanded &&
    css`
      border-bottom: 1px solid gray;
      box-shadow: 0 2px 5px gray;
    `}

  &:hover {
    color: ${(props) => (props.isMenuSelected ? '#1dd1a1' : '#ecf0f1')};
    transition: 0.1s ease-in all;
  }
`

export const MenuIcon = styled(motion.div)`
  width: 1.3em;
  height: 1.3em;
  margin: ${(props) => !props.isDrawerOpen && '0 auto'};
  padding-left: ${(props) => props.isDrawerOpen && '20px'};
  margin-right: ${(props) => (props.isDrawerOpen ? '30px' : 'auto')};
  line-height: 2.5em;
`

export const MenuName = styled(motion.div)`
  line-height: 2.5em;
`

export const DropDownIcon = styled.span`
  border: solid #ecf0f1;
  border-width: 0 1px 1px 0;
  transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(135deg)')};
  position: absolute;
  right: 25px;
  top: 19px;
  padding: 3px;
  transition: 0.4s;
`
