import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Toaster position="bottom-right"reverseOrder={false}/>
    <App />
  </StrictMode>
  </BrowserRouter>
)
