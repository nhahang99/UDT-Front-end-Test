import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import React from 'react'
import routes from '../routes'

const Router = () => {
  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
    </Routes>
  )
}

export default Router
