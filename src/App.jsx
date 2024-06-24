import React from 'react'
import { RouterProvider } from 'react-router-dom'
import rootRoutes from './pages'

function App() {
  return (
    <div>
      <RouterProvider router={rootRoutes} />
    </div>
  )
}

export default App