import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal from './styles'


import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Cadastro',
    element: <Cadastro />
  },
  {
  path: '/editar/:id',
  element: <Cadastro />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
