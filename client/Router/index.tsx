import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import React from 'react'
import routes from '../routes'
import Calculator from '../pages/CalculatorPage'

const Router = () => {
  return (
    <Routes>
      <Route path={routes.value} element={<Calculator />} />
      <Route path={routes.home.value} element={<HomePage />} />
    </Routes>
  )
}

export default Router
