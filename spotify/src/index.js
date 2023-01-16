import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataLayer } from './components/DataLayer';
import reducer,  { initialstate } from './components/reducer';
import * as serviceWorker from "./components/serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <DataLayer initialState = {initialstate} reducer = {reducer}>
   <App />
  </DataLayer> 
  </React.StrictMode>
);

