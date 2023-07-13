import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import './login.css'

const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div><div className="formContainer">
    <div className='formWrapper'>
        <span className="logo">Hey Chat</span>
        <span className="title">Login</span>
        <form className="formElements" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            {err && <span style={{color:"red",fontFamily:"sans-serif",fontStyle:"normal"}}>User Not Found</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
</div></div>
  )
}

export default Login