import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './styles/Main.css'

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
