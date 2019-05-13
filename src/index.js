import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {AuthProvider} from './context/auth-context'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
)
