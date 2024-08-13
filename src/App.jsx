import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  )
}

export default App
