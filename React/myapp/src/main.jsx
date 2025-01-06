import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './App.css'
import Exmp from './Exmp.jsx'
import Cow from './Cow.jsx'
import Index from './Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Exmp/> */}
    {/* <Cow name="cheran parambarai"/> */}
    <Index/>
  </StrictMode>,
)
