import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import SearchComponent from './components/SearchComponent'
import BooksDashboard from './components/BooksDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <BooksDashboard/>
    </>
  )
}

export default App
