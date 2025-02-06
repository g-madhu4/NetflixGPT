import React, { useState,useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import userLOGO from "./netflix_userLOGO.png";

const Header = () => {
   const[signIn,setSignIn]=useState(false);
   const navigate=useNavigate();
   const user=useSelector(store=>store.user)
   const dispatch=useDispatch();
  const show=()=>{
    setSignIn(!signIn);
  }

    const handeler=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
      
    }   
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
         
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        
        }
      });
      return unsubscribe;
    },[]);



  return (
    <div className='flex justify-end bg-gradient-to-b from-black z-10'>
    <div className='absolute  w-screen px-[15px] py-[10px] bg-gradient-to-b from-black z-10'>
    <img className="w-48" src={LOGO} alt="logo"  />
    </div>
    {user && (
    <div className='absolute z-10   w-20 h-16 m-6 '>
    <img onClick={show} src={userLOGO}
    alt='user logo'  className='   w-12 h-12 rounded-lg'/>
    {signIn?<div><button onClick={handeler} className='bg-transparent text-white hover:bg-gray-400 hover:cursor-pointer hover:underline' >(Sign out)</button> </div> :null}
    </div>)}
    </div>
  )
}
 
export default Header;
