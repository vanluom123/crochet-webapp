import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.css'
import RoutesComponent from './router'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <HashRouter>
      <RoutesComponent />
    </HashRouter>
  </React.StrictMode>
)