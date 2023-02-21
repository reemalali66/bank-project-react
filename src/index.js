import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import Section1 from './Section1';
import Section2 from './Section2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
 <>
<Header/>
<Section1/>
<Section2/>
<Footer/>
 </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

