import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

let renderEntireTree = (state) => (  
  root.render(
    <Provider store={store}>
        <App tab="home" state={state}/>
    </Provider>
  
  )
)

// let renderEntireTree = (state) => (
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//       <App />  
//       </Provider>
//     </React.StrictMode>,
    
//     document.getElementById('root')
//   )
// )

renderEntireTree (store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})

reportWebVitals();
