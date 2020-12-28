# @bapana/react-sidebar

> Custom modern sidebar for react applications

[![NPM](https://img.shields.io/npm/v/@bapana/react-sidebar.svg)](https://www.npmjs.com/package/@bapana/react-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bapana/react-sidebar
```

## Usage

```jsx
import React, { Component } from 'react'

import Sidebar from '@bapana/react-sidebar'
import '@bapana/react-sidebar/dist/index.css'

class Example extends Component {
  render() {
    const brandName = {
      longName: 'Application',
      shortName: 'App'
    }

    const menuList = [
      {
        name: 'Home',
        to: '/',
        icon: <HomeIcon />,
        hasChildren: false,
        subMenu: []
      },
      {
        name: 'Dashboard',
        to: '/dashboard',
        icon: <DashBoardIcon />,
        hasChildren: true,
        subMenu: [
          {
            name: 'Board',
            to: '/board',
            icon: <BoardIcon />
          },
          {
            name: 'Report',
            to: '/report',
            icon: <ReportIcon />
          }
        ]
      }
    ]
    return <Sidebar brandName={brandName} menuList={menuList} />
  }
}
```

## Don't forget to wrap the App component with BrowserRouter

In order to use menu navigation, we should wrap the *App* component in **index.js** as below

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

## License

MIT © [Parthiban Baskar](https://github.com/Parthiban Baskar)
