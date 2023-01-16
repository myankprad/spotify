import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Spotify, { getTokenFromUrl } from './components/Spotify';
import Player from './components/Player'
import { useDataLayerValue } from './components/DataLayer';


const spotify = new SpotifyWebApi
function App() {
        
    //  const [ token , setToken ] = useState(null);
     const [ {user , token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash="";
      const _token = hash.access_token;

       if (_token) {
        setToken(_token);
        Spotify.setAccessToken(_token)
        Spotify.getMe().then((user)=> {
         
          dispatch ({
            type : 'SET_USER',
            user : user
          }

          )
        })
       }

         }, {})
  return (
    <div className="App">

     {
      token? <Player spotify={spotify}/> : 
      <Login />
     }
    </div>
  );
}

export default App;
