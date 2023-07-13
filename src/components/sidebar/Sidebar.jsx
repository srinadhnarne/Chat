import React from 'react'
import "./sidebar.css"
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="chat__sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar