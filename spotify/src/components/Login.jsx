import React from 'react'
import spotify from './spotify.jpg'
import "./Login.css"
import { loginUrl } from './Spotify'

const Login = () => {
  return (
    <div className='login'>
      
      <img src={spotify} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login