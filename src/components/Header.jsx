import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
   const[signIn,setSignIn]=useState(false);
   const navigate=useNavigate();
   const user=useSelector(store=>store.user)

  const show=()=>{
    setSignIn(!signIn);
  }

    const handeler=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
      
    }   




  return (
    <div className='flex justify-end bg-gradient-to-b from-black z-10'>
    <div className='absolute  w-screen px-[15px] py-[10px] bg-gradient-to-b from-black z-10'>
    <img className="w-48" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt="logo"  />
    </div>
    {user && (
    <div className='absolute z-10   w-20 h-16 m-6 '>
    <img onClick={show} src={user?.photoURL}
    alt='user logo'  className='   w-12 h-12 rounded-lg'/>
    {signIn?<div><button onClick={handeler} className='bg-transparent text-white hover:bg-gray-400 hover:cursor-pointer hover:underline' >(Sign out)</button> </div> :null}
    </div>)}
    </div>
  )
}
 
export default Header;
