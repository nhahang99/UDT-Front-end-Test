import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../client/App'

const server = express()
const port = 3000
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

// server.use('/', express.static(path.join(__dirname, 'static')))

server.get('*', (req, res) => {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send('<!DOCTYPE html>' + html)
})

server.listen(port, () => {
  console.log(`Server running on ${port}`)
})
