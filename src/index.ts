import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import React from 'react'
import type { StaticHandlerContext } from 'react-router-dom/server'
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server'
import { buildClientRuntime } from '../script/build'
import { routes } from './examples/routes'

const app = express()

app.use(express.static('dist'))

app.get('/api/data/:time', (req, res) => {
  setTimeout(() => {
    res.send({ data: req.params.time })
  }, Number(req.params.time ?? 1) * 1000)
})

app.get('/*', async (req, res) => {
  await buildClientRuntime()
  const { query, dataRoutes } = createStaticHandler(routes)
  const request = new Request(`http://localhost:9000${req.originalUrl}`, { method: 'get' })
  const context = await query(request) as StaticHandlerContext

  const app = React.createElement(StaticRouterProvider, {
    router: createStaticRouter(dataRoutes, context),
    context,
  })

  const { pipe } = renderToPipeableStream(app, {
    bootstrapScripts: ['/client/index.js'],
    onShellReady: () => {
      res.setHeader('content-type', 'text/html')
      pipe(res)
    },
  })
  // const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  // res.send(finalHtml)
})

// app.get('/*', async (req, res) => {
//   const html = await fs.readFile(path.resolve(__dirname, './public/index.html'), 'utf-8')
//   const { query, dataRoutes } = createStaticHandler(routes)
//   const request = new Request(`http://localhost:9000${req.originalUrl}`, { method: 'get' })
//   const context = await query(request) as StaticHandlerContext
//   console.log('context', context)

//   const appHtml = renderToString(React.createElement(StaticRouterProvider, {
//     router: createStaticRouter(dataRoutes, context),
//     context,
//   }))
//   const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
//   res.send(finalHtml)
// })

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 9000!')
})
