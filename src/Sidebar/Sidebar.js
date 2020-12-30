import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import useWindowWidth from '../hooks/useWindowWidth';
import {
    SidebarDrawer, BrandContainer, Brand,
    BrandLogo, MenuItem, MenuName, MenuIcon,
    MenuContainer, SubMenu, DropDownIcon, Toggle
} from './Sidebar.style'

const Sidebar = props => {
    const {
        brandName,
        isExpanded,
        menuList
    } = props;

    const width = useWindowWidth();

    const [isDrawerOpen, setIsDrawerOpen] = useState(isExpanded);
    const [hoverOpen, setHoverOpen] = useState(false);
    const [shouldExpand, setShouldExpand] = useState(isExpanded);
    const [menuItems, setMenuItems] = useState(menuList);

    useEffect(() => {
        width < 1280 ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
    }, [width])

    useEffect(() => {
        const mouseTarget = document.getElementById('sidebar');
        mouseTarget.addEventListener('mouseenter', () => {
            setHoverOpen(true)
        });
        mouseTarget.addEventListener('mouseleave', () => {
            setHoverOpen(false)
        });
    }, []);

    useEffect(() => {
        setShouldExpand(hoverOpen || isDrawerOpen);
    }, [hoverOpen, isDrawerOpen])

    const handleToggle = () => {
        setIsDrawerOpen(isDrawerOpen => !isDrawerOpen);
    }

    const handleExpandMenu = (index) => {
        const _menuItems = [...menuItems];
        // Set the selected menu to open
        _menuItems[index].isOpen = !_menuItems[index].isOpen
        // Set other menu items to close
        _menuItems.filter((menuItem, idx) => idx !== index)
            .forEach(menuItem => { menuItem.isOpen = false });

        setMenuItems(_menuItems);
    }

    const handleMenuSelection = (index) => {
        const _menuItems = [...menuItems];

        // Reset Menu selected on every click
        _menuItems.forEach(menuItem => {
            menuItem.isSelected = false;
            menuItem.subMenu.forEach(subMenu => {
                subMenu.isSelected = false;
            })
        })

        if (index.toString().includes('_')) {
            const [menuIndex, subMenuIndex] = index.split('_');
            _menuItems[menuIndex].isSelected = !_menuItems[menuIndex].isSelected;
            _menuItems[menuIndex].subMenu[subMenuIndex].isSelected =
                !_menuItems[menuIndex].subMenu[subMenuIndex].isSelected;
        } else {
            _menuItems[index].isSelected = !_menuItems[index].isSelected;
        }
        setMenuItems(_menuItems);
    }

    const handleMenuClick = (index) => {
        !index.toString().includes('_')
            && menuItems[index].hasChildren
            ? handleExpandMenu(index)
            : handleMenuSelection(index);
    }

    return (<BrowserRouter>
        <SidebarDrawer id="sidebar" shouldExpand={shouldExpand}>
            <BrandContainer>
                {shouldExpand && !brandName.logoPath
                    ? <Brand>{brandName.name}</Brand>
                    : <Fragment>
                        <BrandLogo src={brandName.logoPath} /><Brand shouldDisplay={shouldExpand}>{brandName.name}</Brand>
                    </Fragment>
                }
            </BrandContainer>
            {menuItems.map((mainMenu, index) => (
                <MenuContainer key={index} shouldExpand={shouldExpand}>
                    <MenuItem
                        to={mainMenu.to}
                        onClick={() => handleMenuClick(index)}
                        expanded={mainMenu.isOpen}
                        selected={mainMenu.isSelected}>
                        <MenuIcon shouldExpand={shouldExpand}>{mainMenu.icon}</MenuIcon>
                        <MenuName shouldExpand={shouldExpand}>
                            {mainMenu.name}
                        </MenuName>
                        {
                            mainMenu.hasChildren && shouldExpand
                            && <DropDownIcon open={mainMenu.isOpen || false} />
                        }
                    </MenuItem>
                    {
                        mainMenu.hasChildren && mainMenu.isOpen && (
                            mainMenu.subMenu.map((subMenuItem, sIndex) => (
                                <SubMenu
                                    to={`${mainMenu.to}${subMenuItem.to}`}
                                    key={sIndex}
                                    onClick={() => handleMenuClick(`${index}_${sIndex}`)}
                                    selected={subMenuItem.isSelected}
                                    activeStyle={{
                                        color: '#1abc9c'
                                    }}>
                                    {subMenuItem.icon && shouldExpand && (
                                        <MenuIcon shouldExpand={shouldExpand}>
                                            {subMenuItem.icon}
                                        </MenuIcon>
                                    )}
                                    <MenuName shouldExpand={shouldExpand}>
                                        {subMenuItem.name}
                                    </MenuName>
                                </SubMenu>
                            ))
                        )
                    }
                </MenuContainer>
            ))}

            <Toggle onClick={handleToggle}>
                <FontAwesomeIcon icon={faExchangeAlt} style={{ width: '1.3em', height: '1.3em' }} />
            </Toggle>

        </SidebarDrawer>
    </BrowserRouter>
    )
}

Sidebar.protoTypes = {
    brandName: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logoPath: PropTypes.string
    }),
    menuList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        hasChildren: PropTypes.bool.isRequired,
        subMenu: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired
        }))
    })),
    isExpanded: PropTypes.bool.isRequired
};

Sidebar.defaultProps = {
    brandName: {
        name: 'Sidebar'
    },
    menuList: [],
    isExpanded: true
}

export default Sidebar;
