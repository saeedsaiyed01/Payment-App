import React from 'react'
import { Balance } from '../components/Balance'
import { Navbar } from '../components/Navbar'
import { Users } from '../components/UserComponent'
function Dashboard() {
  return (
    <div className="">
       <Navbar/>
        <Balance/>
        <Users/>
    </div>
  )
}

export default Dashboard
