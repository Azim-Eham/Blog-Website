import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Rootlayout} from './layout/Rootlayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NewsLetter from './pages/NewsLetter'
import React from 'react'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogPost/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
