import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import DetailTasks from './Components/DetailTasks/DetailTasks'
import HomeBase from './Components/HomeBase/HomeBase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeBase />} />
        <Route path="/tasks/:taskId" element={<DetailTasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App