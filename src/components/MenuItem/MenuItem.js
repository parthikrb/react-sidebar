import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu, MenuName, MenuIcon, DropDownIcon } from './MenuItem.style'
import { AnimatePresence } from 'framer-motion'
import {
  menuVariants,
  menuNameVariants,
  menuIconVariants
} from '../../config/styles/variants'

const menuAnimationProps = {
  variants: menuVariants,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden'
}

const menuNameAnimationProps = {
  ...menuAnimationProps,
  variants: menuNameVariants
}

const menuIconAnimationProps = {
  ...menuAnimationProps,
  variants: menuIconVariants
}

const MenuItem = (props) => {
  const {
    name,
    to,
    icon,
    hasChildren,
    isDrawerOpen,
    isMenuExpanded,
    isMenuSelected,
    onClick
  } = props
  const history = useHistory()

  /**
   * Below will be executed when the to value changes
   */
  useEffect(() => {
    history.push(to)
  }, [to])

  return (
    <AnimatePresence>
      <Menu
        layout
        {...menuAnimationProps}
        isMenuExpanded={isMenuExpanded}
        isMenuSelected={isMenuSelected}
        onClick={onClick}
      >
        <MenuIcon
          layout
          {...menuIconAnimationProps}
          isDrawerOpen={isDrawerOpen}
        >
          {icon}
        </MenuIcon>
        {isDrawerOpen && (
          <MenuName layout {...menuNameAnimationProps}>
            {name}
          </MenuName>
        )}
        {hasChildren && isDrawerOpen && (
          <DropDownIcon open={isMenuExpanded || false} />
        )}
      </Menu>
    </AnimatePresence>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element,
  hasChildren: PropTypes.bool.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  isMenuExpanded: PropTypes.bool.isRequired,
  isMenuSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default memo(MenuItem)
