import React, { useState } from 'react'
import "./register.css"
import images from '../../assets/images';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  
  const [err,setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName =e.target[0].value;
    const email = e.target[1].value;
    const password =e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName+date}`);
      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async (downloadURL) =>{
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL:downloadURL,
            });
            console.log(res.user);
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          }
          catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    }

      
    catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className="logo">Hey Chat</span>
            <span className="title">Register</span>
            <form className="formElements" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file" className="photo">
                  <img src={images.Upload} alt="Upload" />
                  Add a Profile Photo
                </label>
                <button type="submit">Sign Up</button>
                {err && <span style={{color:"red"}}>Somethimg went wrong</span>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register