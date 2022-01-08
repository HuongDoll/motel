import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import HomePage from './template/homePage/HomePage'
// import 'grapesjs/dist/css/grapes.min.css'

ReactDOM.render(
  <React.StrictMode>
    <HomePage></HomePage>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
