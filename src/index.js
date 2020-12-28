import React, { useState, useEffect } from 'react';
import {
    NavLink
} from "react-router-dom";
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import useWindowWidth from './hooks/useWindowWidth';

const SidebarDrawer = styled.div`
        width: ${props => props.shouldExpand ? '20%' : '5%'};
        height: 100vh;
        max-width: 280px;
        min-width: 60px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        background-color: #222f3e;
        color: #bdc3c7;
        transition: all 0.5s ease-in;
    `;

const Brand = styled.h3`
        width: 100%;
        height: 3em;
        text-align: center;
        line-height: 3em;
        font-size: 1.2em;
        font-weight: bolder;
        letter-spacing: 0.1em;
        box-shadow: 0 2px 5px gray;
    `;

const MenuContainer = styled.div`
        width: 100%;
        padding-left: ${props => props.shouldExpand && '10px'};
    `;

const MenuItem = styled(NavLink)`
        width: 100%;
        height: 2.5em;
        display: flex;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        color: ${props => props.selected ? '#1abc9c' : '#bdc3c7'};
        cursor: pointer;

        &:hover {
            color: ${props => props.selected ? '#1dd1a1' : '#ecf0f1'};
        }

    `;

const MenuName = styled.p`
        display: ${props => props.shouldExpand ? 'block' : 'none'};
        line-height: 2.5em;
    `;

const MenuIcon = styled.div`
        width: 1.3em;
        height: 1.3em;
        margin: ${props => !props.shouldExpand && '0 auto'};
        margin-right: ${props => props.shouldExpand ? '10px' : 'auto'};
        line-height: 2.2em;
    `;

const SubMenu = styled(NavLink)`
        margin-left: 15px;
        display: flex;
        color: ${props => props.selected ? '#1abc9c' : '#bdc3c7'};
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${props => props.selected ? '#1dd1a1' : '#ecf0f1'};
        }

        &:visited {
            color: inherit;
        }
    `;

const DropDownIcon = styled.span`
        border: solid #ecf0f1;
        border-width: 0 1px 1px 0;
        transform: ${props => props.open ? 'rotate(-135deg)' : 'rotate(45deg)'};                    
        position: absolute;
        right: 25px;
        top: ${props => props.open ? '18px' : '19px'};
        padding: 3px;
        transition: 0.4s;
    `;

const Toggle = styled.div`
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
    `;

const Sidebar = props => {
    const {
        brandName,
        isExpanded = true,
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
    }, [SidebarDrawer]);

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

    return (
        <SidebarDrawer id="sidebar" shouldExpand={shouldExpand}>
            <Brand>
                {(isDrawerOpen || hoverOpen) ? brandName.longName : brandName.shortName}
            </Brand>
            {menuItems.map((mainMenu, index) => (
                <MenuContainer key={index} shouldExpand={shouldExpand}>
                    <MenuItem
                        to={mainMenu.to}
                        onClick={() => handleMenuClick(index)}
                        selected={mainMenu.isSelected}>
                        <MenuIcon shouldExpand={shouldExpand}>{mainMenu.icon}</MenuIcon>
                        <MenuName shouldExpand={shouldExpand}>
                            {mainMenu.name}
                        </MenuName>
                        {
                            mainMenu.hasChildren && (isDrawerOpen || hoverOpen)
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
                                    {subMenuItem.icon && (isDrawerOpen || hoverOpen) && (
                                        <MenuIcon>{subMenuItem.icon}</MenuIcon>
                                    )}
                                    <MenuName>
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
    )
}

export default Sidebar;
