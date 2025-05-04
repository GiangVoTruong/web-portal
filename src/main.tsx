// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app/app.scss'
import AppMain from './app/AppMain'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
)
