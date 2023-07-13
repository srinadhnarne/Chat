import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import "./home.css"

const Home = () => {
  return (
    <div className="chat__home">
        <div className="chat__home-container">
            <Sidebar/>
            <Chat/>
        </div>
        
    </div>
  )
}

export default Home