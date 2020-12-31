import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import useWindowWidth from '../../hooks/useWindowWidth'
import Header from '../Header/Header'
import {
  SidebarDrawer,
  MenuItem,
  MainMenu,
  MenuName,
  MenuIcon,
  MenuContainer,
  SubMenu,
  SubMenuItem,
  DropDownIcon,
  Toggle
} from './Sidebar.style'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import {
  sidebarVariants,
  subTitleVariants,
  titleVariants
} from '../../config/styles/variants'

const Sidebar = (props) => {
  const { brandName, isExpanded, menuList } = props

  const width = useWindowWidth()

  const [isDrawerOpen, setIsDrawerOpen] = useState(isExpanded)
  const [hoverOpen, setHoverOpen] = useState(false)
  const [shouldExpand, setShouldExpand] = useState(isExpanded)
  const [menuItems, setMenuItems] = useState(menuList)

  useEffect(() => {
    width < 1280 ? setIsDrawerOpen(false) : setIsDrawerOpen(true)
  }, [width])

  useEffect(() => {
    const mouseTarget = document.getElementById('sidebar')
    mouseTarget.addEventListener('mouseenter', () => {
      setHoverOpen(true)
    })
    mouseTarget.addEventListener('mouseleave', () => {
      setHoverOpen(false)
    })
  }, [])

  useEffect(() => {
    setShouldExpand(hoverOpen || isDrawerOpen)
  }, [hoverOpen, isDrawerOpen])

  const handleToggle = () => {
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)
  }

  const handleExpandMenu = (index) => {
    const _menuItems = [...menuItems]

    // Set the selected menu to open
    _menuItems[index].isOpen = !_menuItems[index].isOpen
    // Set other menu items to close
    _menuItems
      .filter((menuItem, idx) => idx !== index)
      .forEach((menuItem) => {
        menuItem.isOpen = false
      })
    setMenuItems(_menuItems)
  }

  const handleMenuSelection = (index) => {
    const _menuItems = [...menuItems]

    // Reset Menu selected on every click
    _menuItems.forEach((menuItem) => {
      menuItem.isSelected = false
      menuItem.subMenu.forEach((subMenu) => {
        subMenu.isSelected = false
      })
    })

    if (index.toString().includes('_')) {
      const [menuIndex, subMenuIndex] = index.split('_')
      _menuItems[menuIndex].isSelected = !_menuItems[menuIndex].isSelected
      _menuItems[menuIndex].subMenu[subMenuIndex].isSelected = !_menuItems[
        menuIndex
      ].subMenu[subMenuIndex].isSelected
    } else {
      _menuItems[index].isSelected = !_menuItems[index].isSelected
      _menuItems.forEach((menuItem) => (menuItem.isOpen = false))
    }
    setMenuItems(_menuItems)
  }

  const handleMenuClick = (index) => {
    !index.toString().includes('_') && menuItems[index].hasChildren
      ? handleExpandMenu(index)
      : handleMenuSelection(index)
  }

  return (
    <BrowserRouter>
      <AnimateSharedLayout>
        <AnimatePresence>
          <SidebarDrawer
            layout
            id='sidebar'
            variants={sidebarVariants}
            animate={shouldExpand ? 'expanded' : 'collapsed'}
            initial={false}
          >
            <Header shouldExpand={shouldExpand} brandName={brandName} />

            {menuItems.map((mainMenu, index) => (
              <MenuContainer key={index} shouldExpand={shouldExpand}>
                <MenuItem
                  to={mainMenu.to}
                  onClick={() => handleMenuClick(index)}
                  expanded={mainMenu.isOpen ? 1 : 0}
                  selected={mainMenu.isSelected}
                >
                  <MainMenu
                    layout
                    shouldExpand={shouldExpand}
                    selected={mainMenu.isSelected}
                    variants={subTitleVariants}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                  >
                    <MenuIcon shouldExpand={shouldExpand}>
                      {mainMenu.icon}
                    </MenuIcon>
                    <MenuName
                      layout
                      shouldExpand={shouldExpand}
                      variants={titleVariants}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                    >
                      {mainMenu.name}
                    </MenuName>

                    {mainMenu.hasChildren && shouldExpand && (
                      <DropDownIcon open={mainMenu.isOpen || false} />
                    )}
                  </MainMenu>
                </MenuItem>
                {mainMenu.hasChildren &&
                  mainMenu.isOpen &&
                  mainMenu.subMenu.map((subMenuItem, sIndex) => (
                    <SubMenu
                      to={`${mainMenu.to}${subMenuItem.to}`}
                      key={sIndex}
                      onClick={() => handleMenuClick(`${index}_${sIndex}`)}
                      activeStyle={{
                        color: '#1abc9c'
                      }}
                    >
                      <SubMenuItem
                        layout
                        variants={subTitleVariants}
                        selected={subMenuItem.isSelected}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                      >
                        {subMenuItem.icon && shouldExpand && (
                          <MenuIcon shouldExpand={shouldExpand}>
                            {subMenuItem.icon}
                          </MenuIcon>
                        )}
                        <MenuName shouldExpand={shouldExpand}>
                          {subMenuItem.name}
                        </MenuName>
                      </SubMenuItem>
                    </SubMenu>
                  ))}
              </MenuContainer>
            ))}

            <Toggle onClick={handleToggle}>
              <FontAwesomeIcon
                icon={faExchangeAlt}
                style={{ width: '1.3em', height: '1.3em' }}
              />
            </Toggle>
          </SidebarDrawer>
        </AnimatePresence>
      </AnimateSharedLayout>
    </BrowserRouter>
  )
}

Sidebar.defaultProps = {
  brandName: {
    name: 'Sidebar'
  },
  menuList: [],
  isExpanded: true
}

Sidebar.protoTypes = {
  /** brandName expects a name and path to logo */
  brandName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoPath: PropTypes.string
  }),
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hasChildren: PropTypes.bool.isRequired,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
          icon: PropTypes.element.isRequired
        })
      )
    })
  ),
  isExpanded: PropTypes.bool.isRequired
}

export default Sidebar
