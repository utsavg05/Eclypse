import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

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
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
