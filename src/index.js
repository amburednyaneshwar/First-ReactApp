import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
 Routes,
  Route,
  Link
} from "react-router-dom";
 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Test';

ReactDOM.render(

  <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/Test">Test</Link>
            </li>
            
          </ul>
  
          <Routes>
            
            <Route path="Test" element={<Test />} />

            <Route path="" element={<App />} />
           
            
          </Routes>
        </div>
      </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
