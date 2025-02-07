import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Settings from './Settings'
import Home from './Home'
import Login from './Login'
import Moni from './Moni'
import Payment from './Payment'
import Sample from './Sample'
import Parent from './Parent'
import Child from './Child'

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/moni' element={<Moni/>} /> 
      <Route path='/payment' element={<Payment/>} /> 
      <Route path='/sample' element={<Sample/>} /> 
      <Route path='/parent' element={<Parent/>} /> 
      <Route path='/child' element={<Child/>} /> 
      
      
          
      </Routes>
      </Router>
    </div>
  )
}

export default App

