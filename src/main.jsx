import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import DataProvider from './context/data'
//layouts
import HomeLayout from './Layouts/HomeLayout'
import NaviagteCountry from './pages/NaviagteCountry'
import Country from './comps/Country'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/countries' element={<HomeLayout />}>
  <Route index element={<NaviagteCountry/>}/>
  <Route path='/countries/:id' element={<Country/>}/>
  </Route>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(

  <DataProvider>
    <RouterProvider router={router}/>
  </DataProvider>
)
