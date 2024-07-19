import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import RoutesComponent from './router'

interface IRenderProps {
  path: string;
}

export function render({path}: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
        <StaticRouter location={path}>
            <RoutesComponent />
        </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}