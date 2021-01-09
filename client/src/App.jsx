import React from 'react'
import './App.css'
import AccountStatus from './components/AccountStatus'
import Auth from './components/Auth'
import Balence from './components/Balence'
import Banking from './components/Banking'

const App = () => {
  return (
    <div>
      <Auth/>
      <Balence/>
      <Banking/>
      <AccountStatus/>
    </div>
  )
}

export default App
