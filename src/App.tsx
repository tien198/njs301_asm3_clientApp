import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root'
import Error from './pages/Error'
import Home from './pages/home'
import { ClientRoutes } from './ultil/clientRoutes'
import Fallback from './components/UI/Fallback'

//routes
import shopRoute from './routes/shopRoute'
import cartRoute from './routes/cartRoute'

const Detail = lazy(() => import('./pages/detail'))
const Signup = lazy(() => import('./pages/authentication/Signup'))
const Login = lazy(() => import('./pages/authentication/Login'))



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        id: 'home-page',
        loader: (args) => import('./pages/home/loader').then(i => i.loader(args))
      },
      shopRoute,
      cartRoute,
      {
        path: `${ClientRoutes.Detail}/:productId`,
        element: <Suspense fallback={<Fallback />}>
          <Detail />
        </Suspense>,
        loader: (args) => import('./pages/detail/loader').then(i => i.loader(args))
      },
      {
        path: ClientRoutes.Login,
        element: <Suspense fallback={<Fallback />}>
          <Login />
        </Suspense>,
        loader: (args) => import('./pages/authentication/Login/loader').then(i => i.loader(args)),
        action: (args) => import('./pages/authentication/Login/action').then(i => i.action(args))
      },
      {
        path: ClientRoutes.Signup,
        element: <Suspense fallback={<Fallback />}>
          <Signup />
        </Suspense>,
        loader: (args) => import('./pages/authentication/Signup/loader').then(i => i.loader(args)),
        action: (args) => import('./pages/authentication/Signup/action').then(i => i.action(args))
      },
      {
        path: ClientRoutes.Logout,
        action: (args) => import('./pages/authentication/Logout').then(i => i.action(args))
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
