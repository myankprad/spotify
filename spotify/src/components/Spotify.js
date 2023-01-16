import React from 'react'
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "cff76213089a4e228206c8bf120d67cb";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl =()=>{
  return window.location.hash
  .substring(1)
  .split('1')
  .reduce((initial, item)=>{
    let part= item.split('=');
    initial [part[0]] = decodeURIComponent(part[1]);
    return initial;
  }
),{}};



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirectUri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true` ;

const Spotify = () => {
  return (
    <div>Spotify</div>
  )
}

export default Spotify