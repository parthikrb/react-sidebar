import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook,
  faAddressCard,
  faBookmark,
  faRetweet
} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/Sidebar/Sidebar'
// import '@bapana/react-sidebar/lib/index.css'

const App = () => {
  const brandName = {
    name: 'Hello'
  }

  const menuList = [
    {
      name: 'Home',
      icon: <FontAwesomeIcon icon={faAddressBook} />,
      to: '/',
      hasChildren: false,
      subMenu: []
    },
    {
      name: 'Dashboard',
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      to: '/dashboard',
      hasChildren: true,
      subMenu: [
        {
          name: 'Board',
          icon: <FontAwesomeIcon icon={faBookmark} />,
          to: '/board'
        },
        {
          name: 'Report',
          icon: <FontAwesomeIcon icon={faRetweet} />,
          to: '/report'
        }
      ]
    }
  ]
  return <Sidebar brandName={brandName} menuList={menuList} />
}

export default App
