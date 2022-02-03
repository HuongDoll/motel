import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import HomePage from './template/homePage/HomePage'

ReactDOM.render(
  <React.StrictMode>
    <HomePage></HomePage>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
