// src/components/Login.js
import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckvaildDATA } from '../utils/validates';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';
import { ProfilePic } from '../utils/constants';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); 
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch=useDispatch();

  const check = () => {
    const message = CheckvaildDATA(email?.current?.value, password?.current?.value, name?.current?.value);
    setError(message);

    if (!signIn) {
      // Sign up
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value, 
            photoURL: {ProfilePic}
          }).then(() => {
            // Profile updated!
             const {uid,email,displayName,photoURL} = auth.currentUser;
             dispatch(
              addUser
              ({uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL}));
            setUser(user); 
        
          }).catch((error) => {
            // An error occurred
            setError(error.message);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
         
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user); // Update state with user object
         
        
        }).then(() => {
          // Profile updated!
           const {uid,email,displayName,photoURL} = auth.currentUser;
           dispatch(
            addUser
            ({uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL}));
          setUser(user); 
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
         
        });
    }
  }

  const eventHandler = () => {
    setSignIn(!signIn);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg' alt='bglogo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-2/6 p-8 mt-32 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
        <label className='text-3xl font-bold ml-2'>{signIn ? "Sign In" : "Sign Up"}</label>
        {!signIn && <input ref={name} type='text' placeholder='Enter username' className='p-4 my-3 w-full h-12 bg-gray-700 rounded-md' />}
        <input type='text' ref={email} placeholder='Enter your email' className='p-4 my-3 w-full h-12 bg-gray-700 rounded-md' />
        <input type='password' ref={password} placeholder='Enter your password' className='p-4 my-3 w-full h-12 bg-gray-700 rounded-md' />
        <br />
        <p className='text-red-700 text-lg'>{error}</p>
        <button className='my-4 p-4 w-full rounded-md bg-red-700' onClick={check}>
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <h4 className='text-white cursor-pointer hover:underline' onClick={eventHandler}>{signIn ? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</h4>
      </form>
    </div>
  );
}

export default Login;
