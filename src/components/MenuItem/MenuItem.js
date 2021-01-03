import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, MenuName, MenuIcon, DropDownIcon } from './MenuItem.style'
import { AnimatePresence } from 'framer-motion'
import { menuVariants, menuNameVariants } from '../../config/styles/variants'

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

  useEffect(() => {
    history.push(to)
  }, [to])

  return (
    <AnimatePresence>
      <Menu
        layout
        variants={menuVariants}
        initial='hidden'
        animate='show'
        exit='hidden'
        isMenuExpanded={isMenuExpanded}
        isMenuSelected={isMenuSelected}
        onClick={onClick}
      >
        <AnimatePresence>
          <MenuIcon
            layout
            variants={menuNameVariants}
            initial='hidden'
            animate='show'
            exit='hidden'
            isDrawerOpen={isDrawerOpen}
          >
            {icon}
          </MenuIcon>
        </AnimatePresence>
        <AnimatePresence>
          {isDrawerOpen && (
            <MenuName
              layout
              variants={menuNameVariants}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              {name}
            </MenuName>
          )}
        </AnimatePresence>
        {hasChildren && isDrawerOpen && (
          <DropDownIcon open={isMenuExpanded || false} />
        )}
      </Menu>
    </AnimatePresence>
  )
}

export default memo(MenuItem)
