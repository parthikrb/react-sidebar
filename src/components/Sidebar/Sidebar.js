import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../MenuItem/MenuItem'
import useWindowWidth from '../../hooks/useWindowWidth'
import Header from '../Header/Header'
import {
  SidebarDrawer,
  MenuContainer,
  SubMenuContainer,
  Toggle
} from './Sidebar.style'
import { AnimateSharedLayout } from 'framer-motion'
import { sidebarVariants } from '../../config/styles/variants'

const Sidebar = (props) => {
  const { brandName, isExpanded, menuList } = props

  const width = useWindowWidth()

  const [isDrawerOpen, setIsDrawerOpen] = useState(isExpanded)
  const [hoverOpen, setHoverOpen] = useState(false)
  const [shouldExpand, setShouldExpand] = useState(isExpanded)
  const [menuItems, setMenuItems] = useState(menuList)
  const [navigateTo, setNavigateTo] = useState('/')

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
    setIsDrawerOpen(!isDrawerOpen)
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

  const handleMenuSelection = (index, to) => {
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
    setNavigateTo(to)
  }

  const handleMenuClick = (index, to) => {
    !index.toString().includes('_') && menuItems[index].hasChildren
      ? handleExpandMenu(index)
      : handleMenuSelection(index, to)
  }

  return (
    <BrowserRouter>
      <AnimateSharedLayout>
        <SidebarDrawer
          layout
          id='sidebar'
          variants={sidebarVariants}
          animate={shouldExpand ? 'expanded' : 'collapsed'}
          initial={false}
        >
          <Header shouldExpand={shouldExpand} brandName={brandName} />
          <MenuContainer>
            {menuItems.map((mainMenu, mainMenuIndex) => (
              <Fragment key={mainMenuIndex}>
                <MenuItem
                  name={mainMenu.name}
                  icon={mainMenu.icon}
                  to={navigateTo}
                  hasChildren={mainMenu.hasChildren}
                  isMenuSelected={mainMenu.isSelected}
                  isMenuExpanded={mainMenu.isOpen}
                  isDrawerOpen={shouldExpand}
                  onClick={() => handleMenuClick(mainMenuIndex, mainMenu.to)}
                />
                {mainMenu.hasChildren && mainMenu.isOpen && (
                  <SubMenuContainer>
                    {mainMenu.subMenu.map((subMenuItem, subMenuIndex) => (
                      <Fragment key={subMenuIndex}>
                        <MenuItem
                          name={subMenuItem.name}
                          to={navigateTo}
                          icon={subMenuItem.icon}
                          hasChildren={false}
                          isMenuSelected={subMenuItem.isSelected}
                          isMenuExpanded={false}
                          isDrawerOpen={shouldExpand}
                          onClick={() =>
                            handleMenuClick(
                              `${mainMenuIndex}_${subMenuIndex}`,
                              `${mainMenu.to}${subMenuItem.to}`
                            )
                          }
                        />
                      </Fragment>
                    ))}
                  </SubMenuContainer>
                )}
              </Fragment>
            ))}
          </MenuContainer>

          <Toggle onClick={handleToggle}>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              style={{ width: '1.3em', height: '1.3em' }}
            />
          </Toggle>
        </SidebarDrawer>
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
