import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import React from 'react'
// import routes from '../routes'

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default Router
