import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Story from '../pages/story'
import Quiz from '../pages/quiz'
import Letter from '../pages/letter'
import Layout from '../components/layout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="story" element={<Story />} />
  <Route path="quiz" element={<Quiz />} />
  <Route path="letter" element={<Letter />} />
</Route>
    </Routes>
  )
}

export default AppRoutes