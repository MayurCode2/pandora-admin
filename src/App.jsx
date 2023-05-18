import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Main from './components/Dashboard/Main'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
    </>
  )
}

export default App
