import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EclypsePage from './components/EclypsePage'
import EclypseCartPage from './components/EclypseCartPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <EclypsePage />
  },
  {
    path: '/eclypse/cart',
    element: <EclypseCartPage />
  }
  

])

function App() {

  return (
     <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
