import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../client/app'
dotenv.config({ path: path.join(__dirname, '../', '.env') })

const server = express()
const port = process?.env?.PORT || 3001
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use('/', express.static(path.join(__dirname, 'static')))

server.get('*', (req, res) => {
  let body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  const html = `<!doctype html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR</title>
        <meta charset="utf-8">
        <meta name="description" content="udt-test-fe">
        <link rel="stylesheet" type="text/css" href="/client.css">
        <link rel="icon" href="https://www.calculator.net/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <label>This label from Server</label>
        <div id="root">${body}</div>
      </body>
    </html>`
  res.status(200).send(html)
})

server.listen(port, () => {
  console.log(`Server running on ${port}`)
})
