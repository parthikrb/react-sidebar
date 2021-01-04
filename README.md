# @bapana/react-sidebar

> Completely customizable modern sidebar built with light weight and modern libraries available in the market

[![NPM](https://img.shields.io/npm/v/@bapana/react-sidebar.svg)](https://www.npmjs.com/package/@bapana/react-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bapana/react-sidebar
```

## Usage

```jsx
import React from 'react'
// Sidebar Component
import Sidebar from '@bapana/react-sidebar'
import '@bapana/react-sidebar/lib/index.css'
// Icons for the menu and sub menu items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook,
  faAddressCard,
  faBookmark,
  faRetweet
} from '@fortawesome/free-solid-svg-icons'

const ExampleComponent = () => {
  const brandName = {
    name: 'Hello',
    logoPath: '/images/logo.png'
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
```

## Styles Customization

Passing the _theme_ property to Sidebar component as below will adopt the given color patterns

| Key         | Description                  |
| ----------- | ---------------------------- |
| header      | Sidebar Header color code    |
| menuItem    | Menu items color code        |
| expandArrow | Menu expand arrow color code |
| toggle      | Toggle arrow color code      |
| sidebar     | Sidebar color code           |

> below is the default color code

```js
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

```

## License

MIT © [Parthiban Baskar](https://github.com/parthikrb)
