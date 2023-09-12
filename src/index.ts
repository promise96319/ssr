import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import type { StaticHandlerContext } from 'react-router-dom/server'
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server'
import fetch from 'node-fetch'
import { routes } from './examples/routes'

const app = express()

app.use(express.static('dist'))

app.get('/data', (_req, res) => {
  res.send({ data: 'data' })
})

app.get('/*', async (req, res) => {
  const html = await fs.readFile(path.resolve(__dirname, './public/index.html'), 'utf-8')
  const { query, dataRoutes } = createStaticHandler(routes)
  const request = new Request(`http://localhost:9000${req.originalUrl}`, { method: 'get' })
  const context = await query(request) as StaticHandlerContext

  const appHtml = renderToString(React.createElement(StaticRouterProvider, {
    router: createStaticRouter(dataRoutes, context),
    context,
  }))
  const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  res.send(finalHtml)
})

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 9000!')
})
