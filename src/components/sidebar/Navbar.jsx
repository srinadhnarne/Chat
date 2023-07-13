import React, { useContext } from 'react'
import "./Navbar.css"
import { signOut } from 'firebase/auth'
import {auth} from '../../firebase'
import {AuthContext} from '../../context/AuthContext'

const Navbar = () => {
const{currentUser} = useContext(AuthContext)

  return (
    <div className='chat__navbar'>
      <h1 className='chat__logo'>Hey Chat</h1>
      <div className='chat__navbar-user'>
        <img src={currentUser.photoURL} alt='DP' />
        <span>{currentUser.displayName}</span>
        <button type='submit' onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar