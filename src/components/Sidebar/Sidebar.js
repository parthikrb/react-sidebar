import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem/MenuItem'
import useWindowWidth from '../../hooks/useWindowWidth'
import Header from '../Header/Header'
import {
  SidebarDrawer,
  MenuContainer,
  SubMenuContainer,
  Toggle,
  ArrowIcon
} from './Sidebar.style'
import { AnimateSharedLayout } from 'framer-motion'
import { sidebarVariants } from '../../config/styles/variants'

const Sidebar = (props) => {
  const { brandName, isExpanded, menuList, theme } = props
  /**
   * Holds the current width of the browser
   * width is used to decide whether to expand or collapse the sidebar
   */
  const width = useWindowWidth()

  const [isDrawerOpen, setIsDrawerOpen] = useState(isExpanded)
  const [hoverOpen, setHoverOpen] = useState(false)
  const [shouldExpand, setShouldExpand] = useState(isExpanded)
  const [menuItems, setMenuItems] = useState(menuList)
  const [navigateTo, setNavigateTo] = useState('/')

  /**
   * if the width of the browser is less than 1280
   * sidebar will get collapsed automatically
   */
  useEffect(() => {
    width < 1280 ? setIsDrawerOpen(false) : setIsDrawerOpen(true)
  }, [width])

  /**
   * if the sidebar is collapsed,
   * it will get expanded and collapsed on mouse enter and leave respectively
   */
  useEffect(() => {
    const mouseTarget = document.getElementById('sidebar')
    mouseTarget.addEventListener('mouseenter', () => {
      setHoverOpen(true)
    })
    mouseTarget.addEventListener('mouseleave', () => {
      setHoverOpen(false)
    })
  }, [])

  /**
   * based on the mouse hover and toggle action,
   * we decide whether or not to expand the sidebar
   */
  useEffect(() => {
    setShouldExpand(hoverOpen || isDrawerOpen)
  }, [hoverOpen, isDrawerOpen])

  /**
   * on toggle, it set the sidebar open value
   */
  const handleToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  /**
   *
   * @param {number} index - position of the  menu item selected by user
   * we will set the isOpen value to true for the given index
   * isOpen value for all other items will be set to false
   */
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

  /**
   *
   * @param {string} index - position of the menu item selected by user
   * @param {string} to - navigation path for the selected menu item
   * reset the isSelected value to false for all items in the menu
   * set isSelected to true for the index
   */
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

  /**
   *
   * @param {string} index - position of the menu item selected by user
   * @param {string} to - navigation path for the selected menu item
   * if the index has _, it indicates that user has selected sub menu
   * we split the index with _, by which we get main menu index and sub menu index
   * if the main menu doesn't have any children, we will call handleMenuSelection()
   * if the main menu does have children, we will call handleExpandMenu()
   */
  const handleMenuClick = (index, to) => {
    !index.toString().includes('_') && menuItems[index].hasChildren
      ? handleExpandMenu(index)
      : handleMenuSelection(index, to)
  }

  return (
    <BrowserRouter>
      <AnimateSharedLayout>
        <SidebarDrawer
          theme={theme}
          layout
          id='sidebar'
          variants={sidebarVariants}
          animate={shouldExpand ? 'expanded' : 'collapsed'}
          initial={false}
        >
          <Header
            theme={theme}
            shouldExpand={shouldExpand}
            brandName={brandName}
          />
          <MenuContainer>
            {menuItems.map((mainMenu, mainMenuIndex) => (
              <Fragment key={mainMenuIndex}>
                <MenuItem
                  theme={theme}
                  name={mainMenu.name}
                  icon={mainMenu.icon}
                  to={navigateTo}
                  hasChildren={mainMenu.hasChildren}
                  isMenuSelected={mainMenu.isSelected}
                  isMenuExpanded={mainMenu.isOpen}
                  isDrawerOpen={shouldExpand}
                  onClick={() => handleMenuClick(mainMenuIndex, mainMenu.to)}
                />
                {mainMenu.hasChildren && mainMenu.isOpen && shouldExpand && (
                  <SubMenuContainer>
                    {mainMenu.subMenu.map((subMenuItem, subMenuIndex) => (
                      <Fragment key={subMenuIndex}>
                        <MenuItem
                          theme={theme}
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
            <ArrowIcon open={isDrawerOpen} theme={theme} />
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
  isExpanded: true,
  theme: {
    header: {
      color: '#bdc3c7',
      hoverColor: '#ecf0f1',
      backgroundColor: '#222f3e'
    },
    menuItem: {
      color: '#bdc3c7',
      hoverColor: '#ecf0f1',
      active: '#1abc9c',
      activeHoverColor: '#1dd1a1'
    },
    expandArrow: {
      color: '#ecf0f1'
    },
    toggle: {
      color: '#bdc3c7',
      hoverColor: '#ecf0f1'
    },
    sidebar: {
      backgroundColor: '#222f3e',
      color: '#bdc3c7'
    }
  }
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
  isExpanded: PropTypes.bool.isRequired,
  theme: PropTypes.object
}

export default Sidebar
