import React from 'react'

import Sidebar from '@bapana/react-sidebar'
import '@bapana/react-sidebar/dist/index.css'

const App = () => {
  const brandName = {
    longName: 'Hello',
    shortName: 'He'
  };

  const menuList = [
    {
      name: 'Home',
      icon: <p>H</p>,
      to: '/',
      hasChildren: false,
      subMenu: []
    }
  ];
  return <Sidebar brandName={brandName} menuList={menuList} />
}

export default App
