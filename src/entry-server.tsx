import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

interface IRenderProps {
  path: string;
}

export function render({path}: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
        { router ? <RouterProvider router={router} /> : null}
        <StaticRouter location={path}>
        </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}