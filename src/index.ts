import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { App } from './examples/index'

const app = express()

app.use(express.static('dist'))

app.get('/', async (_req, res) => {
  const html = await fs.readFile(path.resolve(__dirname, './public/index.html'), 'utf-8')
  const appHtml = renderToString(React.createElement(App))
  const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  res.send(finalHtml)
  console.log('111', 111)
})

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 9000!')
})
